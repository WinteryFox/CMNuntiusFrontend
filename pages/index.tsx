import React, {useEffect, useState} from "react";
import Head from 'next/head'
import Sidebar from "../components/chat/Sidebar";
import Chat from "../components/chat/Chat";
import EventSource from "eventsource";
import {Channel} from "../src/channel";
import {Message, MessageSnapshot, MoMessage} from "../src/json/message";
import {MtCreateResponse, ServerSentEvent, StatusReport} from "../src/json/response";
import {MessageCreateRequest} from "../src/json/request";
import rest from "../src/rest"
import Image from "next/image";


export default function Home() {
    const [active, setActive] = useState<string>("")
    const [conversations, setConversations] = useState<Map<string, Array<Message>>>(new Map([]))

    function determineLatest(us: string, messages: Array<Message>): MessageSnapshot {
        const message = messages
            .filter((v) => v.sender.number == us)
            .reduce((message1, message2) => new Date(message1.time) > new Date(message2.time) ? message1 : message2)

        return {
            from: message.sender,
            channel: Channel[message.channel.toUpperCase() as keyof typeof Channel],
            lastMessage: message.content.text,
            date: new Date(message.time)
        }
    }

    function updateConversation(conversation: string, message: Message) {
        const map = new Map(conversations)
        map.set(
            conversation,
            (map.get(conversation) ?? [])
                .concat(message)
                .sort((v1, v2) => {
                    if (v1.time && !v2.time)
                        return 1
                    else if (!v1.time && v2.time)
                        return -1
                    else if (v1.time && v2.time)
                        return new Date(v1.time) > new Date(v2.time) ? 1 : -1
                    else
                        return 0
                }),
        )

        setConversations(() => map)
    }

    async function createMessage(request: MessageCreateRequest) {
        const response = await rest.post("/messages", request)
        const payload = response.data as MtCreateResponse
        if (response.status < 200 || response.status >= 300) {
            // TODO: Handle error
            console.error(`Failed to send message ${response.status} (${payload.errorCode}; ${payload.details})`)
            return
        }

        console.info(`Sent message with reference ${payload.messages[0].reference}`)
        updateConversation(request.recipient, {
            sender: {
                number: request.sender
            },
            recipient: {
                number: request.recipient
            },
            reference: payload.messages[0].reference!,
            channel: request.channel,
            content: {
                text: request.content
            },
            time: new Date(),
            status: 0
        })
    }

    useEffect(() => {
        const source = new EventSource("http://localhost:8282/api/events")

        source.onerror = (event: any) => console.error(event)
        source.onopen = () => console.info("Now listening to events...")
        source.onmessage = (e) => {
            const event = JSON.parse(e.data) as ServerSentEvent

            switch (event.type) {
                case "MESSAGE": {
                    const payload = event.payload as MoMessage
                    updateConversation(payload.from.number, {
                        sender: payload.from,
                        recipient: payload.to,
                        reference: payload.reference,
                        channel: payload.channel,
                        content: payload.message,
                        time: new Date(payload.time)
                    })
                    console.info(`Received message with reference ${payload.reference}`)
                    break
                }
                case "STATUS": {
                    const payload = event.payload as StatusReport
                    console.info(`Received status report with reference ${payload.reference} status ${payload.status}`)
                    setConversations((prev) => {
                        const history = prev.get(payload.to)
                        if (!history)
                            return prev

                        const temp = new Map(prev)
                        temp.set(
                            payload.to,
                            history.map((message) => {
                                if (message.reference != payload.reference)
                                    return message
                                if (message.status && message.status >= payload.code)
                                    return message

                                return {
                                    ...message,
                                    status: payload.code
                                }
                            })
                        )
                        return temp
                    })
                    break
                }
                default: {
                    console.warn(`Received unknown event of type ${event.type}`)
                    break
                }
            }
        }

        return () => source.close()
    })

    const [showProfanity, setShowProfanity] = useState(false);

    function handleProfanityClick() {
        console.log(showProfanity)
        setShowProfanity(!showProfanity)
    }

    return (
        <div className={"flex h-full"}>
            <Head>
                <title>Messaging platform - Nuntius</title>
                <link rel="icon" href="/cm.svg"/>
            </Head>
            <Sidebar
                conversations={[...conversations.entries()].map(([us, messages]) => determineLatest(us, messages)).sort((v1, v2) => v1.date > v2.date ? -1 : 1)}
                onSelect={(id) => setActive(() => id)} selected={active} handleProfanityClick={handleProfanityClick}
                showProfanity={showProfanity}/>
            {active ?
                <Chat us={conversations.get(active)![0].recipient} them={conversations.get(active)![0].sender}
                      channel={conversations.get(active)![0].channel}
                      history={conversations.get(active)!} onMtCreate={createMessage}
                      profanityFilterActive={showProfanity}/>
                :
                <div className={"flex items-center justify-center dark:bg-black h-full w-full"}>
                    <div className={"flex flex-col"}>
                        <Image src={"/no-msg.png"} alt={"Logo"} width={450} height={400}/>
                        <span
                            className={"font-bold dark:text-white text-black text-base text-center"}>You have not selected any message</span>
                        <span className={"text-base dark:text-gray-400 text-center"}>Choose one from your existing messages</span>
                    </div>
                </div>
            }
        </div>
    )
}

import React, {createRef, useEffect, useState} from "react";
import Image from "next/image"
import {Channel} from "../../src/channel";
import {From, Message, To} from "../../src/json/message";
import {MessageCreateRequest} from "../../src/json/request";
import ChatMessage from "./ChatMessage";

// TODO: remove cm context menu components

export default function Chat(props: {
    us: To,
    them: From,
    channel: string,
    history: Array<Message>,
    onMtCreate: (content: MessageCreateRequest) => void
}) {
    const chatEnd = createRef<HTMLDivElement>()
    const [input, setInput] = useState<string>("")
    const [isSending, setSending] = useState<boolean>(false)

    async function sendMessage(event: React.MouseEvent) {
        event.preventDefault()

        if (!input)
            return

        setSending(() => true)
        try {
            props.onMtCreate({
                sender: props.history[0].recipient.number,
                recipient: props.history[0].sender.number,
                content: input,
                channel: props.history[0].channel.toUpperCase()
            } as MessageCreateRequest)
        } catch (err) {
            console.error(err)
        } finally {
            setSending(() => false)
        }
        setInput(() => "")
    }

    useEffect(() => chatEnd.current?.scrollIntoView({behavior: "smooth"}))

    return (
        <div className={"flex flex-col w-full"}>
            <div className="flex items-center justify-between dark:bg-black p-5 border-b border-gray-200 dark:border-gray-700">
                <div className={"flex items-center "}>
                    <Image
                        src={Channel[props.channel.toUpperCase().replace(" ", "_") as keyof typeof Channel] as any}
                        alt={"channel"} width={30} height={30}/>

                    <div className={"ml-2 text-xl font-bold text-nowrap text-truncate dark:text-white"}>
                        {props.them.number ? props.them.name : props.them.number}
                    </div>
                </div>
            </div>
            <div className="body overflow-y-auto bg-white dark:bg-black h-full">
                <div className={"flex flex-col p-10"}>
                    {props.history.map((message) => (
                        <ChatMessage key={message.reference} message={message} us={props.us}/>
                    ))}
                    <div ref={chatEnd}/>
                </div>
            </div>
            <div className="flex w-full justify-center px-10 py-5 border-t border-gray-200 dark:border-gray-700 dark:bg-black">
                <input type={"text"}
                       className="dark:bg-black border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:text-white w-full rounded-3xl px-5 mr-5"
                       placeholder={`Message ${props.them.name ? props.them.name : props.them.number}`} value={input}
                       onChange={(event) => setInput(event.target.value)}/>

                <button className={"flex items-center justify-center p-3 rounded-full hover:bg-blue-400 hover:bg-opacity-10 hover:dark:bg-opacity-20 transition-bg duration-200"} onClick={sendMessage} disabled={isSending}>
                    <i className={"fas fa-paper-plane text-blue-500"}/>
                </button>
            </div>
        </div>
    );
}

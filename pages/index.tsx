import React, {useEffect, useState} from "react";
import Sidebar from "../components/chat/Sidebar";
import Chat from "../components/chat/Chat";
import EventSource from "eventsource";
import {Channel} from "../src/channel";
import {MessageSnapshot, MoMessage} from "../src/json/message";

export default function Home() {
    const [active, setActive] = useState<string>("")
    const [conversations, setConversations] = useState<Map<string, Array<MoMessage>>>(new Map([]))

    function determineLatest(messages: Array<MoMessage>): MessageSnapshot {
        const message = messages.reduce((message1, message2) =>
            new Date(message1.time) > new Date(message2.time) ? message1 : message2)

        return {
            from: message.from,
            channel: Channel[message.channel.toUpperCase() as keyof typeof Channel],
            lastMessage: message.message.text,
            date: new Date(message.time)
        }
    }

    useEffect(() => {
        const source = new EventSource("http://localhost:8282/api/events")

        source.onerror = (event: any) => console.error(event)
        source.onopen = () => console.info("Now listening to events...")
        source.onmessage = (e) => {
            const payload = JSON.parse(e.data).payload as MoMessage
            const map = new Map(conversations)
            map.set(
                payload.from.number,
                (map.get(payload.from.number) ?? [])
                    .concat([payload])
                    .sort((v1, v2) => new Date(v1.time) > new Date(v2.time) ? 1 : -1),
            )

            setConversations(() => map)
            console.info(`Received message with reference ${payload.reference}`)
        }

        return () => source.close()
    })

    return (
        <div className={"flex h-full"}>
            <Sidebar conversations={[...conversations.values()].map((messages) => determineLatest(messages))}
                     onSelect={(id) => setActive(() => id)} selected={active}/>
            <Chat history={conversations.get(active)}/>
        </div>
    )
}

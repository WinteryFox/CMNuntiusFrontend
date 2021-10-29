import React, {useEffect, useState} from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import EventSource from "eventsource";
import {Message, MessageSnapshot} from "../src/Message";
import {Channel} from "../src/Channel";

export default function Home() {
    const [active, setActive] = useState<string>("")
    const [conversations, setConversations] = useState<Map<string, Array<Message>>>(new Map([]))

    function determineLatest(messages: Array<Message>): MessageSnapshot {
        const message = messages.reduce((message1, message2) => {
            const date1 = new Date(message1.timeUtc)
            const date2 = new Date(message2.timeUtc)

            return date1 > date2 ? message1 : message2
        })

        return {
            from: message.from,
            channel: Channel[message.channel.toUpperCase() as keyof typeof Channel],
            lastMessage: message.message.text,
            date: new Date(message.timeUtc)
        }
    }

    useEffect(() => {
        const source = new EventSource("http://localhost:8282/api/events")

        source.onerror = (event: any) => console.error(event)
        source.onopen = () => console.log("Now listening to events...")
        source.onmessage = (e) => {
            const payload = JSON.parse(e.data).payload as Message
            const map = new Map(conversations)
            map.set(
                payload.from.number,
                (map.get(payload.from.number) ?? []).concat([payload]),
            )

            setConversations(() => map)
        }

        return () => source.close()
    })

    return (
        <div className={"flex h-full"}>
            <ChatSidebar conversations={[...conversations.values()].map((messages) => determineLatest(messages))}
                         onSelect={(id) => setActive(() => id)} selected={active}/>
            <ChatWindow history={conversations.get(active)}/>
        </div>
    )
}

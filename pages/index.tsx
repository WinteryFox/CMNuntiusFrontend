import React, {useEffect, useState} from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import EventSource from "eventsource";
import Message from "../src/Message";

export default function Home() {
    const [active, setActive] = useState<string>()
    const [history, setHistory] = useState<Array<Message>>([])

    useEffect(() => {
        const source = new EventSource("http://localhost:8282/api/events")

        source.onerror = (event: any) => console.error(event)
        source.onopen = () => console.log("Now listening to events...")
        source.onmessage = (e: Event) => setHistory(() => [...history, JSON.parse(e.data).payload])

        return () => source.close()
    })

    return (
        <div className={"flex h-full"}>
            <ChatSidebar/>
            <ChatWindow history={history}/>
        </div>
    )
}

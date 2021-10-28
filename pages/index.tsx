import React from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
    return (
        <div className={"flex h-full"}>
            <ChatSidebar/>
            <ChatWindow/>
        </div>
    )
}

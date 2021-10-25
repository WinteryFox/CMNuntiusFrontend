import type {NextPage} from 'next'
import Script from "next/script";
import Chatsidebar from "../components/chatsidebar";
import React from "react";
import Chatwindow from "../components/chatwindow";

const Home: NextPage = () => {
    return (
        <div className={"flex h-full"}>
            <Chatsidebar/>
            <Chatwindow/>
        </div>
    )
}

export default Home

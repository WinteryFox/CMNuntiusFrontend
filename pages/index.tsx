import type {NextPage} from 'next'
import Script from "next/script";
import Chatsidebar from "../components/chatsidebar";
import React from "react";
import Chatwindow from "../components/chatwindow";

const Home: NextPage = () => {
    return (
        <div className={"flex h-full"}>
            <Script src={"https://www.cm.com/en-gb/app/aurora/js/webcomponents-loader.js"}/>
            <Script src={"https://www.cm.com/en-gb/app/aurora/js/aurora-components-legacy.js"}/>

            <Chatsidebar/>
            <Chatwindow/>
        </div>
    )
}

export default Home

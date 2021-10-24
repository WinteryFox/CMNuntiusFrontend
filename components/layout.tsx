import Navbar from "./navbar";
import React from "react";
import Chatsidebar from "./chatsidebar";
import Chatwindow from "./chatwindow";
import React, {ReactNode} from "react";

export default function Layout(props: { children: ReactNode }) {
    return (
        <>

            <Navbar></Navbar>
            <div style={{scrollBehavior: 'smooth'}} className={"flex height-body"}>
                <Chatsidebar></Chatsidebar>
                <Chatwindow></Chatwindow>
            </div>

            <main>{props.children}</main>

        </>
    )
}

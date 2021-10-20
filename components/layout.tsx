import Navbar from "./navbar";
import React from "react";
import Chatsidebar from "./chatsidebar";
import Chatwindow from "./chatwindow";

export default function Layout({children}: HTMLElement) {
    return (
        <>
            <Navbar></Navbar>
            <div style={{scrollBehavior: 'smooth'}} className={"flex height-body"}>
                <Chatsidebar></Chatsidebar>
                <Chatwindow></Chatwindow>
            </div>

            <main>{children}</main>
        </>
    )
}

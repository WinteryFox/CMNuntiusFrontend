import React from 'react';
import Conversations from "./conversations";

interface Props {
    title: string,
    icon: string,

}

function Chatsidebar(props: Props) {
    return (
        <>
            <div style={{ width: '300px' }} className={"flex-col"}>
                <div className={"flex h-8"}>
                    <div className={"flex-col px-6 mx-2"}>
                        <h3>{props.title ? props.title : "Chats"}</h3>
                    </div>
                    <div className={"flex flex-row-reverse px-6 mx-2 w-full items-center"}>
                        <i className={props.icon ? props.icon : "fa fa-arrow-circle-left h-8 w-8"}></i>
                    </div>
                </div>
                <div className={"flex flex-row border-b-2"}>
                    <input className={"rounded-full py-2 px-6 m-2 w-full"} type="search" name="search" placeholder="Search" />
                    <button type="submit"></button>
                </div>
                <div style={{ height: '100vh' }} className={"overflow-auto border-r-2"}>
                    <Conversations channel={"/twitter.svg"} name={"Giang"} content={"I need help!!!!"} time={"13 oct. 2020"}/>
                </div>
            </div>

        </>
    );
}

export default Chatsidebar;
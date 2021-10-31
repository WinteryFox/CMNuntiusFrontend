import React from 'react';
import Image from "next/image";
import {Channel} from "../../src/channel"
import {From} from "../../src/json/message";

export default function Conversation(props: {
    from: From,
    channel: Channel,
    content: string,
    time: string,
    active: boolean,
    onSelect: (id: string) => void
}) {
    return (
        <div className={`flex items-center cursor-pointer select-none rounded-3xl p-3 duration-200 ${props.active ? "bg-white" : "hover:bg-opacity-50 hover:bg-white hover:shadow"}`}
             onClick={() => props.onSelect(props.from.number)}>
            <Image src={props.channel as any} alt={"Logo"} width={50} height={50}/>

            <div className={"flex flex-column ml-2 w-full overflow-hidden leading-tight"}>
                <div className={"flex justify-between items-center"}>
                    <p className={"text-base font-bold text-nowrap text-truncate"}>
                        {props.from.name ? props.from.name : props.from.number}
                    </p>
                    <time className={"flex-shrink-0"}>{props.time}</time>
                </div>

                <p className={"text-nowrap text-truncate"}>{props.content}</p>
            </div>
        </div>
    );
}

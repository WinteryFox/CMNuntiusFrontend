import React from 'react';
import Image from "next/image";
import {Channel} from "../../src/channel"
import {From} from "../../src/json/message";
import {formatDate} from "../../src/json/response";

//TODO: Time persistent counting to last msg (10s ago, yesterday, full date)

export default function Conversation(props: {
    from: From,
    channel: Channel,
    content: string,
    time: Date,
    active: boolean,
    onSelect: (id: string) => void
}) {
    return (
        <div className={`cursor-pointer select-none hover:bg-opacity-50 pr-1.5 
            ${props.active ? "border-r-2 border-blue-300" : "hover:border-r-2 hover:border-gray-200"}`}>
            <div
                className={`flex items-center cursor-pointer select-none rounded-3xl p-3 hover:bg-opacity-50 hover:bg-white hover:shadow`}
                onClick={() => props.onSelect(props.from.number)}>
                <Image src={props.channel as any} alt={"Logo"} width={50} height={50}/>

                <div className={"flex flex-column ml-2 w-full overflow-hidden leading-tight"}>
                    <div className={"flex justify-between items-center"}>
                        <p className={"text-base font-bold text-nowrap text-truncate"}>
                            {props.from.name ? props.from.name : props.from.number}
                        </p>
                        <time dateTime={props.time.toISOString()}
                              className={"flex-shrink-0"}>{formatDate(props.time)}</time>
                    </div>

                    <p className={"text-nowrap text-truncate"}>{props.content}</p>
                </div>
            </div>
        </div>
    );
}

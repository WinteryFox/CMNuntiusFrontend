import React from 'react';
import Image from "next/image";

export default function Conversations(props: {
    name: string,
    channel: string,
    content: string,
    time: string,
}) {
    return (
        <div className={"flex cursor-pointer select-none rounded-3xl p-3 hover:shadow-lg duration-200"}>
            <Image src={props.channel} alt={"Logo"} width={50} height={50}/>

            <div className={"flex flex-column ml-2 w-full overflow-hidden"}>
                <div className={"flex justify-between"}>
                    <p className={"text-base font-bold text-nowrap text-truncate mr-20"}>{props.name}</p>
                    <time className={"flex-shrink-0"}>{props.time}</time>
                </div>

                <p className={"text-nowrap text-truncate"}>{props.content}</p>
            </div>
        </div>
    );
}

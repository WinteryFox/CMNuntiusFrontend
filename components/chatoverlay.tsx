import React from 'react';
import Image from "next/image";

interface Props {
    name: string,
    channel: string,
    content: string,
    time: string,
}

function Chatoverlay(props: Props) {
    return (

            <div className={"flex h-full w-1/5 p-2 border-b-2"}>
                <div className={"inline-flex"}>
                    <Image className={"w-auto"} src={props.channel} alt={"Logo"} width={50} height={50}/>
                    <div className={"block"}>
                        <p className={"text-lg font-bold pl-3.5 text-black"}>{props.name}</p>
                        <p className={"pl-3.5"}>{props.content}</p>
                    </div>
                    <time dateTime={props.time} className={"py-0.5"}>{props.time}</time>
                </div>
            </div>

    );
}

export default Chatoverlay;

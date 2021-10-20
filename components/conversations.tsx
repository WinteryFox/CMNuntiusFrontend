import React from 'react';
import Image from "next/image";

interface Props {
    name: string,
    channel: string,
    content: string,
    time: string,
}

function Conversations(props: Props) {

    return (
        <div className={"list-group m-t-24 row"}>
            <div className={"list-group-content row p-2"}>
                <div className={"flex"}>
                    <Image src={props.channel} alt={"Logo"} width={50} height={50}/>
                    <div>
                        <div className={"flex justify-between"}>
                            <p style={{width: 150}} className={"text-m font-bold pl-3.5 text-black text-nowrap text-truncate"}>{props.name}</p>
                            <time className={"flex py-0.5"}>{props.time}</time>
                        </div>
                        <p style={{width: 275}} className={"pl-3.5 text-nowrap text-truncate"}>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conversations;

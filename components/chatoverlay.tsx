import React from 'react';
import Image from "next/image";

interface Props {
    name: string,
    avatar: string,
    latestMessage: string,
}

function Chatoverlay(props: Props) {
    return (

            <div className={"flex h-full w-1/5"}>
                <div className={"inline-flex items-center"}>
                    <Image className={"w-auto"} src={"/cm.svg"} alt={"Logo"} width={50} height={50}/>
                         <span className="badge small bottom-right" aria-hidden="true">
                            <span className="cm-channel cm-channel-whatsapp-simple" aria-hidden="false"></span>
                         </span>

                    <h3>{props.name}</h3>
                </div>
            </div>

    );
}

export default Chatoverlay;

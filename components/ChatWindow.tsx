import React from "react";
import Image from "next/image"
import {formatDate, Message} from "../src/Message";
import {Channel} from "../src/Channel";

// TODO: properties,text templates and reformat code for unique user chat window
export default function ChatWindow(props: {
    history: Array<Message> | undefined
}) {
    if (props.history)
        return (
            <div className={"bg-white w-full"}>
                <cm-communicator>
                    <div className="header flex items-center justify-between">
                        <div className={"flex items-center"}>
                            <Image
                                src={Channel[props.history[0]?.channel.toUpperCase() as keyof typeof Channel] as any}
                                alt={"channel"} objectFit={"fill"}/>

                            <div className={"ml-2 text-xl font-bold text-nowrap text-truncate"}>
                                {props.history[0]?.from.name ? props.history[0]?.from.name : props.history[0]?.from.number}
                            </div>
                        </div>

                        <cm-context-menu>
                            <cm-context-menu-option data-icon="edit" data-display="Edit"/>
                            <cm-context-menu-option data-icon="duplicate" data-display="Duplicate"/>

                            <cm-context-menu-option
                                data-href="data:text/plain;charset=utf-8,this is a textual download"
                                data-download="myfile.txt"
                                data-icon="download"
                                data-display="Download myfile.txt"/>
                            <cm-context-menu-line/>
                        </cm-context-menu>
                    </div>
                    <div className="footer">
                        <div className="row">
                            <div className="col-10 col-md-11 form-group">
                                <div className="form-row">
                                    <div className="form-input-special">
                                        <input type="text" className="form-control "
                                               placeholder="Start typing… "/>
                                        <span className="input-left icon">
                                    <span className=" cm-icon cm-icon-comment" aria-hidden="true"/>
                                </span>
                                        <span className="input-right icon">
                                    <span className="cm-icon cm-icon-attachment" aria-hidden="true"/>
                                    <span className="cm-icon cm-icon-face-happy-open" aria-hidden="true"/>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 col-md-1 text-right">
                                <button className="btn btn-cta-icon">
                                    <span className="cm-icon cm-icon-send" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <cm-conversation>
                            {props.history && props.history.map((message) => (
                                <div key={message.reference} className="mb-2 w-2/5">
                                    <div
                                        className={"whitespace-pre-wrap break-all bg-white p-5 rounded-3xl text-black"}>
                                        {message.message.text}
                                    </div>

                                    <div className={"flex mt-0.5 items-center justify-between"}>
                                        <div className={"flex overflow-hidden"}>
                                            <div className={"text-nowrap text-truncate"}>
                                                {message.from.name ? message.from.name : message.from.number}
                                            </div>
                                        </div>
                                        <div className="time flex flex-shrink-0">
                                            {formatDate(new Date(message.timeUtc))}
                                        </div>
                                    </div>
                                </div>))}
                        </cm-conversation>
                    </div>
                </cm-communicator>
            </div>
        );
    else
        return (
            <div className={"flex items-center justify-center w-full md:text-xl"}>
                No active conversation
            </div>
        )
}

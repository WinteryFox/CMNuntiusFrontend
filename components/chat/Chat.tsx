import React, {createRef, useEffect, useState} from "react";
import Image from "next/image"
import {formatDate} from "../../src/json/response";
import {Channel} from "../../src/channel";
import {From, Message, To} from "../../src/json/message";
import {MessageCreateRequest} from "../../src/json/request";

export default function Chat(props: {
    us: To,
    them: From,
    channel: string,
    history: Array<Message>,
    onMtCreate: (content: MessageCreateRequest) => void
}) {
    const chatEnd = createRef<HTMLDivElement>()
    const [input, setInput] = useState<string>("")
    const [isSending, setSending] = useState<boolean>(false)

    async function sendMessage(event: React.MouseEvent) {
        event.preventDefault()

        if (!input)
            return

        setSending(() => true)
        try {
            props.onMtCreate({
                sender: props.history[0].recipient.number,
                recipient: props.history[0].sender.number,
                content: input,
                channel: props.history[0].channel.toUpperCase()
            } as MessageCreateRequest)
        } catch (err) {
            console.error(err)
        } finally {
            setSending(() => false)
        }
        setInput(() => "")
    }

    useEffect(() => chatEnd.current?.scrollIntoView({behavior: "smooth"}))

    return (
        <div className={"flex flex-col w-full"}>
            <div className="flex items-center justify-between p-5 border-b">
                <div className={"flex items-center"}>
                    <Image
                        src={Channel[props.channel.toUpperCase() as keyof typeof Channel] as any}
                        alt={"channel"} width={30} height={30}/>

                    <div className={"ml-2 text-xl font-bold text-nowrap text-truncate"}>
                        {props.them.number ? props.them.name : props.them.number}
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
            <div className="body overflow-y-auto bg-gray-50 h-full">
                <div className={"flex flex-col p-10"}>
                    {props.history.map((message) => (
                        <div key={message.reference}
                             className={`flex flex-col mb-2 w-2/5 ${message.sender.number == props.us.number ? "align-self-end" : ""}`}>
                            <div
                                className={`whitespace-pre-wrap break-words bg-white p-5 rounded-3xl text-black ${message.sender.number == props.us.number ? "bg-blue-400 text-white" : ""}`}>
                                {message.content.text}
                            </div>

                            {message.sender.number != props.us.number ?
                                <div className={"flex mt-0.5 items-center justify-between"}>
                                    <div className={"flex overflow-hidden"}>
                                        <div className={"text-nowrap text-truncate"}>
                                            {message.sender.name ? message.sender.name : message.sender.number}
                                        </div>
                                    </div>
                                    <time dateTime={message.time.toISOString()} className="time flex flex-shrink-0">
                                        {formatDate(message.time)}
                                    </time>
                                </div> :
                                <div className={"flex mt-0.5 items-center justify-end"}>
                                    <time dateTime={message.time.toISOString()} className={"mr-2"}>
                                        {formatDate(message.time)}
                                    </time>
                                    {message.status == 0 &&
                                    <i className={"fas fa-spinner animate-spin w-16px"} title={"Accepted"}/>}
                                    {message.status == 1 &&
                                    <i className={"fas fa-times text-red-400"} title={"Rejected"}/>}
                                    {message.status == 2 &&
                                    <i className={"fas fa-check"} title={"Sent"}/>}
                                    {message.status == 3 &&
                                    <i className={"fas fa-times-circle text-red-400"} title={"Failed"}/>}
                                    {message.status == 4 &&
                                    <i className={"fas fa-check text-blue-400"} title={"Read"}/>}
                                </div>
                            }
                        </div>
                    ))}
                    <div ref={chatEnd}/>
                </div>
            </div>
            <div className="flex w-full justify-center px-10 py-5 border-t-0">
                <input className="w-full rounded-3xl px-5 mr-5 border-2"
                       placeholder={`Message ${props.them.name ? props.them.name : props.them.number}`} value={input}
                       onChange={(event) => setInput(event.target.value)}/>

                <button className="btn btn-cta-icon" onClick={sendMessage} disabled={isSending}>
                    <span className="cm-icon cm-icon-send" aria-hidden="true"/>
                </button>
            </div>
        </div>
    );
}

import React, {useState} from "react";
import Image from "next/image"
import {formatDate} from "../../src/json/response";
import {Channel} from "../../src/channel";
import {From, Message, To} from "../../src/json/message";
import {MessageCreateRequest} from "../../src/json/request";

// TODO: properties,text templates and reformat code for unique user chat window
export default function Chat(props: {
    us: To,
    them: From,
    channel: string,
    history: Array<Message>,
    onMtCreate: (content: MessageCreateRequest) => void
}) {
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

    return (
        <div className={"bg-white w-full"}>
            <cm-communicator>
                <div className="header flex items-center justify-between">
                    <div className={"flex items-center"}>
                        <Image
                            src={Channel[props.channel.toUpperCase() as keyof typeof Channel] as any}
                            alt={"channel"} objectFit={"fill"}/>

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
                <div className="body overflow-y-auto">
                    <div className={"flex flex-col p-10"}>
                        {props.history.map((message) => (
                            <div key={message.reference}
                                 className={`flex flex-col mb-2 w-2/5 ${message.sender.number == props.us.number ? "align-self-end" : ""}`}>
                                <div
                                    className={`whitespace-pre-wrap break-all bg-white p-5 rounded-3xl text-black ${message.sender.number == props.us.number ? "bg-blue-400 text-white" : ""}`}>
                                    {message.content.text}
                                </div>

                                {message.sender.number != props.us.number ?
                                    <div className={"flex mt-0.5 items-center justify-between"}>
                                        <div className={"flex overflow-hidden"}>
                                            <div className={"text-nowrap text-truncate"}>
                                                {message.sender.name ? message.sender.name : message.sender.number}
                                            </div>
                                        </div>
                                        <div className="time flex flex-shrink-0">
                                            {formatDate(message.time)}
                                        </div>
                                    </div> :
                                    <div className={"flex mt-0.5 items-center justify-end"}>
                                        <div className={"mr-2"}>
                                            {formatDate(message.time)}
                                        </div>
                                        <div>
                                            {message.status /* TODO: Display icons instead */}
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="col-10 col-md-11 form-group">
                            <div className="form-row">
                                <div className="form-input-special">
                                    <input className="form-control" placeholder="Start typing… " value={input}
                                           onChange={(event) => setInput(event.target.value)}/>
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
                            <button className="btn btn-cta-icon" onClick={sendMessage} disabled={isSending}>
                                <span className="cm-icon cm-icon-send" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>
            </cm-communicator>
        </div>
    );
}

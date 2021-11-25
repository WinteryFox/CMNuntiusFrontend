import {apiUri} from "../../src/rest";
import {formatDate} from "../../src/json/response";
import React, {ReactNode} from "react";
import Image from "next/image"
import {Message, To} from "../../src/json/message";

export default function ChatMessage(props: {
    message: Message,
    us: To
}) {
    function getAttachmentUrl(): string {
        if (!props.message.content.media)
            return ""

        const uri = props.message.content.media?.mediaUri
        const contentType = props.message.content.media?.contentType
        const id = uri.substring(uri.lastIndexOf("/files/") + 7, uri.lastIndexOf("/content"))
        return `${apiUri}/attachments/${encodeURIComponent(id)}?contentType=${encodeURIComponent(contentType)}`
    }

    function renderAttachment(): ReactNode {
        if (!props.message.content.media)
            return null

        if (props.message.content.media.contentType.startsWith("image/")) {
            return (
                <Image
                    src={getAttachmentUrl()}
                    alt={props.message.content.media.title} width={"100%"} height={"100%"} layout={"responsive"}
                    objectFit={"scale-down"} objectPosition={"center"}/>)
        } else if (props.message.content.media.contentType.startsWith("video/")) {
            return (
                <video width={"100%"} height={"100%"} title={props.message.content.media.title} autoPlay loop
                       controls>
                    <source src={getAttachmentUrl()} type={props.message.content.media.contentType}/>
                </video>)
        } else if (props.message.content.media.contentType.startsWith("audio/")) {
            return (
                <audio title={props.message.content.media.title} controls>
                    <source src={getAttachmentUrl()} type={props.message.content.media.contentType}/>
                </audio>)
        } else {
            // TODO: Make this prettier
            return (
                <div>
                    {props.message.content.media.title}
                </div>)
        }
    }

    return (
        <div key={props.message.reference}
             className={`flex flex-col mb-2 w-2/5 ${props.message.sender.number == props.us.number ? "align-self-end" : ""}`}>
            <div
                className={`bg-white dark:text-white p-5 rounded-3xl text-black ${props.message.sender.number == props.us.number ? "bg-blue-400" : "dark:bg-gray-700"}`}>
                {props.message.content.text}
                {props.message.content.media && props.message.content.media.mediaUri &&
                <div className={`block max-w-[256px] max-h-[256px] rounded-3xl`}>
                    <a href={getAttachmentUrl()} target={"_blank"} rel={"noreferrer"} download>
                        {renderAttachment()}
                    </a>
                </div>}
            </div>

            {props.message.sender.number != props.us.number ?
                <div className={"flex mt-0.5 items-center justify-between dark:text-white"}>
                    <div className={"flex overflow-hidden"}>
                        <div className={"text-nowrap text-truncate"}>
                            {props.message.sender.name ? props.message.sender.name : props.message.sender.number}
                        </div>
                    </div>
                    <time dateTime={props.message.time.toISOString()} className="time flex flex-shrink-0">
                        {formatDate(props.message.time)}
                    </time>
                </div> :
                <div className={"flex mt-0.5 items-center justify-end dark:text-white"}>
                    <time dateTime={props.message.time.toISOString()} className={"mr-2"}>
                        {formatDate(props.message.time)}
                    </time>
                    {props.message.status == 0 &&
                    <i className={"fas fa-spinner animate-spin w-16px"} title={"Accepted"}/>}
                    {props.message.status == 1 &&
                    <i className={"fas fa-times text-red-400"} title={"Rejected"}/>}
                    {props.message.status == 2 &&
                    <i className={"fas fa-check"} title={"Sent"}/>}
                    {props.message.status == 3 &&
                    <i className={"fas fa-times-circle text-red-400"} title={"Failed"}/>}
                    {props.message.status == 4 &&
                    <i className={"fas fa-check text-blue-400"} title={"Read"}/>}
                </div>
            }
        </div>
    )
}

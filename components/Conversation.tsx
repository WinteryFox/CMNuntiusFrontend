import React from 'react';
import Image from "next/image";
import {Channel} from "../src/Channel"
import Twitter from "../resources/twitter.svg"
import SMS from "../resources/sms.svg"
import Viber from "../resources/viber.svg"
import AppleBusiness from "../resources/apple-business.svg"
import WhatsAppBusiness from "../resources/whatsapp.svg"
import Telegram from "../resources/telegram.svg"
import WeChat from "../resources/wechat.svg"
import Line from "../resources/line.svg"

export default function Conversations(props: {
    name: string,
    channel: Channel,
    content: string,
    time: string,
}) {
    let icon
    switch (props.channel) {
        case Channel.TWITTER:
            icon = Twitter
            break
        case Channel.VIBER:
            icon = Viber
            break
        case Channel.APPLE_BUSINESS_CHAT:
            icon = AppleBusiness
            break
        case Channel.SMS:
            icon = SMS
            break
        case Channel.WHATSAPP_BUSINESS:
            icon = WhatsAppBusiness
            break
        case Channel.TELEGRAM:
            icon = Telegram
            break
        case Channel.WECHAT:
            icon = WeChat
            break
        case Channel.LINE:
            icon = Line
            break
        default:
            icon = SMS
    }

    return (
        <div className={"flex cursor-pointer select-none rounded-3xl p-3 hover:shadow duration-200"}>
            <Image src={icon} alt={"Logo"} width={50} height={50}/>

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

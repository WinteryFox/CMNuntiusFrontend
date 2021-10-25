import React from 'react';
import Conversation from "./Conversation";
import {Channel} from "../src/Channel";

// TODO: mock content into dynamic conversation in list and custom minimal scrollbar
export default function Chatsidebar() {
    return (
        <div className={"flex flex-col border-r p-3 max-w-sm"}>
            <div className={"flex h-8 mx-2"}>
                <h3>Chats</h3>
            </div>
            <div className={"p-2 form-group form-row"}>
                <div className={"form-input-special"}>
                    <input type="text" className="form-control " placeholder="Start searching… "/>
                    <span className="input-left icon">
                                    <span aria-hidden="true" className="cm-icon cm-icon-search"/>
                                </span>
                </div>
            </div>
            <div className={"flex flex-col overflow-auto max-h-full pb-2 px-1"}>
                <Conversation channel={Channel.VIBER} name={"Giang"} content={"I need help 🤬 REEEEEEEEEEE!!!!!!!!"}
                               time={"23 s"}/>
                <Conversation channel={Channel.TWITTER} name={"Ashwin Fontys"}
                               content={"Hey, there is something illegal in my chat gang group"} time={"2 m"}/>
                <Conversation channel={Channel.TELEGRAM} name={"Lucky Luc"} content={"*kreunt*"} time={"32 m"}/>
                <Conversation channel={Channel.LINE} name={"Giang"} content={"ありがとう！"} time={"3 h"}/>
                <Conversation channel={Channel.TELEGRAM} name={"Martijnnz"}
                               content={"cryptoo 📈 stooooooooooooooooooooonks"} time={"1 d"}/>
                <Conversation channel={Channel.APPLE_BUSINESS_CHAT} name={"Tim Corey"}
                               content={"Ik ben geswitched naar apple :p"} time={"3 d"}/>
                <Conversation channel={Channel.WECHAT} name={"Ash FOR the win"}
                               content={"china is cool [+20 social credit score]"} time={"3 d"}/>
                <Conversation channel={Channel.TWITTER} name={"Ashweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeein Fontys"}
                               content={"sheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesh"}
                               time={"1 w"}/>
                <Conversation channel={Channel.SMS} name={"Ashwin Fontysssssssssssssssssssssssssssssssss"}
                               content={"Van hier"} time={"1 w"}/>
                <Conversation channel={Channel.APPLE_BUSINESS_CHAT} name={"Ashwin Fontys"} content={"tot"} time={"3 w"}/>
                <Conversation channel={Channel.WHATSAPP_BUSINESS} name={"Ashwin Fontys"}
                               content={"Hier is niet te zien op 1080p"} time={"3 w"}/>
            </div>
        </div>
    );
}

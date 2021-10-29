import React from 'react';
import Conversation from "./Conversation";
import {formatDate, MessageSnapshot} from "../src/Message";

// TODO: mock content into dynamic conversation in list and custom minimal scrollbar
export default function ChatSidebar(props: {
    conversations: Array<MessageSnapshot>,
    selected: string,
    onSelect: (id: string) => void
}) {
    return (
        <div className={"flex flex-col border-r px-6 pt-6 w-full max-w-sm bg-gray-100"}>
            <div className={"flex flex-col mb-4"}>
                <h3 className={"flex h-8"}>Chats</h3>

                <div className={"form-group form-row"}>
                    <div className={"form-input-special"}>
                        <input type="text" className="form-control " placeholder="Start searching… "/>
                        <span className="input-left icon">
                            <span aria-hidden="true" className="cm-icon cm-icon-search"/>
                        </span>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col p-1 overflow-y-auto h-full"}>
                {props.conversations.length == 0 ?
                    <div className={"flex items-center justify-center h-full"}>
                        No conversations to show
                    </div> :
                    props.conversations.map((conversation) => (
                        <div key={conversation.from.number} className={"mb-1"}>
                            <Conversation channel={conversation.channel}
                                          from={conversation.from}
                                          content={conversation.lastMessage} time={formatDate(conversation.date)}
                                          onSelect={props.onSelect}
                                          active={props.selected == conversation.from.number}/>
                        </div>
                    ))}
            </div>
        </div>
    );
}

import React, {useState} from 'react';
import Conversation from "./Conversation";
import {MessageSnapshot} from "../../src/json/message";

// TODO: mock content into dynamic conversation in list and custom minimal scrollbar
export default function Sidebar(props: {
    conversations: Array<MessageSnapshot>,
    selected: string,
    onSelect: (id: string) => void
}) {
    const [search, setSearch] = useState<string>("")

    function filterConversations(): Array<MessageSnapshot> {
        return props.conversations
            .filter((v) => v.from.name?.toLowerCase()?.match(search))
    }

    return (
        <div className={"flex flex-col border-r px-6 pt-6 w-full max-w-sm bg-gray-100"}>
            <div className={"flex flex-col mb-4"}>
                <h3 className={"flex h-8"}>Chats</h3>

                <div className={"form-group form-row"}>
                    <div className={"form-input-special"}>
                        <input type="text" className="form-control" value={search}
                               onChange={(e) => setSearch(() => e.target.value)}
                               placeholder={`Search ${props.conversations.length} conversations`}/>
                        <span className="input-left icon">
                            <span aria-hidden="true" className="cm-icon cm-icon-search"/>
                        </span>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col p-1 overflow-y-auto h-full"}>
                {filterConversations().length == 0 ?
                    <div className={"flex items-center justify-center h-full"}>
                        No conversations to show
                    </div> :
                    filterConversations().map((conversation) => (
                        <div key={conversation.from.number} className={"mb-1"}>
                            <Conversation channel={conversation.channel}
                                          from={conversation.from}
                                          content={conversation.lastMessage} time={conversation.date}
                                          onSelect={props.onSelect}
                                          active={props.selected == conversation.from.number}/>
                        </div>
                    ))}
            </div>
        </div>
    );
}

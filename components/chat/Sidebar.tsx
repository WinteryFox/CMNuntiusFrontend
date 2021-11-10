import React, {useState} from 'react';
import Conversation from "./Conversation";
import {MessageSnapshot} from "../../src/json/message";

// TODO: custom minimal scrollbar and channel filter logic

export default function Sidebar(props: {
    conversations: Array<MessageSnapshot>,
    selected: string,
    onSelect: (id: string) => void
}) {
    const [search, setSearch] = useState<string>("")
    const [showOptions, setShowOptions] = useState(false);

    const handleClick = () => {
        setShowOptions(!showOptions);
    };

    function filterConversations(): Array<MessageSnapshot> {
        return props.conversations
            .filter((v) => v.from.name?.toLowerCase()?.match(search))
    }

    return (
        <div className={"flex flex-col border-r px-6 pt-6 w-full max-w-sm"}>
            <div className={"flex flex-col mb-4"}>
                <h3 className={"flex h-8 px-3"}>Chats</h3>
                <div>
                    <div className={"border-t border-gray-200 px-4 py-6"}>
                        <h4 className={"-mx-2 -my-6 flow-root"}>
                            <button onClick={handleClick}
                                    type={"button"}
                                    className={"px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"}>
                            <span className={"font-medium text-gray-900"}>
                              Channels
                            </span>
                                <span className={"ml-6 flex items-center"}>
                                {showOptions ?
                                    <i className="fas fa-minus"/>
                                    :
                                    <i className={"fas fa-plus"}/>
                                }
                                </span>
                            </button>
                        </h4>
                        {showOptions && (
                            <div className={"pt-6"}>
                                <div className={"flex items-center"}>
                                    <div className="form-check">
                                        <label>
                                            <input id={"twitter"} type="checkbox" value="Unchecked value"/>
                                            <span className="label"> Twitter </span>
                                        </label>
                                    </div>
                                </div>
                                <div className={"flex items-center"}>
                                    <div className="form-check">
                                        <label>
                                            <input id={"twitter"} type="checkbox" value="Unchecked value"/>
                                            <span className="label"> Viber </span>
                                        </label>
                                    </div>
                                </div>
                                <div className={"flex items-center"}>
                                    <div className="form-check">
                                        <label>
                                            <input id={"twitter"} type="checkbox" value="Unchecked value"/>
                                            <span className="label"> Line </span>
                                        </label>
                                    </div>
                                </div>
                                <div className={"flex items-center"}>
                                    <div className="form-check">
                                        <label>
                                            <input id={"twitter"} type="checkbox" value="Unchecked value"/>
                                            <span className="label"> WeChat </span>
                                        </label>
                                    </div>
                                </div>
                                <div className={"flex items-center"}>
                                    <div className="form-check">
                                        <label>
                                            <input id={"twitter"} type="checkbox" value="Unchecked value"/>
                                            <span className="label"> Telegram </span>
                                        </label>
                                    </div>
                                </div>
                                <div className={"flex items-center"}>
                                    <div className="form-check">
                                        <label>
                                            <input id={"twitter"} type="checkbox" value="Unchecked value"/>
                                            <span className="label"> Meta </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
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
            <div className={"flex flex-col p-1 overflow-y-auto h-full border-t-2 border-b-2"}>
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

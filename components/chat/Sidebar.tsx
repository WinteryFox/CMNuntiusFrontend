import React, {useState} from 'react';
import Conversation from "./Conversation";
import {MessageSnapshot} from "../../src/json/message";
import Checkbox from "../Checkbox";

// TODO: custom minimal scrollbar and channel filter logic

export default function Sidebar(props: {
    conversations: Array<MessageSnapshot>,
    selected: string,
    onSelect: (id: string) => void,
    handleProfanityClick: () => void,
    showProfanity: boolean
}) {
    const [search, setSearch] = useState<string>("")
    const [showOptions, setShowOptions] = useState(false)
    const [twitter, setTwitter] = useState(true)
    const [facebook, setFacebook] = useState(true)
    const [instagram, setInstagram] = useState(true)
    const [whatsApp, setWhatsApp] = useState(true)

    const handleClick = () => {
        setShowOptions(!showOptions);
    };

    function filterConversations(): Array<MessageSnapshot> {
        return props.conversations
            .filter((v) => v.from.name?.toLowerCase()?.match(search))
    }

    return (
        <div className={"flex flex-col dark:bg-black border-r dark:border-gray-700 px-6 pt-6 w-full max-w-sm"}>
            <div className={"flex flex-col mb-4"}>
                <h3 className={"flex dark:text-white h-8 px-3"}>Chats</h3>
                <div>
                    <div className={"border-t dark:border-gray-700 px-4 py-6"}>
                        <h4 className={"-mx-2 -my-6 flow-root"}>
                            <button onClick={props.handleProfanityClick}
                                    type={"button"}
                                    className={"px-2 py-3 dark:bg-black bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"}>
                            <span className={"font-medium dark:text-white text-gray-900"}>
                              Profanity Filter
                            </span>
                                <span className={"ml-6 flex items-center"}>
                                {props.showProfanity ?
                                    <i className="fas fa-toggle-on"/>
                                    :
                                    <i className="fas fa-toggle-off"/>
                                }
                                </span>
                            </button>
                            <button onClick={handleClick}
                                    type={"button"}
                                    className={"px-2 py-3 dark:bg-black bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"}>
                            <span className={"font-medium dark:text-white text-gray-900"}>
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
                        {showOptions &&
                            <div className={"pt-6 dark:text-white"}>
                                <Checkbox selected={twitter} onChange={(e) => setTwitter(e.target.checked)}
                                          label={"Twitter"}/>
                                <Checkbox selected={facebook} onChange={(e) => setFacebook(e.target.checked)}
                                          label={"Facebook Messenger"}/>
                                <Checkbox selected={instagram} onChange={(e) => setInstagram(e.target.checked)}
                                          label={"Instagram Messaging"}/>
                                <Checkbox selected={whatsApp} onChange={(e) => setWhatsApp(e.target.checked)}
                                          label={"WhatsApp Business"}/>
                            </div>
                        }
                    </div>
                    <div className={"form-group form-row"}>
                        <div className={"flex w-full"}>
                            <span className="input-left icon pr-3">
                                <span aria-hidden="true" className="cm-icon cm-icon-search"/>
                            </span>
                            <input type="text"
                                   className="dark:bg-black border dark:border-gray-700 focus:border-blue-500 dark:text-white w-full rounded-3xl px-5 mr-5 pt-1 pb-1"
                                   value={search}
                                   onChange={(e) => setSearch(() => e.target.value)}
                                   placeholder={`Search ${props.conversations.length} conversations`}/>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col p-1 overflow-y-auto h-full dark:border-gray-700"}>
                    {filterConversations().length == 0 ?
                        <div className={"flex items-center justify-center dark:text-gray-400 h-full"}>
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
        </div>
    );
}

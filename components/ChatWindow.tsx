import React from 'react';
import Message from "../src/Message";

// TODO: properties,text templates and reformat code for unique user chat window
export default function ChatWindow(props: {
    history: Array<Message>
}) {
    return (
        <cm-communicator>
            <div className="header">
                <cm-avatar data-image="[IMAGE-URL]">
                <span className="badge small bottom-right" aria-hidden="true">
                    <span className="cm-channel cm-channel-whatsapp-simple" aria-hidden="true"/>
                </span>
                </cm-avatar>
                <span className="pull-right">
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
                </span>
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
                    {/*<div className="row me">
                        <cm-conversation-bubble>
                            Help me
                            <div className="time">11:47</div>
                        </cm-conversation-bubble>
                        <div>
                            <span className="cm-icon cm-icon-user-fill" aria-hidden="true"/>
                        </div>
                    </div>
                    <cm-conversation-divider>
                        <span className="title"> Yesterday</span>
                    </cm-conversation-divider>*/}
                    {props.history.map((message) => (
                        <div key={message.reference} className="row">
                            <cm-conversation-bubble>
                                {message.message.text}
                                <div className="time">{message.timeUtc}</div>
                            </cm-conversation-bubble>
                            <div>
                                <span className="cm-icon cm-icon-user-fill" aria-hidden="true"/>
                            </div>
                        </div>))}
                </cm-conversation>
            </div>
        </cm-communicator>
    );
}

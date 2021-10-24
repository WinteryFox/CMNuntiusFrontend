import React from 'react';

// TODO: properties,text templates and reformat code for unique user chat window
function Chatwindow() {
    return (
        <cm-communicator className={"w-full"}>
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
                            data-display="Download myfile.txt"
                        >
                        </cm-context-menu-option>
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
                    <div className="row">
                        <cm-conversation-bubble>
                            Help me
                            <div className="time">11:47</div>
                        </cm-conversation-bubble>
                        <div>
                            <span className="cm-icon cm-icon-user-fill" aria-hidden="true"/>
                        </div>
                    </div>
                    <cm-conversation-divider>
                        <span className="cm-icon cm-icon-time-open bg-warning-color cl-background-color"
                              aria-hidden="true"/>
                        <span className="title"> Yesterday</span>
                    </cm-conversation-divider>
                    <cm-conversation-divider>
                        <span className="title"> Yesterday</span>
                    </cm-conversation-divider>
                    <div className="row me">
                        <cm-conversation-bubble>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum sed nibh commodo mauris volutpat aliquet. Pellentesque
                            hendrerit sapien dolor, eu malesuada arcu interdum et. Phasellus tincidunt
                            dapibus enim, ut sollicitudin augue consequat id. Fusce pharetra mi sed tortor
                            condimentum dictum. Nam ullamcorper nisi quam, non viverra ipsum dictum a. Cras
                            ligula ligula, hendrerit interdum porttitor ac, malesuada id lorem. Vivamus
                            facilisis ornare suscipit. Donec eu felis bibendum, blandit mauris eget,
                            porttitor massa. Pellentesque bibendum fermentum iaculis. Nunc vitae blandit
                            dolor. Phasellus in ipsum ac massa volutpat rhoncus fermentum nec felis.
                            Curabitur scelerisque nunc quis turpis blandit, vehicula efficitur nibh
                            pellentesque. Nam odio neque, dictum sed purus ut, pulvinar bibendum purus. Nam
                            vitae eleifend ex, a lobortis tellus.
                            <div className="time">11:47</div>
                        </cm-conversation-bubble>
                        <div>
                            <span className="cm-icon cm-icon-user-fill" aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="row">
                        <cm-conversation-bubble>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum sed nibh commodo mauris volutpat aliquet. Pellentesque
                            hendrerit sapien dolor, eu malesuada arcu interdum et. Phasellus tincidunt
                            dapibus enim, ut sollicitudin augue consequat id. Fusce pharetra mi sed tortor
                            condimentum dictum. Nam ullamcorper nisi quam, non viverra ipsum dictum a. Cras
                            ligula ligula, hendrerit interdum porttitor ac, malesuada id lorem. Vivamus
                            facilisis ornare suscipit. Donec eu felis bibendum, blandit mauris eget,
                            porttitor massa. Pellentesque bibendum fermentum iaculis. Nunc vitae blandit
                            dolor. Phasellus in ipsum ac massa volutpat rhoncus fermentum nec felis.
                            Curabitur scelerisque nunc quis turpis blandit, vehicula efficitur nibh
                            pellentesque. Nam odio neque, dictum sed purus ut, pulvinar bibendum purus. Nam
                            vitae eleifend ex, a lobortis tellus.
                            <div className="time">11:47</div>
                        </cm-conversation-bubble>
                        <div>
                            <span className="cm-icon cm-icon-user-fill" aria-hidden="true"/>
                        </div>
                    </div>
                </cm-conversation>
            </div>
        </cm-communicator>

    );
}


export default Chatwindow;

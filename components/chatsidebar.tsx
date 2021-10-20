import React from 'react';
import Conversations from "./conversations";

interface Props {

}

function Chatsidebar(props: Props) {
    return (
        <>
            <div style={{ width: '300px' }} className={"flex-col"}>
                <div className={"flex h-8"}>
                    <div className={" mx-2"}>
                        <h3>Chats</h3>
                    </div>

                </div>
                <div className={"flex flex-row border-b-2 p-2"}>
                    <span className={"input-left icon inline-flex items-center p-2"}>
                        <span aria-hidden="true" className="cm-icon cm-icon-search"></span>
                    </span>
                    <input style={{paddingLeft: '15px'}} className={"border rounded-full w-full"} type="search" name="search" placeholder="Search" />
                    <button type="submit"></button>

                </div>

                <div style={{ height: '100vh' }} className={"overflow-auto border-r-2"}>
                    <Conversations channel={"/twitter.svg"} name={"Giang"} content={"I need help!!!!"} time={"13 oct. 2020"}/>
                </div>
            </div>

        </>
    );
}

export default Chatsidebar;
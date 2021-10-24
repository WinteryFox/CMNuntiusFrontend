import React from 'react';
import Conversations from "./conversations";
//Todo: mock content into dynamic conversation in list
interface Props {

}

function Chatsidebar(props: Props) {
    return (
        <>
            <div className={""}>
                <div style={{ width: '425px', height: '94vh' }} className={"border rounded-lg p-6"}>
                    <div className={"flex-col"}>
                        <div className={"flex h-8"}>
                            <div className={" mx-2"}>
                                <h3>Chats</h3>
                            </div>
                        </div>
                        <div className={"p-2"}>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="form-input-special ">
                                        <input type="text" className="form-control " placeholder="Start searching… "/>
                                        <span className="input-left icon">
                                            <span aria-hidden="true" className="cm-icon cm-icon-search"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '80vh', scrollbarWidth:'none' }} className={"overflow-auto pr-1"}>
                            <Conversations channel={"/viber.svg"} name={"Giang"} content={"I need help 🤬 REEEEEEEEEEE!!!!!!!!"} time={"23 s"}/>
                            <Conversations channel={"/twitter.svg"} name={"Ashwin Fontys"} content={"Hey, there is something illegal in my chat gang group"} time={"2 m"}/>
                            <Conversations channel={"/telegram.svg"} name={"Lucky Luc"} content={"*kreunt*"} time={"32 m"}/>
                            <Conversations channel={"/Line.svg"} name={"Amy"} content={"oooookkeeeeeee"} time={"3 h"}/>
                            <Conversations channel={"/cm.svg"} name={"Maikel"} content={"Vsauce Maikel here 😁😁😁"} time={"4 h"}/>
                            <Conversations channel={"/googlebm.svg"} name={"Winteryfox"} content={"I luv Google docs"} time={"12 h"}/>
                            <Conversations channel={"/line.svg"} name={"Giang"} content={"ありがとう！"} time={"3 h"}/>
                            <Conversations channel={"/telegram.svg"} name={"Martijnnz"} content={"cryptoo 📈 stooooooooooooooooooooonks"} time={"1 d"}/>
                            <Conversations channel={"/apple-business.svg"} name={"Tim Corey"} content={"Ik ben geswitched naar apple :p"} time={"3 d"}/>
                            <Conversations channel={"/wechat.svg"} name={"Ash FOR the win"} content={"china is cool [+20 social credit score]"} time={"3 d"}/>
                            <Conversations channel={"/twitter.svg"} name={"Ashwin Fontys"} content={"sheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesh"} time={"1 w"}/>
                            <Conversations channel={"/twitter.svg"} name={"Ashwin Fontys"} content={"Van hier"} time={"1 w"}/>
                            <Conversations channel={"/twitter.svg"} name={"Ashwin Fontys"} content={"tot"} time={"3 w"}/>
                            <Conversations channel={"/twitter.svg"} name={"Ashwin Fontys"} content={"Hier is niet te zien op 1080p"} time={"3 w"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chatsidebar;
//13 oct. 2021
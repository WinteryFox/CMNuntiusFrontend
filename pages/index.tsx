import type { NextPage } from 'next'
import Chatsidebar from "../components/chatsidebar";
import Chatoverlay from "../components/chatoverlay";

const Home: NextPage = () => {
  return (
    <div>
        <Chatsidebar title={"Chat"} icon={""}></Chatsidebar>
      <Chatoverlay channel={"/twitter.svg"} name={"Giang"} content={"I need help!!!!"} time={"13 oct. 2020"}/>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Chatsidebar from "../components/chatsidebar";
import Chatoverlay from "../components/chatoverlay";

const Home: NextPage = () => {
  return (
    <div>
      <Chatoverlay avatar={""} name={"Giang"}/>
    </div>
  )
}

export default Home

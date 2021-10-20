import type { NextPage } from 'next'
import Script from "next/script";
import Chatsidebar from "../components/chatsidebar";
import Conversations from "../components/conversations";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Script src={"https://www.cm.com/en-gb/app/aurora/js/webcomponents-loader.js"}></Script>
      <Script src={"https://www.cm.com/en-gb/app/aurora/js/aurora-components-legacy.js"}></Script>
    </div>
  )
}

export default Home

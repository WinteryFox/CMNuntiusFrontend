import '../styles/globals.sass'
import type {AppProps} from 'next/app'
import Script from "next/script";
import React from "react";
import Navbar from "../components/Navbar";

export default function Nuntius({Component, pageProps}: AppProps) {
    return (
        <div className={"flex flex-col h-screen"}>
            <Script src={"https://www.cm.com/en-gb/app/aurora/js/webcomponents-loader.js"}/>
            <Script src={"https://www.cm.com/en-gb/app/aurora/js/aurora-components-legacy.js"}/>
            <Navbar/>
            <main className={"overflow-hidden flex flex-col h-full"}>
                <Component {...pageProps} />
            </main>
        </div>
    )
}

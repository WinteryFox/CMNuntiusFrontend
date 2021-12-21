import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Script from "next/script";
import React from "react";
import Header from "../components/Header";
import nextI18NextConfig from '../next-i18next.config';
import {appWithTranslation} from "next-i18next";

function Nuntius({Component, pageProps}: AppProps) {
    return (
        <div>
            <div className={"flex flex-col h-screen"}>
                <Script src={"https://www.cm.com/en-gb/app/aurora/js/webcomponents-loader.js"}/>
                <Script src={"https://www.cm.com/en-gb/app/aurora/js/aurora-components-legacy.js"}/>
                <Header/>
                <main className={"overflow-hidden flex flex-col h-full"}>
                    <Component {...pageProps} />
                </main>
            </div>
        </div>
    )
}

export default appWithTranslation(Nuntius, nextI18NextConfig)
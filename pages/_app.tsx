import '../styles/globals.sass'
import type {AppProps} from 'next/app'
import Layout from "../components/layout";
import Script from "next/script";
import React from "react";

export default function Nuntius({Component, pageProps}: AppProps) {
    return (
        <>
            <Script src={"https://www.cm.com/en-gb/app/aurora/js/webcomponents-loader.js"}/>
            <Script src={"https://www.cm.com/en-gb/app/aurora/js/aurora-components-legacy.js"}/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

import '../styles/globals.sass'
import type {AppProps} from 'next/app'
import Layout from "../components/layout";

export default function Nuntius({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

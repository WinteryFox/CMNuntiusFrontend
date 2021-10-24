import Navbar from "./navbar";
import React, {ReactNode} from "react";

export default function Layout(props: { children: ReactNode }) {
    return (
        <>
            <Navbar/>
            <main>{props.children}</main>
        </>
    )
}

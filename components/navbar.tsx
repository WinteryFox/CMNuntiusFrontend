import Image from 'next/image'
import Link from 'next/link'
//todo page dynamic to different screens size
export default function Navbar() {
    return (
        <header className={"h-20"}>
            <nav className={"sticky border-b-2 top-0 z-40 bg-white flex pl-10 py-3 h-20"}>
                <Link href={"/"}>
                    <div className={"overflow-hidden inline-flex items-center"}>
                        <Image className={"w-auto"} src={"/cm.svg"} alt={"Logo"} width={40} height={40}/>
                        <div className={"font-medium text-black pl-3.5"}>Dashboard</div>
                    </div>
                </Link>
            </nav>
        </header>
    )
}

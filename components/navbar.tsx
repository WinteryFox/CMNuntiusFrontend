import Image from 'next/image'
import Link from 'next/link'
//todo page dynamic to different screens size
export default function Navbar() {
    return (
        <header className={"flex sticky w-full z-40 bg-white px-8 py-3 border-b"}>
            <nav>
                <Link href={"/"} passHref>
                    <div className={"overflow-hidden inline-flex items-center"}>
                        <Image className={"w-auto"} src={"/cm.svg"} alt={"Logo"} width={40} height={40}/>
                        <div className={"font-medium text-black pl-3.5"}>Dashboard</div>
                    </div>
                </Link>
            </nav>
        </header>
    )
}

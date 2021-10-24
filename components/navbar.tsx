import Image from 'next/image'
//todo page dynamic to different screens size
export default function Navbar() {
    return (
        <header style={{  height: '80px' }}>
            <nav style={{  height: '80px' }} className={"sticky border-b-2 top-0 z-40 bg-white flex pl-10 py-3"}>
                <a className={"overflow-hidden inline-flex items-center"} href={"/"}>
                    <Image className={"w-auto"} src={"/cm.svg"} alt={"Logo"} width={40} height={40}/>
                    <div className={"font-medium text-black pl-3.5"}>Dashboard</div>
                </a>
            </nav>
        </header>
    )
}

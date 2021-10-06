import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={"sticky top-0 z-40 bg-white flex pl-8 py-5"}>
            <div className={""}>
                <a className={"overflow-hidden"} href={"/"}>
                    <Image className={"w-auto h-10"} src={"/cm.svg"} alt={"Logo"} width={52} height={52}/>
                </a>
            </div>

            <div>
                Hello
            </div>
        </div>
    )
}

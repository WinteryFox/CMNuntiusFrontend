import Image from 'next/image'
import Link from 'next/link'

export default function header() {
    return (
        <header className={"flex w-full top-0 z-40 dark:bg-black bg-white px-8 py-3 border-b dark:border-gray-700"}>
            <nav>
                <Link href={"/"}>
                    <a className={"flex items-center"}>
                        <Image src={"/cm.svg"} alt={"Logo"} width={40} height={40}/>
                        <div className={"font-medium text-xl dark:text-white text-black pl-3.5"}>Dashboard</div>
                    </a>
                </Link>
            </nav>
        </header>
    )
}

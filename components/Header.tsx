import Image from 'next/image'
import Link from 'next/link'
import {useTranslation} from "next-i18next";

export default function Header() {
    const {t} = useTranslation()

    return (
        <header
            className={"flex w-full top-0 z-40 dark:bg-black bg-white px-8 py-3 border-b border-gray-200 dark:border-gray-700"}>
            <nav className={"flex w-full items-center justify-between"}>
                <Link href={"/"}>
                    <a className={"flex items-center"}>
                        <Image src={"/cm.svg"} alt={"Logo"} width={40} height={40}/>
                        <div className={"font-medium text-xl text-black dark:text-white pl-3.5"}>{t("dashboard")}</div>
                    </a>
                </Link>

                <div className={"flex text-white"}>
                    <Link href={"/"} locale={"en"}>
                        <a className={"mr-2"}>
                            English
                        </a>
                    </Link>
                    <Link href={"/"} locale={"ja"}>
                        <a>
                            日本語
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

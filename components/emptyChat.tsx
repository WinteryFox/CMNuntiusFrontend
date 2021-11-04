import Image from 'next/image'
import Link from 'next/link'

export default function emptyChat() {
    return (
        <div className={"flex items-center justify-center h-full w-full"}>
            <div>
                <cm-image data-type="noMessages" data-title="Select a message" data-description=""/>
            </div>
        </div>
    )
}
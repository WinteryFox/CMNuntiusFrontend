import {ChangeEvent, ReactNode, KeyboardEvent} from "react";

export default function Input(props: {
    id: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
    onEnter?: () => void
    type?: "text" | "email" | "password"
    autocomplete?: string
    error?: boolean
    children?: ReactNode
}) {
    function onKeyPress(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key == "Enter")
            if (props.onEnter)
                props.onEnter()
    }

    return (
        <label className={`${props.error ? "text-red-500" : ""} text-sm font-bold mb-1 text-gray-500 w-full`}
               htmlFor={props.id}>
            {props.children}
            <input
                className={`${props.error ? "border-red-500" : ""} ${props.className} shadow border border-gray-200 text-black text-base border rounded-3xl w-full py-2 px-3 leading-tight transition-colors duration-150 focus:outline-none focus:shadow-outline focus:border-violet-500 transition-colors duration-150`}
                id={props.id} type={props.type} name={props.id} value={props.value} autoComplete={props.autocomplete}
                onChange={(event) => props.onChange(event)} onKeyPress={onKeyPress} required
                placeholder={props.placeholder}/>
        </label>
    )
}

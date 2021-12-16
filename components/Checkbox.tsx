import {ChangeEvent, ReactNode} from "react";

export default function Checkbox(props: {
    checked?: boolean | undefined,
    disabled?: boolean | undefined,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    children?: ReactNode
}) {
    return (
        <label className={"flex items-center select-none justify-between"}>
            {props.children}
            <input type={"checkbox"} checked={props.checked} onChange={props.onChange} disabled={props.disabled}
                   className={"inline-block mr-2 dark:bg-black appearance-none text-blue-500 w-4 h-4 border rounded-3xl checked:bg-blue-500"}/>
        </label>
    )
}

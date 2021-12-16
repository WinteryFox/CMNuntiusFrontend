import {ChangeEvent, ReactNode} from "react";

export default function Checkbox(props: {
    checked?: boolean | undefined,
    disabled?: boolean | undefined,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    children?: ReactNode
}) {
    return (
        <label className={"flex items-center justify-between"}>
            {props.children}
            <input type={"checkbox"} checked={props.checked} onChange={props.onChange} disabled={props.disabled}
                   className={"rounded checked:bg-pink-500"}/>
        </label>
    )
}

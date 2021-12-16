import {ChangeEvent} from "react";

export default function Checkbox(props: {
    value?: boolean | undefined,
    disabled?: boolean | undefined,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <input type={"checkbox"} checked={props.value} onChange={props.onChange} disabled={props.disabled} className={"rounded checked:bg-pink-500"}/>
    )
}

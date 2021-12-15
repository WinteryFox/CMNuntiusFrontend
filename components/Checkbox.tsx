import React, {ChangeEventHandler} from 'react';

export default function Checkbox(props: {
    selected?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
    label?: string
}) {
    return (
        <label className={"flex items-center select-none cursor-pointer"}>
            <input type="checkbox" checked={props.selected} onChange={props.onChange}
                   className={"inline-block mr-2 dark:bg-black appearance-none text-blue-500 w-4 h-4 border rounded-3xl checked:bg-blue-500"}/>
            {props.label}
        </label>
    );
}

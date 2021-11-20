import React from 'react';

export default function ChannelFilter(props: {
    channel: string,
}) {
    return (
        <div className={"flex items-center"}>
            <div className="form-check">
                <label>
                    <input id={props.channel} type="checkbox" value="Unchecked value"/>
                    <span className="label">{props.channel}</span>
                </label>
            </div>
        </div>
    );
}



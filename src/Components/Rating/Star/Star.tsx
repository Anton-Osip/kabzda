import React from "react";

export function Star(props: any) {
    if (props.selected === true) {
        return (
            <span><b>star </b></span>
        )
    } else {
        return (
            <span>star </span>
        )
    }

}
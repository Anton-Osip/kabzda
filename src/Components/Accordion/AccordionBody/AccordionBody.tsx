import React from "react";
import {ItemType} from "../Accordion";

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick:(value:any)=>void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item, id) => (<li key = {`acardion${id}${item}`} onClick = {() => {
                props.onClick(item.value)
            }}>{item.title}</li>))}

        </ul>
    )
}
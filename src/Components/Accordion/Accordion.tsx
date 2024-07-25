import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (<>
            <AccordionTitle title = {props.title}/>
            {!props.collapsed && <AccordionBody onClick = {props.onClick} items = {props.items}/>}
        </>
    )
}

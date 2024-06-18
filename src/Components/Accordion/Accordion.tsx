import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
    title: string
}

export function Accordion(props:AccordionPropsType) {
    return (<>
           <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>
    )
}

import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

export function Accordion(props:{title:string}) {
    return (<>
           <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>
    )
}

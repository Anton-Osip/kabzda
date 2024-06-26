import React from "react";

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}

export function UncontrolledAccordionTitle({title, changeCollapsed}: AccordionTitlePropsType) {
    return (
        <h3 onClick = {changeCollapsed}>{title}</h3>

    )
}
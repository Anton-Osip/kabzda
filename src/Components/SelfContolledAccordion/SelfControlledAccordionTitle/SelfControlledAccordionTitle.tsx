import React from "react";

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}

export function SelfControlledAccordionTitle({title, changeCollapsed}: AccordionTitlePropsType) {
    return (
        <h3 onClick = {changeCollapsed}>{title}</h3>

    )
}
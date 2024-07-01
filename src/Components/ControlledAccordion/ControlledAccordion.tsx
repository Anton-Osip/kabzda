import {ControlledAccordionTitle} from "./ControlledAccordionTitle/ControlledAccordionTitle";
import {ControlledAccordionBody} from "./ControlledAccordionBody/ControlledAccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}


export function ControlledAccordion({title, collapsed, setCollapsed}: AccordionPropsType) {

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (<>
            <ControlledAccordionTitle title = {title} changeCollapsed = {changeCollapsed}/>
            {!collapsed && <ControlledAccordionBody/>}
        </>
    )
}

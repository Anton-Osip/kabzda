import {useState} from "react";
import {
    UncontrolledAccordionTitle
} from "./UncontrolledAccordionTitle/SelfControlledAccordionTitle";
import {
    UncontrolledAccordionBody
} from "./UncontrolledAccordionBody/SelfControlledAccordionBody";

type AccordionPropsType = {
    title: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const changeCollapsed = () => {
        setCollapsed(!collapsed)

    }

    return (<>
            <UncontrolledAccordionTitle title = {props.title} changeCollapsed = {changeCollapsed}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </>
    )
}

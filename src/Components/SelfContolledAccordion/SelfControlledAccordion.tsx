import {useState} from "react";
import {SelfControlledAccordionTitle} from "./SelfControlledAccordionTitle/SelfControlledAccordionTitle";
import {SelfControlledAccordionBody} from "./SelfControlledAccordionBody/SelfControlledAccordionBody";

type AccordionPropsType = {
    title: string
}


export function SelfControlledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const changeCollapsed = () => {
        setCollapsed(!collapsed)

    }

    return (<>
            <SelfControlledAccordionTitle title = {props.title} changeCollapsed = {changeCollapsed}/>
            {collapsed && <SelfControlledAccordionBody/>}
        </>
    )
}

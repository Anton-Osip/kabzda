import {useReducer, useState} from "react";
import {
    UncontrolledAccordionTitle
} from "./UncontrolledAccordionTitle/SelfControlledAccordionTitle";
import {
    UncontrolledAccordionBody
} from "./UncontrolledAccordionBody/SelfControlledAccordionBody";

type AccordionPropsType = {
    title: string
}

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('Bad action type')
    }

}

export function UncontrolledAccordion(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(reducer, {
        collapsed: false
    });

    const changeCollapsed = () => {
        dispatch({type: TOGGLE_COLLAPSED})

    }

    return (<>
            <UncontrolledAccordionTitle title = {props.title} changeCollapsed = {changeCollapsed}/>
            {!state.collapsed && <UncontrolledAccordionBody/>}
        </>
    )
}

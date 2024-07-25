import React from "react";
import s from './Select.module.css'
import {OptionType} from "../Accordion/Accordion.stories";

type SelectPropsType = {
    selectValue: any
    options: OptionType[]
    collapsed: boolean

    changeCollapsed: () => void
    changeSelectValue: (value: any) => void
}

export const Select: React.FC<SelectPropsType> = (props: SelectPropsType) => {
    return (<div className = {s.select}>
        <div onClick = {props.changeCollapsed}
             className = {s.selectHeader}>{props.selectValue ? props.selectValue : 'ПУСТО'}</div>

        {props.collapsed && <div className = {s.selectBody}>
            {props.options.map(o => {
                return (<div onClick = {() => props.changeSelectValue(o.value)} className = {s.options}
                             key = {o.value}>{o.title}</div>)
            })}

        </div>}
    </div>)
}
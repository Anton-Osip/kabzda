import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props: SelectPropsType) => {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(si => si.value === props.value)
    const hoveredItem = props.items.find(si => si.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);

    const toggleItems = () => {
        setActive(!active)
    }
    const itemClicked = (value: string) => {
        props.onChange(value)
        setActive(!active)
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp')
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElememt = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (!!pretendentElememt) {
                        props.onChange(pretendentElememt.value)
                    }
                    return
                }
                if (!selectedItem) {
                    props.onChange(props.items[0].value)
                }


            }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(!active)
        }
    }

    return (
        <div className = {s.select} onKeyUp = {onKeyUpHandler} tabIndex = {0}>
            <span onClick = {toggleItems} className = {s.main}>
                {selectedItem?.title}
            </span>
            {active &&
                <div className = {s.items}>
                    {props.items.map(i => {

                        return <div
                            onMouseEnter = {() => setHoveredElementValue(i.value)}
                            className = {s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                            onClick = {() => {
                                itemClicked(i.value)
                            }}
                            key = {i.value}>
                            {i.title}
                        </div>
                    })}
                </div>
            }

        </div>)
}
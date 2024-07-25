import {useRef, useState} from "react";

export default {
    title: 'inputStories'
}

export const UncontrolledInput = () => {
    return <input/>
}

export const ControlledInputWithFixedValue = () => {

    return <input value = {',kf ,kf ,kf'}/>
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange = {(e) => {
        setValue(e.currentTarget.value)
    }}/> - {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [value, setValue] = useState('')
    return (
        <>
            <input ref = {inputRef}/>
            <button onClick = {() => {
                const el = inputRef.current as HTMLInputElement
                setValue(el.value)
            }}>get value
            </button>
            value - {value}
        </>)
}

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    return <><input value = {value} onChange = {(e) => {
        setValue(e.currentTarget.value)
    }}/>--{value}</>
}
export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true)
    return <> <input type = {'checkbox'} checked = {value} onChange = {(e) => {
        setValue(e.currentTarget.checked)
    }}/>--{value.toString()}</>
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string>(2)
    return (
        <>
            <select value = {value} onChange = {(e) => {
                setValue(e.currentTarget.value)
            }}>
                <option>none</option>
                <option value = {1}>Select2</option>
                <option value = {2}>Select3</option>
                <option value = {3}>Select4</option>
            </select>
            -- {value.toString()}
        </>)
}

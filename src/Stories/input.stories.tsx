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


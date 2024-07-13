import {useState} from "react";

export const OnOff = ({defaultsValue}: { defaultsValue?: boolean }) => {

    const [on, setOn] = useState(defaultsValue ? defaultsValue : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: !on ? 'red' : 'white',
        cursor: 'pointer',
    }
    const IndicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid #000',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
            <div
                style = {onStyle}
                onClick = {() => {
                    setOn(true)
                }}>On
            </div>
            <div
                style = {offStyle}
                onClick = {() => {
                    setOn(false)
                }}>Off
            </div>
            <div style = {IndicatorStyle}></div>
        </div>
    )
}
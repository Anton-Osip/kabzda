
type ControlledOnOffProps = {
    onOff: boolean
    setOnOff(value: boolean): void
}

export const ControlledOnOff = ({onOff, setOnOff}: ControlledOnOffProps) => {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: onOff ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: !onOff ? 'red' : 'white',
        cursor: 'pointer',
    }
    const IndicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid #000',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: onOff ? 'green' : 'red',
    }

    return (
        <div>
            <div
                style = {onStyle}
                onClick = {() => {
                    setOnOff(true)
                }}>On
            </div>
            <div
                style = {offStyle}
                onClick = {() => {
                    setOnOff(false)
                }}>Off
            </div>
            <div style = {IndicatorStyle}></div>
        </div>
    )
}
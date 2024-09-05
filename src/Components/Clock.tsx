import React, {useEffect, useState} from "react";
import s from './clock.module.css'

export type ClockProps = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}


export const Clock = (props: ClockProps) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interbalClock = setInterval(() => {

            setDate(new Date())
        }, 1000)
        return () => {
            debugger
        }
    }, [])

    let view: React.ReactNode

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date = {date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date = {date}/>
    }


    return (
        <div>
            {view}
        </div>
    )
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            <span>{date.getHours()} : </span>
            <span>{date.getMinutes()} : </span>
            <span>{date.getSeconds()}</span>
        </>
    )
}
export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return (
        <div className = {s.clock}>
            <div className = {s.analog__clock}>
                <div className = {s.dial + ' ' + s.seconds} style = {secondsStyle}/>
                <div className = {s.dial + ' ' + s.minutes} style = {minutesStyle}/>
                <div className = {s.dial + ' ' + s.hours} style = {hoursStyle}/>
            </div>
        </div>
    )
}

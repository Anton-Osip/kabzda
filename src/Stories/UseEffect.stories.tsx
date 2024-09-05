import React, {memo, useEffect, useState} from "react";

export default {
    title: 'use effect demo'
}

function generated() {
    return 1
}


export const Example1 = () => {
    const [counter, setCounter] = useState(generated)//0: [0, function(newValue){}]

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    });

    const changer = (state: number) => {
        return state + 1
    }
    return <>
        <h1>{counter}</h1>
        <button onClick = {() => {
            setCounter(changer)
        }}>+1
        </button>

    </>
}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(generated)//0: [0, function(newValue){}]
    const [fake, setfake] = useState(generated)//0: [0, function(newValue){}]

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter]);

    useEffect(() => {
        setInterval(() => {
            console.log('setInterval', fake)
            setfake(changerFayk)
        }, 1000)
    }, []);

    const changer = (state: number) => {
        return state + 1
    }
    const changerFayk = (state: number) => {
        return state + 1
    }
    return <>
        <h1>{counter}</h1>
        <h1>{fake}</h1>
        <button onClick = {() => {
            setCounter(changer)
        }}>+1
        </button>
        <button onClick = {() => {
            setfake(changerFayk)
        }}>fayk+1
        </button>

    </>
}

const initState = () => {
    const date = new Date()
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

export const ClockExample = () => {
    const [time, setTime] = useState(initState)



    return <>
        <h1>{time}</h1>
    </>
}

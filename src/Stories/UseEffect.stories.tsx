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

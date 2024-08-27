import React, {memo, useState} from "react";

export default {
    title: 'use state demo'
}

function generated() {
    console.log("generated")
    return 1
}


export const Example1 = () => {
    const [counter, setCounter] = useState(generated)//0: [0, function(newValue){}]

    const changer = (state:number) => {
        return state + 1
    }
    return <>
        <button onClick = {() => {
            console.log('setCounter')
            setCounter(changer)
        }}>+1
        </button>
        {counter}
    </>
}

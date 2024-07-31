import React, {memo, useMemo, useState} from "react";
import {number} from "prop-types";

export default {
    title: 'use memo demo'
}

export const ExampleWithUseMemo = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA: number = useMemo(() => {
        let result: number = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            result *= i
        }
        return result
    }, [a]);

    let resultB: number = useMemo(() => {
        let result = 1
        for (let i = 1; i <= b; i++) {
            result *= i
        }
        return result
    }, [b])


    return <div>
        <input type = "number" value = {a} onChange = {(e) => setA(+e.currentTarget.value)}/>
        <input type = "number" value = {b} onChange = {(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for A: {resultA}</div>
        <div>Result for B: {resultB}</div>
    </div>
}

export const ExampleWithoutUseMemo = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA: number = 1

    for (let i = 1; i <= a; i++) {
        let fake = 0
        while (fake < 100000000) {
            fake++
            const fakeValue = Math.random()
        }
        resultA *= i
    }


    let resultB: number = 1
    for (let i = 1; i <= b; i++) {
        resultB *= i
    }


    return <div>
        <input type = "number" value = {a} onChange = {(e) => setA(+e.currentTarget.value)}/>
        <input type = "number" value = {b} onChange = {(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for A: {resultA}</div>
        <div>Result for B: {resultB}</div>
    </div>
}

const CounterSecrets = (props: { count: number }) => {
    console.log('Counter')

    return (<div>{props.count}</div>)
}

const TableSecrets = (props: { users: string[] }) => {
    console.log('Table')
    return (<div>{props.users.map((u, i) => <div key = {i}>{u}</div>)}</div>)
}

const Table = memo(TableSecrets)
const Counter = memo(CounterSecrets)

export const helpsToReactMemo = () => {
    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState(['Anton', 'Antan', 'Yana', 'Viny'])

    const newArray = useMemo(() => {
        return users.filter(u => u.indexOf('a') > -1)
    }, [users])

    return <>
        <Counter count = {counter}/>
        <button onClick = {() => {
            setCounter(counter + 1)
        }}>+1
        </button>
        <button onClick = {() => {
            setUsers([...users,'Yana'])
        }}>addUser</button>
        <Table users = {newArray}/>
    </>
}
import React, {memo, useState} from "react";

export default {
    title: 'React memo demo'
}

const CounterSecrets = (props: { count: number }) => {
    console.log('Counter')

    return (<div>{props.count}</div>)
}

const TableSecrets = (props: { users: string[] }) => {
    console.log('Table')
    return (<div>{props.users.map((u, i) => <div key = {i}>{u}</div>)}</div>)
}

const Table=memo(TableSecrets)
const Counter=memo(CounterSecrets)

export const Example1 = () => {
    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState(['Anton', 'Yana', 'Vany'])
    return <>
        <Counter count = {counter}/>
        <button onClick = {() => {
            setCounter(counter + 1)
        }}>+1
        </button>
        <button onClick = {() => {
            setUsers([...users,'Yana'])
        }}>addUser
        </button>
        <Table users = {users}/>
    </>
}

export const ExampleWithoutMemo = () => {
    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState(['Anton', 'Yana', 'Vany'])
    return <>
        <CounterSecrets count = {counter}/>
        <button onClick = {() => {
            setCounter(counter + 1)
        }}>+1
        </button>
        <button onClick = {() => {
            setUsers([...users,'Yana'])
        }}>addUser
        </button>
        <TableSecrets users = {users}/>
    </>
}
import { useState } from "react"

function Counter(){

let [counter, setCounter]=useState(0)
    const addValue = () =>{
        setCounter(counter + 1)
    }
    const subValue = () =>{
        if(counter>0)
        setCounter(counter - 1)
    }
    const resValue = () =>{
        setCounter(0)
    }
    return (
        <>
        <h1>Counter Value :{counter} </h1>
        <button onClick={addValue}>Increment</button >
        <button onClick={subValue}>Decrement</button >
        <button onClick={resValue}>Reset</button >
        </>
    )
}

export default Counter
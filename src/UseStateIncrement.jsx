import { useState } from "react";

function UseStateIncrement()
{
     const [count,setCount]=useState(0)


     return(
        <>
        <h1>the initial value : {count}</h1>
        <button style={{color:'green'}} onClick={()=>{
        setCount(count+1)
     }}>increment</button>
     <button style={{color:'red'}}onClick={()=>{setCount(count-1)}}>decrement</button>
        
        </>
     )
}
export default UseStateIncrement;
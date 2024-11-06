import { useState } from "react";

function CricketScore()
{
    const [count,setCount]=useState(0)

    return(
        <>
        <h1>Cricket Score card : {count}</h1>
        <button onClick={()=>{
        setCount(count+1)}}> +1 </button>
        <button onClick={()=>{
        setCount(count+2)}}> +2 </button>
        <button onClick={()=>{
        setCount(count+3)}}>+3</button>
        <button onClick={()=>{
        setCount(count+4)}}>+4</button>
        <button onClick={()=>{
        setCount(count+6)}}>+6</button>
        
        </>
    )
}
export default CricketScore;
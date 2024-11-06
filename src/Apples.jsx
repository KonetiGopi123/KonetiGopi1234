import { useState } from "react";

function Apples()
{
    const [apples,setApples]=useState(0)

    return(
        <>
        <h1>Number of Apples : {apples}</h1>
        {apples===0 ? (
            <p>No apples left</p>
            ):(<p>Great! You have some apples</p>

            )}
            <button onClick={()=>setApples(apples+1)}>add 1 apple</button>
            <button onClick={()=>setApples(apples-1)}>Remove 1 Apple</button>
            <button onClick={()=>setApples(0)}>Reset</button>

        
        
        </>
    )
}
export default Apples;
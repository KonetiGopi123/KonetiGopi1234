import { useRef } from "react";
function AdditionNum()
{
    const num1Ref=useRef(null);
    const num2Ref=useRef(null);
    const resultRef=useRef(null);

    const handleAddition=()=>{
        const num1=parseFloat(num1Ref.current.value);
        const num2=parseFloat(num2Ref.current.value);

        const sum=num1+num2;

        resultRef.current.value=sum;
    }
    return(
        <>
        <h2>Addition of two numbers</h2>
        <input ref={num1Ref} type="number" placeholder="Enter first number"/>
        <input ref={num2Ref} type="number" placeholder="Enter second number"/>

        <button onClick={handleAddition}>Add</button>
        <input ref={resultRef} type="text" placeholder="result" readOnly/>
        
        
        
        
        </>
    )

        
}
export default AdditionNum;
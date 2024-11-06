import { useRef } from "react"
import { renderToStaticMarkup } from "react-dom/server";

function Calculator()
{
    const num1ref=useRef(null);
    const num2ref=useRef(null);
    const resref=useRef(null);
    const operationRef=useRef(null);
    const handleCaluclate=()=>{
        const num1=parseFloat(num1ref.current.value);
        const num2=parseFloat(num2ref.current.value);
        const operation=operationRef.current.value;
        let res;
                switch(operation)
                {
                    case 'add':
                        res=num1+num2;
                        break;
                    case 'sub':
                        res=num1-num2;
                        break;
                    case 'mul':
                    res=num1*num2; 
                        break;
                    case  'div':
                        res=num1/num2;
                        break;        
                }

       resref.current.value=res;






    }
    return(
        <>
        <h1>Caluclator</h1>
        <label>Enter a first number</label>
        <input type="number" ref={num1ref} placeholder="enter a first number" />
        <br></br>
        <label>Enter a second number</label>
        <input type="number" ref={num2ref} placeholder="enter a second number" />
        <br></br>
        <label>Select an operation</label>
        <select ref={operationRef}>
          <option value='add'>Addition</option>
          <option value='sub'>Substraction</option>
          <option value='mul'>Multiplication</option>
          <option value='div'>Division</option>

        </select>
         <br></br>
         <label>caluclate:</label>
         <input type="number" ref={resref} placeholder="Result" />
         <br></br>
         <button onClick={handleCaluclate}>Submit</button>
        
        </>
    )
}
export default Calculator;
import { useRef } from "react"

function StudentMarks()
{
    const mathref=useRef(null);
    const sciref=useRef(null);
    const sociaref=useRef(null);
    const resref=useRef(null);
    const averageref=useRef(null);
    const handleTotal=()=>{
        const math=parseFloat(mathref.current.value);
        const sci=parseFloat(sciref.current.value);
        const soc=parseFloat(sociaref.current.value);
        const total=math+sci+soc;
        resref.current.value=total;
        const avg=total/3;
         averageref.current.value=avg;

    }   

    return(
        <>
        <h1>Student marks.</h1>
        <label>Maths Marks</label>
        <input type="number" ref={mathref} placeholder="Enter the Maths marks" />
        <br></br>
        <label>Science Marks</label>
        <input type="number" ref={sciref} placeholder="Enter the Science marks" />
        <br></br>
        <label> Social marks</label>
        
        <input type="number" ref={sociaref} placeholder="Enter the Social marks" />
        <br></br>
        <label>Total</label>
        
        <input type="number" ref={resref} placeholder="Total marks" />
        <br></br>
        <label>Average</label>
        <input type="number" ref={averageref} placeholder="Avarage Marks" />
        <br></br>
        <button onClick={handleTotal}>submit</button>
       </>
    )
}
export default StudentMarks;
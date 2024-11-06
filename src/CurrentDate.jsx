function CurrentDate(){
    
const days=['sunday','monday','tuesday','wednesday','T  hursday','friday','saturday'];

const months=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];

const daysInMonth=[30,28,31,30,31,30,31,31,30,31,30,31];


const now=new Date();

const date=now.getDate();
const day=now.getDay();
const monthIndex=now.getMonth();
const year=now.getFullYear();


return(
    <>

    <h2>current date information</h2>
    <p>Today is : {days[day]}</p>
    <p>month:{months[monthIndex]}</p>
    <p>days :{date}...............(days in a month{daysInMonth[monthIndex]})</p>
    <p>year:{year}</p>
    
    
    </>
)
}
export default CurrentDate;
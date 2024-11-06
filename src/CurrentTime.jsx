function CurrentTime(){
    const now=new Date;

    const CurrentDate=now.toDateString();
    const CurrentTime=now.toLocaleTimeString();

    return(
        <>
        <h2>CurrentDate : {CurrentDate}</h2>
        <h2>CurrentTime : {CurrentTime}</h2>
        <h2>Date & Time : {CurrentDate} {CurrentTime}</h2>
        
        
        </>
    )

}
export default CurrentTime;
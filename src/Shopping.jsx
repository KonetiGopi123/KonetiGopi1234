import { useState } from "react";

function Shopping()
{
    const originalPrice=8999;
    const [price, setPrice]=useState(originalPrice);
    const [discount,setDiscount]=useState(0);
    const[discountedAmount,setDiscountedAmount]=useState(0);
    

    const applyDiscount=(discountValue)=>{
        if(discountValue===10){
            setDiscount(price*0.1);
        }
        else if(discountValue===20){
            setDiscount(price*0.2);
        }
        else if(discountValue===30){
            setDiscount(price*0.3);
        }
        else{
            setDiscount(0);
            setPrice(price);
        }
        };
        return(
            <>
            <h1>Original Price : ${originalPrice}</h1>
            <h2>Discount Price : ${discount.toFixed(2)}</h2>
            <h3>Applied Discount : {discount}%</h3>

            <p>Click a button to apply a discount :</p>
            <button onClick={()=>applyDiscount(10)}>Apply 10% discount</button>
            <button onClick={()=>applyDiscount(20)}>Apply 20% discount</button>
            <button onClick={()=>applyDiscount(30)}>Apply 30% discount</button>
            
            
            </>
        )
        }
        export default Shopping;
    

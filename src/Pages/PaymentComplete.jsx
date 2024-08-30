import { useState } from "react";
import LoaderComp from "./Loader";

const PaymentComplete=()=>{
    const [isLoading, setIsLoading] = useState(true);
    
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
    return(
        <>
        {isLoading? (
             <div style={{width:"100px", margin:"auto"}}>
             <LoaderComp/>
          </div>
        ) : (
            <h3 align="center"> Your Payment Succesfully Completed!!!</h3>
         )}  
        </>
    )
}

export default PaymentComplete;
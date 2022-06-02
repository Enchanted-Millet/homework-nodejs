import React,{useEffect, useRef, useState} from "react";

const Timer = () => {

    const [timer, setTimer] = useState(0);
    const [start, setStart] = useState(false);
    const newTimer = useRef();

     useEffect(() => {
         if (start) {
             newTimer.current = setInterval(() =>{
                 setTimer((timer) => timer + 1);

             },1000);

         }else {
             clearInterval(newTimer.current);
         }

         return () => clearInterval(newTimer.current);
     },[start]);

     const toggleStart = () => {
        setStart(!start);
      };
    const handleReset = () =>{
        setTimer(0);
    }


    return (
        <div>
            <p>{timer}</p>
            <div>
                <button onClick={toggleStart}>
                    {!start? "START":"STOP"}
                </button> 
                <button onClick={handleReset}>reset</button>             
            </div>
            
        </div>
    )

}

export default Timer;
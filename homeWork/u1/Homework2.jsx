import React, {useState} from "react";

const Counter = () =>{

   const [count, setCount] = useState(1);
   const [minusDisabled, setMinusDisabled] = useState(false)

   const handleMinus = () =>{
       
       if(count <= 1){
           setMinusDisabled(true)
       }
       setCount(count - 1);
   }

   const handleAdd = () =>{
       setMinusDisabled(false)
       setCount(count + 1);
       
   }



   return(
       <div>
           <p>{count}</p>
           <div>
               <button onClick={handleAdd}>+</button>
               <button onClick={handleMinus} disabled={minusDisabled}>-</button>
           </div>
       </div>
   )

}

export default Counter;
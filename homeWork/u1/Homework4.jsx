import React, {useState} from "react";

const OrdinalNumber = () =>{

    const [inputVal, setInputVal] = useState();
    const [ordinalNum, setOrdinalNum] = useState([]);

const handleBlur = (e) =>{
    setInputVal(e.target.value);

    if(!isNaN(inputVal)){
        let val = inputVal;
        
        while(val > 9){
            val = val % 10;
        }
        
        if(val == 1){
            setOrdinalNum(preOrdinalNum => {
            return [...preOrdinalNum, inputVal + "st"];
        })

        }else if(val == 2){
            setOrdinalNum(preOrdinalNum => {
            return [...preOrdinalNum, inputVal + "nd"];
            })
        }else if(val == 3){
            setOrdinalNum(preOrdinalNum => {
            return [...preOrdinalNum, inputVal + "rd"];
})
        }else if(val == 0){
            setOrdinalNum(preOrdinalNum => {
            return [...preOrdinalNum, inputVal];
        })
            }
            else{
            setOrdinalNum(preOrdinalNum => {
            return [...preOrdinalNum, inputVal + "th"];
})
        }

    }else{
        setOrdinalNum(preOrdinalNum => {
            return [...preOrdinalNum, inputVal];
        })
    }

}





    return (
        <div>
        <label>Pealse enter number:</label>
        <input onBlur = {handleBlur}>
        </input>
        <div>
        <label>Ordinal Filter:</label>
        <ul>
        {
            ordinalNum.map((item, index) => (
                <li key = {index}>{item}</li>

            ))
        }
        </ul>
        
        </div>
        
        </div>
    )

}

export default OrdinalNumber;
import React,{useState}  from "react";
import "./style.css";

const Calculator = () => {

    const [textVal, setTextval] = useState("");
   // const [input, setTextval] = useState(0);
   const [prevVal, setPrevVal] = useState([]);
   const [nextVal, setNextVal] = useState([]);

    const calculatorkey = [...Array(9).keys()].map((i) => 9 - i);

    const handleKeyBtn = (e, value) => {
        console.log( nextVal)

        if(value == "AC"){
            setTextval("")
        }
        else if(value === "="){
           
            setTextval(prevText=> {          
            let text = Number(prevText);           
            switch(nextVal[1]){
                 case "+":
                     text = text + Number(textVal);
                     setNextVal([]);
                      break;
                 case "-":
                     text = text - Number(textVal);
                     setNextVal([]);
                     break;
                 case "*":
                     text = text * Number(textVal);
                     setNextVal([]);
                     break;
                 case "/":
                     text = text / Number(textVal);
                     setNextVal([]);
                     break;
  
            }
            return text;
          } )
        }else if(value === "." || Number.isInteger(value)){
            console.log(prevVal,"..")
            if(prevVal.length > 0){
                setTextval("");
                setPrevVal([]);
                setTextval(previous=> {
                     const text = previous + value
                     return text;
                });                        
          }else{
              setTextval(previous=> {
            const text = previous + value
            return text;
          })  }    
        //console.log(value)

        }else{

             //console.log(value)
              setNextVal([Number(textVal), value]);
              //setPrevVal([Number(textVal), value])
            setPrevVal([Number(textVal), value]);
            
        
        
           }  
        }  

return (
    <div className="app_container">
    <div>
    <p className="text_val">{textVal}</p>
    </div>

    <div className="key_container">
    <div className="left_key_button_container">
        {calculatorkey.map((item, index) => (
            <button key={index} onClick={e =>{handleKeyBtn(e, item)}}> {item} </button>
        ))}
        <button onClick={e =>{handleKeyBtn(e, 0)}}> 0 </button> 
        <button onClick={e =>{handleKeyBtn(e, "00")}}> 00 </button>
        <button onClick={e =>{handleKeyBtn(e, ".")}}> . </button>
    </div>
    <div className="center_key_button_container">
    </div>
    <div className="right_key_button_container">
        <button onClick={e =>{handleKeyBtn(e, "AC")}}> AC </button> 
        <button onClick={e =>{handleKeyBtn(e, "+/-")}}> +/- </button>
        <button onClick={e =>{handleKeyBtn(e, "C")}}> C </button>
        <button onClick={e =>{handleKeyBtn(e, "*")}}> * </button>
        <button onClick={e =>{handleKeyBtn(e, "+")}}> + </button> 
        <button onClick={e =>{handleKeyBtn(e, "-")}}> - </button>
        <button onClick={e =>{handleKeyBtn(e, "/")}}> / </button>
        <button onClick={e =>{handleKeyBtn(e, "=")}}> = </button>
    </div>

    </div>

    </div>
)
}  

export default Calculator;

import React,{useState} from "react";
import "./style.css";

// state data for 3 counters
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 }
];

const Counter = ({value, onIncrement, onDecrement}) => {

    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={onDecrement}>-</button>
          <button className="button is-success is-small" onClick={onIncrement}>+</button>
        </div>
      </div>
    ); 

 }   
const ThreeCounter = () => {
    const [counters, setCounters] =useState(data);
    const sum = counters.reduce((acc, item) => acc + item.value, 0)

    const onIncrement = (id)  =>(event) => {
        console.log("1",id-1, data[id-1].value)
        setCounters((previous) => {
            const countersCopy = [...previous];
            countersCopy[id-1] = {...countersCopy[id-1], value: countersCopy[id-1].value + 1};
            return countersCopy;
        })
       // data[id-1]= {...data[id], value: data[id-1].value + 1};

    }
    const onDecrement = (id)=>(event) => {
        setCounters((previous) => {
            const countersCopy = [...previous];
            countersCopy[id-1] = {...countersCopy[id-1], value: countersCopy[id-1].value - 1};
            return countersCopy;
        })
        //data[id-1]= {...data[id], value: data[id-1].value - 1};
    }

    return (
        <div>
        <div>
        <p>Sum: {sum}</p>
        </div>
         {counters.map(counter => ( 
          <Counter 
            key={counter.id} 
            value={counter.value}
            onIncrement={onIncrement(counter.id)}
            onDecrement={onDecrement(counter.id)} 
            />
        ))}
        </div>
    )

}

export default ThreeCounter;
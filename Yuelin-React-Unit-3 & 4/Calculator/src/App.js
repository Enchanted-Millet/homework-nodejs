import './App.css';
import {useState} from "react";

const App = () => {
    const [result, setResult] = useState("");

    const clickHandler = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clearHandler = () => {
        setResult("");
    }

    const backHandler = () => {
        setResult(result.slice(0, result.length - 1));
    }

    const calculationHandler = () => {
        try {
            setResult(eval(result).toString());
        }
        catch (err) {
            setResult("Error");
        }
    }

    return (
        <div className="container">
            <form>
                <input type={"text"} value={result}/>
            </form>

            <div className={"keypad"}>
                <button className={"highlight"} onClick={clearHandler} id={"clear"}>Clear</button>
                <button className={"highlight"} onClick={backHandler} id={"backspace"}>Back</button>
                <button className={"highlight"} name="/" onClick={clickHandler}>&divide;</button>
                <button name="7" onClick={clickHandler}>7</button>
                <button name="8" onClick={clickHandler}>8</button>
                <button name="9" onClick={clickHandler}>9</button>
                <button className={"highlight"} name="*" onClick={clickHandler}>&times;</button>
                <button name="4" onClick={clickHandler}>4</button>
                <button name="5" onClick={clickHandler}>5</button>
                <button name="6" onClick={clickHandler}>6</button>
                <button className={"highlight"} name="-" onClick={clickHandler}>&ndash;</button>
                <button name="1" onClick={clickHandler}>1</button>
                <button name="2" onClick={clickHandler}>2</button>
                <button name="3" onClick={clickHandler}>3</button>
                <button className={"highlight"} name="+" onClick={clickHandler}>+</button>
                <button name="0" onClick={clickHandler}>0</button>
                <button name="." onClick={clickHandler}>.</button>
                <button className={"highlight"} onClick={calculationHandler} id={"result"}>=</button>
            </div>
        </div>
    );
}

export default App;

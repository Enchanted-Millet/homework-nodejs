import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;
        if(timerOn) {
            interval = setInterval(() => {
                setTime(prevState => prevState + 1);
            }, 1000)
        }
        else {
            clearInterval(interval)
        }
    }, [timerOn])

    return (
        <div className="App">
            <div>
                <span>{time}</span>
            </div>
            <div>
                <button onClick={() => setTimerOn(true)}>Start</button>
                <button onClick={() => setTime(0)}>Reset</button>
            </div>
        </div>
    );
}

export default App;

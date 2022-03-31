import './App.css';
import {useState} from "react";

function App() {

    const [input, setInput] = useState(''); // '' is the initial state value
    return (
        <div>
            <label>Please specify:</label>
            <input value={input} onInput={e => setInput(e.target.value)}/>
            <p>Output:</p>
            {input === '' && <span/>}
            {input % 10 === 1 && <span>{input} st</span>}
            {input % 10 === 2 && <span>{input} nd</span>}
            {input % 10 !== 1 && input % 10 !== 2 && input !== '' && <span>{input} th</span>}
        </div>
    );
}

export default App;

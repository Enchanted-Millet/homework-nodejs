import './App.css';
import {useState} from "react";

function App() {
    const [value, setValue] = useState(0);

    return (
        <div className="App">
            <h1>React Counter</h1>
            <p>{value}</p>
            <button onClick={() => setValue(value + 1)}>Increase</button>
            <button onClick={() => setValue(value - 1)}>Decrease</button>
        </div>
    );
}

export default App;

import './App.css';
import {useState} from "react";

// Bugs occur when invoking "Clear completed todos tasks", need some hints please
function App() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }
        setTodos([...todos].concat(newTodo));
        setTodo("");
    }


    const onToggleCompleteHandler = (id) => {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)
        setTodos(updatedTodos);
    }

    const onShowHandler = () => {
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }
        setTodos([...todos].concat(newTodo));
        setTodo("");
    }

    const onAlldoneHandler = () => {
        setTodos([])
    }

    return (
        <div className="App">

            <form onSubmit={submitHandler}>
                <input type={"text"} onChange={(e) => setTodo(e.target.value)} value={todo}/>
                <button type={"submit"}>Add Todos</button>

                Clear completed todos <input type={"checkbox"} onChange={() => onShowHandler()}/>
                Mark All Done <input type={"checkbox"} onChange={() => onAlldoneHandler()}/>
            </form>
            <span>{todos.length} remaining</span>
            {todos.map((todo) => <div key={todo.id}>
                <input type={"checkbox"} onChange={() => onToggleCompleteHandler(todo.id)}/>
                <span>{todo.text}</span>


            </div>)}
        </div>
    );
}

export default App;

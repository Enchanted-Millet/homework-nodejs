import React, {useState, useRef} from "react";
import "./style.css"

const Todos = () => {

    const [inputVal, setInputVal] = useState("");
    const [todos, setTodos] = useState([]);
    const inputElement = useRef(null);

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            setTodos(prevTodo => {
               return [...prevTodo, {content:inputVal, isCompleted: true}];
            });
            setInputVal('');
            console.log(inputVal)
            inputElement.current.focus();
        }      
    }

    const handleMarkAll = () => {

        setTodos([]);
        }

       const hanldeCheckbox = (e, index) => {
          console.log(todos)
           setTodos(prevTodo => {
               let newTodos = prevTodo.map((todo, i) =>{
                   if(i === index){
                       return {content:todo.content, isCompleted: !todo.isCompleted};
                   }else {

                        return todo;
                   }
               });
               return newTodos;              
            });
            
            console.log(todos)
        }

        const handleClearBtn = () => {

            setTodos(prevTodo => {
               let newTodos = prevTodo.map((todo, i) =>{
                   
                       return {content:todo.content, isCompleted: true};
                   
               });
               return newTodos;              
            });
        }


    return(
        <div>
        <div>
        <h2>Todos-AngularJs</h2>
        <input type="text" 
        placeholder="Type a todo and Hit Enter" 
        onChange = {e => setInputVal(e.target.value)}
        onKeyPress = {handleKeyPress}
        ref = {inputElement}
        ></input>
        </div>
        <div>
        <label>{todos.length}remaining</label>
        <button onClick= {handleClearBtn}>Clear Completed Todos</button>
        </div>
        <div>
        <div className="divContainer"><input type="checkbox" onChange ={handleMarkAll} ></input><label>Mark All Done</label></div>
        {
            todos.map((item, index) => (
                <div key={index}>
                { item.isCompleted?  <li>
                <input type="checkbox"
                onChange={(e) => hanldeCheckbox(e, index)}
                ></input><label>{item.content}</label></li> : ""                      
                   }              
                </div>   

            ))

        }
        
        </div>

        </div>
    )
}

export default Todos;

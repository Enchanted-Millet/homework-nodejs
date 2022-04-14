import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import { addItem, toggleItem, toggleItems } from './redux/actions/todos';
import './style.css';

const TodoList = () => {
    const [input, setInput] = useState('');

    //! use `useSelector` hook to get required state in redux store
    const items = useSelector(state => state);

    const dispatch = useDispatch();

    const handleInputChange = e => {
        setInput(e.target.value);
    };

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            const newItem = {
                name: input,
                completed: false
            };

            //! call action creator to update redux store
            dispatch(addItem(newItem));
            setInput('');
        }
    };

    const handleCheckItem = id => {
        dispatch(toggleItem(id));
    };

    const handleClearAllCompleted = () => {
        dispatch(toggleItems(false));
    };

    const handleMarkAllDone = () => {
        dispatch(toggleItems(true));
    };

    let remain = items.filter(item => !item.completed).length;

    return (
        <div className="todo-container">
            <h1>Todos - ReactJs</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Type a todo and hit Enter"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <div className="flex-box">
                <span>{remain} remaining</span>
                <button className="btn btn-outline-secondary" onClick={handleClearAllCompleted}>
                    Clear Completed Todos
                </button>
            </div>
            <div>
                <List items={items} handleCheckItem={handleCheckItem} handleMarkAllDone={handleMarkAllDone} />
            </div>
        </div>
    );
};

export default TodoList;

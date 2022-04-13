import React from 'react';

const ToDoItem = ({ name, checked, handleClick }) => {
    return (
        <>
            <input type="checkbox" className="form-check-input me-1" checked={checked} onChange={handleClick} />
            <span>{name}</span>
        </>
    );
};

export default function List({ items, handleCheckItem, handleMarkAllDone }) {
    const handleClick = id => () => {
        handleCheckItem(id);
    };

    let allCompleted = items.length > 0 && items.every(item => item.completed);

    return (
        <>
            <p>
                <input
                    type="checkbox"
                    className="form-check-input me-1"
                    onChange={handleMarkAllDone}
                    checked={allCompleted}
                />
                <span>Mark All Done</span>
            </p>
            <ul className="list-group">
                {items.map(({ id, name, completed }) => {
                    return (
                        <li key={id} className="list-group-item">
                            <ToDoItem name={name} checked={completed} handleClick={handleClick(id)} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

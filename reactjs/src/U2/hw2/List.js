import React, { Component } from 'react'

const ToDoItem = ({ name, checked, handleClick }) => {
    return (
        <>
            <input
                type="checkbox"
                className="form-check-input me-1"
                checked={checked}
                onChange={handleClick}
            />
            <span>{name}</span>
        </>
    )
}

export default class List extends Component {
    handleClick = id => e => {
        this.props.handleCheckItem(id)
    }

    render() {
        let { items, handleMarkAllDone } = this.props
        let allCompleted =
            items.length > 0 && items.every(item => item.completed)

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
                                <ToDoItem
                                    name={name}
                                    checked={completed}
                                    handleClick={this.handleClick(id)}
                                />
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

import React from 'react'
import { useDispatch } from 'react-redux'
import {
    changeFilter,
    Colors,
    resetFilter
} from './features/filters/filtersSlice'

const ToDoItem = ({ text, checked, color, handleClick }) => {
    return (
        <>
            <input
                type="checkbox"
                className="form-check-input me-1"
                checked={checked}
                onChange={handleClick}
            />
            <span style={{ cursor: 'pointer' }} onClick={handleClick}>
                {text}
            </span>
            {color && (
                <i
                    className="fa-solid fa-flag"
                    style={{ float: 'right', color, marginTop: 5 }}
                />
            )}
        </>
    )
}

export default function List({ items, handleCheckItem, handleMarkAllDone }) {
    const dispatch = useDispatch()

    const handleClick = id => {
        handleCheckItem(id)
    }

    let allCompleted = items.length > 0 && items.every(item => item.completed)

    return (
        <>
            <div>
                <input
                    type="checkbox"
                    className="form-check-input me-1"
                    onChange={handleMarkAllDone}
                    checked={allCompleted}
                    data-testid="all-mark-done"
                />
                <span>Mark All Done</span>
                <div className="dropdown" style={{ float: 'right' }}>
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-testid="filter-dropdown"
                    >
                        Filter by Color
                    </button>
                    <ul className="dropdown-menu">
                        {Object.keys(Colors).map(color => {
                            return (
                                <li
                                    key={color}
                                    data-testid={color}
                                    onClick={() =>
                                        dispatch(changeFilter(color))
                                    }
                                >
                                    <a className="dropdown-item" href="#">
                                        {color}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-testid="reset-filter"
                        onClick={() => dispatch(resetFilter())}
                    >
                        Reset Filter
                    </button>
                </div>
            </div>
            <ul
                className="list-group"
                data-testid="list-group"
                style={{ width: '100%', margin: '30px 0' }}
            >
                {items.map(({ _id, text, completed, color }, id) => {
                    return (
                        <li key={id} className="list-group-item">
                            <ToDoItem
                                text={text}
                                checked={completed}
                                color={color}
                                handleClick={() => handleClick(id)}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import List from './List'
import { addTodo, toggleTodo, toggleTodos } from './features/todos/todosSlice'

const Container = styled.div`
    width: 400px;
    margin: auto;
`

const RemainingBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    span {
        padding: 7px 0;
    }
`

const TodoList = () => {
    const [input, setInput] = useState('')

    //! use `useSelector` hook to get required state in redux store
    const { todos, filters } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleInputChange = e => {
        setInput(e.target.value)
    }

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            //! call action creator to update redux store
            dispatch(addTodo(input))
            setInput('')
        }
    }

    const handleCheckItem = id => {
        dispatch(toggleTodo(id))
    }

    const handleClearAllCompleted = () => {
        dispatch(toggleTodos(false))
    }

    const handleMarkAllDone = () => {
        dispatch(toggleTodos(true))
    }

    const filteredTodos = React.useMemo(
        () =>
            filters.color
                ? todos.filter(todo => todo.color === filters.color)
                : todos,
        [filters, todos]
    )
    const remain = React.useMemo(
        () => filteredTodos.filter(todo => !todo.completed).length,
        [filteredTodos]
    )

    return (
        <Container data-testid="todo-container">
            <h1>Todos - ReactJs</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Type a todo and hit Enter"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                data-testid="todo-input"
            />
            <RemainingBox>
                <span>{remain} remaining</span>
                <button
                    className="btn btn-outline-secondary"
                    onClick={handleClearAllCompleted}
                    data-testid="clear-completed"
                >
                    Clear Completed Todos
                </button>
            </RemainingBox>
            <div>
                <List
                    items={filteredTodos}
                    handleCheckItem={handleCheckItem}
                    handleMarkAllDone={handleMarkAllDone}
                />
            </div>
        </Container>
    )
}

export default TodoList

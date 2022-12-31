import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import List from './List'
import {
    createTodoTask,
    editTodoTask,
    fetchTodoTasks,
    toggleAllTodoTasks
} from './features/todos/todosSlice'
import { throttle } from 'lodash'

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

/**
 * Hook for throttling
 * @param {function} cb
 * @param {number} cd
 * @param {array<*>} deps
 * @returns {DebouncedFunc<*>}
 */
const useThrottle = (cb, cd, deps) => {
    return useMemo(() => throttle(cb, cd), deps)
}

const TodoList = () => {
    const [input, setInput] = useState('')

    const { todos, filters } = useSelector(state => state)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodoTasks())
    }, [])

    const handleInputChange = e => {
        setInput(e.target.value)
    }

    const handleKeyDown = async e => {
        if (e.keyCode === 13) {
            const [text, color] = input.trim().split('::')
            await dispatch(createTodoTask({ text, color, completed: false }))
            setInput('')
        }
    }

    const handleCheckItem = async id => {
        const todoTask = todos.todoTasks[id]
        await dispatch(
            editTodoTask({ id: todoTask._id, completed: !todoTask.completed })
        )
    }

    // const throttledHandleCheckItem = useMemo(
    //     () => throttle(handleCheckItem, 2000),
    //     []
    // )

    // const throttledHandleCheckItem = useThrottle(handleCheckItem, 2000, [])
    const handleClearAllCompleted = () => {
        dispatch(toggleAllTodoTasks({ status: false }))
    }

    const handleMarkAllDone = () => {
        dispatch(toggleAllTodoTasks({ status: true }))
    }

    const filteredTodos = React.useMemo(
        () =>
            filters.color
                ? todos.todoTasks.filter(todo => todo.color === filters.color)
                : todos.todoTasks,
        [filters, todos.todoTasks]
    )
    const remain = React.useMemo(
        () => filteredTodos.filter(todo => !todo.completed).length,
        [filteredTodos]
    )

    if (todos.loading === 'pending') {
        return <div>Loading...</div>
    }

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

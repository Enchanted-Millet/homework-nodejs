import { createSlice } from '@reduxjs/toolkit'
import { Colors } from '../filters/filtersSlice'

const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: Colors.red },
    {
        id: 2,
        text: 'Build a Todo List app',
        completed: false,
        color: Colors.cyan
    }
]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const [text, color] = action.payload.trim().split('@')
            state.push({
                id: nextTodoId(state),
                text,
                color,
                completed: false
            })
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        toggleTodos: (state, action) => {
            state.map(todo => (todo.completed = action.payload))
        }
    }
})

export const { addTodo, toggleTodo, toggleTodos } = todosSlice.actions

export default todosSlice.reducer

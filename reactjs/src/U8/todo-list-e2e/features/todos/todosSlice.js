import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'https://hw-todo-list-server.herokuapp.com/api/todos/'

const initialState = {
    todoTasks: [],
    loading: 'idle'
}

export const fetchTodoTasks = createAsyncThunk(
    'todos/fetchTodoTasks',
    async () => {
        const response = await axios.get(baseUrl)
        return response.data
    }
)

export const createTodoTask = createAsyncThunk(
    'todos/createTodoTask',
    async ({ ...payload }, { rejectWithValue }) => {
        try {
            const response = await axios({
                url: baseUrl,
                data: { payload },
                method: 'POST'
            })
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const editTodoTask = createAsyncThunk(
    'todos/editTodoTask',
    async ({ id, ...payload }, { rejectWithValue }) => {
        try {
            const response = await axios({
                url: baseUrl + id,
                // url: '/api/todos/' + id,
                data: { payload },
                method: 'PUT'
            })
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const deleteTodoTask = createAsyncThunk(
    'todos/deleteTodoTask',
    async ({ id }, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios({
                url: baseUrl + id,
                method: 'DELETE'
            })
            await dispatch(fetchTodoTasks())
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const toggleAllTodoTasks = createAsyncThunk(
    'todos/toggleAll',
    async ({ status }, { getState, dispatch }) => {
        await Promise.all(
            getState().todos.todoTasks.map(todo =>
                dispatch(editTodoTask({ id: todo._id, completed: status }))
            )
        )
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTodoTasks.fulfilled, (state, action) => {
            state.todoTasks = action.payload
            state.loading = 'succeeded'
        })
        builder.addCase(fetchTodoTasks.pending, state => {
            state.loading = 'pending'
        })
        builder.addCase(createTodoTask.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.todoTasks.push(action.payload.todoTask)
        })
        builder.addCase(createTodoTask.rejected, (state, action) => {
            // console.log(action)
        })
        builder.addCase(editTodoTask.fulfilled, (state, { payload }) => {
            const idx = state.todoTasks.findIndex(
                todo => todo._id === payload.todoTask?._id
            )
            state.todoTasks[idx] = payload.todoTask
        })
        builder.addCase(editTodoTask.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export const { addTodo, toggleTodo, toggleTodos } = todosSlice.actions

export default todosSlice.reducer

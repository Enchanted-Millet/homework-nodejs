import { createStore } from 'redux'
import todoReducer, { initialState } from './reducers/todos'

export default createStore(todoReducer, initialState)

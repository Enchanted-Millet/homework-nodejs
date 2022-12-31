import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'
import logger from './middleware/logger'

export default configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer
    }
    // middleware: getDefaultMiddleware => {
    //     getDefaultMiddleware({
    //         immutableCheck: true,
    //         serializableCheck: true
    //     }).concat(logger)
    // }
})

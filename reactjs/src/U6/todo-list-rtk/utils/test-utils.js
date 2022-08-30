import React from 'react'
import { render as renderRTL } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'

export default function render(
    ui,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: { todos: todosReducer, filters: filtersReducer },
            preloadedState
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...renderRTL(ui, { wrapper: Wrapper, ...renderOptions }) }
}

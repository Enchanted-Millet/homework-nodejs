import React from 'react'
import { Provider } from 'react-redux'
import TodoList from './todo-list-e2e'
import store from './todo-list-e2e/app/store'

const U8 = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
}

export default U8

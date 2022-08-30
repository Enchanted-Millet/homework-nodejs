import React from 'react'
import { Provider } from 'react-redux'
import TodoList from './hw1'
import store from './hw1/redux/store'
import TodoListRTK from './todo-list-rtk'
import storeRTK from './todo-list-rtk/app/store'

/**
 * Redux setup steps
 * 1. create a store - ONLY ONE STORE per application
 * 2. wrap your component with Provider
 * 3. create reducer(s) - if multiple reducers needed, make sure have one root reducer
 * 4. define action creator
 * 5. trigger action creator in UI (React component)
 * 6. optional - add Thunk if async is needed, and any other Redux enhancers
 */

const U6 = () => {
    return (
        <Provider store={storeRTK}>
            {/* <TodoList /> */}
            <TodoListRTK />
            {/* <Another /> */}
        </Provider>
    )
}

export default U6

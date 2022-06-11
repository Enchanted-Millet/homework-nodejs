import { combineReducers } from 'redux'

import dataReducer from './data'
import userReducer from './user'
import timerReducer from './timer'

export default combineReducers({
    hw1: timerReducer,
    hw4: userReducer,
    hw5: dataReducer
})

/**
 * {hw4: [...], hw5: [...]}
 */

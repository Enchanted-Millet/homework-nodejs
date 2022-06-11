const initialState = {
    count: 0,
    started: false
}

export const actionTypes = {
    TIMER_START: 'TIMER_START',
    TIMER_STOP: 'TIMER_STOP',
    TIMER_RESET: 'TIMER_RESET',
    SET_STARTED: 'SET_STARTED'
}

let intervalId

export default function timerReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TIMER_START:
            return {
                count: state.count + 1,
                started: true
            }
        case actionTypes.TIMER_STOP:
            clearInterval(intervalId)
            return {
                ...state,
                started: false
            }
        case actionTypes.TIMER_RESET:
            clearInterval(intervalId)
            return {
                count: 0,
                started: false
            }
        case actionTypes.SET_STARTED:
            return {
                ...state,
                started: action.payload
            }
        default:
            return state
    }
}

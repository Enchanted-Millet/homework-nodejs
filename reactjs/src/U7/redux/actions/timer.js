import { actionTypes } from '../reducers/timer'

let intervalId

export const timerStart = () => dispatch => {
    dispatch({ type: actionTypes.SET_STARTED, payload: true })
    intervalId = setInterval(
        () => dispatch({ type: actionTypes.TIMER_START }),
        1000
    )
}

export const timerStop = () => dispatch => {
    clearInterval(intervalId)
    dispatch({ type: actionTypes.TIMER_STOP })
}

export const timerReset = () => dispatch => {
    clearInterval(intervalId)
    dispatch({ type: actionTypes.TIMER_RESET })
}

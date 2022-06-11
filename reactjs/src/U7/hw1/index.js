import React from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { timerStart, timerStop, timerReset } from '../redux/actions/timer'

const Container = styled.div`
    margin: auto;
    padding: 0;
    width: 33%;
    height: 500px;
    position: relative;
`

const Display = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1000%;
`

export default function Timer() {
    const dispatch = useDispatch()
    const { count, started } = useSelector(state => state.hw1)

    const handleClick = React.useCallback(e => {
        const { name } = e.target
        if (name === 'start') {
            dispatch(timerStart())
        } else if (name === 'stop') {
            dispatch(timerStop())
        } else if (name === 'reset') {
            dispatch(timerReset())
        }
    }, [])

    return (
        <Container>
            <Display>{count}</Display>
            <div className="btn-group" role="group" style={{ width: '100%' }}>
                {started ? (
                    <button
                        name="stop"
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={handleClick}
                    >
                        STOP
                    </button>
                ) : (
                    <button
                        name="start"
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={handleClick}
                    >
                        START
                    </button>
                )}
                <button
                    name="reset"
                    className="btn btn-primary btn-lg"
                    type="button"
                    onClick={handleClick}
                >
                    RESET
                </button>
            </div>
        </Container>
    )
}

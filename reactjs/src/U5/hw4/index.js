import React from 'react'
import styled from '@emotion/styled'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TrafficLight = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid darkgray;
    border-radius: 50%;
    margin: 1vh 0;
    background-color: ${props => props.lightOn && props.color};
`

const ButtonGroup = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    margin: auto;
    padding-top: 3vh;

    button {
        flex-basis: 30%;
        flex-grow: 1;

        a {
            width: 100%;
            display: block;
            text-decoration: none;

            &:hover {
                color: #fff;
                transition: color 0.25s;
            }
        }
    }
`

const TrafficLightSimulator = () => {
    const params = useParams()
    const { status } = params
    return (
        <>
            <Container>
                <TrafficLight lightOn={status === 'red'} color={status} />
                <TrafficLight lightOn={status === 'yellow'} color={status} />
                <TrafficLight lightOn={status === 'green'} color={status} />
            </Container>
            <ButtonGroup>
                <button
                    className="btn btn-outline-primary"
                    disabled={status !== 'red'}
                >
                    <Link to="/green">Go</Link>
                </button>
                <button
                    className="btn btn-outline-primary"
                    disabled={status !== 'green'}
                >
                    <Link to="/yellow">Caution</Link>
                </button>
                <button
                    className="btn btn-outline-primary"
                    disabled={status !== 'yellow'}
                >
                    <Link to="/red">Stop</Link>
                </button>
            </ButtonGroup>
        </>
    )
}

const TrafficLightSimulatorRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<TrafficLightSimulator />} />
                <Route path="/:status" element={<TrafficLightSimulator />} />
                {/*<Route*/}
                {/*    path="/red"*/}
                {/*    element={<TrafficLightSimulator status="red" />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path="/yellow"*/}
                {/*    element={<TrafficLightSimulator status="yellow" />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path="/green"*/}
                {/*    element={<TrafficLightSimulator status="green" />}*/}
                {/*/>*/}
            </Routes>
        </BrowserRouter>
    )
}

export default TrafficLightSimulatorRouter

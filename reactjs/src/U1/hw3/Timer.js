import React, { Component } from 'react'
import styled from '@emotion/styled'

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

// export default function Timer() {
//     const [count, setCount] = React.useState(0);
//     const [started, setStarted] = React.useState(false);

//     let intervalId;

//     const handleClick = React.useCallback(e => {
//         const { name } = e.target;
//         // let intervalId;
//         if (name === 'start') {
//             setStarted(true);
//             intervalId = setInterval(() => {
//                 setCount(prevVal => prevVal + 1);
//             }, 1000);
//         } else if (name === 'stop') {
//             setStarted(false);
//             clearInterval(intervalId);
//         } else if (name === 'reset') {
//             setCount(0);
//             setStarted(false);
//             clearInterval(intervalId);
//         }
//     }, []);

//     return (
//         <div className="container">
//             <div id="display">{count}</div>
//             <div className="btn-group">
//                 {started ? (
//                     <button name="stop" className="btn btn-primary btn-lg" type="button" onClick={handleClick}>
//                         STOP
//                     </button>
//                 ) : (
//                     <button name="start" className="btn btn-primary btn-lg" type="button" onClick={handleClick}>
//                         START
//                     </button>
//                 )}
//                 <button name="reset" className="btn btn-primary" type="button" onClick={handleClick}>
//                     RESET
//                 </button>
//             </div>
//         </div>
//     );
// }

export default class Timer extends Component {
    state = { count: 0, started: false }
    intervalId = null

    handleClick = e => {
        const { name } = e.target
        if (name === 'start') {
            this.setState({ started: true })
            this.intervalId = setInterval(() => {
                this.setState(prevState => ({
                    ...prevState,
                    count: prevState.count + 1
                }))
                // this.setState({ count: this.state.count + 1 });
            }, 1000)
        } else if (name === 'stop') {
            this.setState({ started: false })
            clearInterval(this.intervalId)
        } else if (name === 'reset') {
            this.setState({ count: 0 })
            this.setState({ started: false })
            clearInterval(this.intervalId)
        }
    }

    render() {
        let { count, started } = this.state
        return (
            <Container>
                <Display>{count}</Display>
                <div
                    className="btn-group"
                    role="group"
                    style={{ width: '100%' }}
                >
                    {started ? (
                        <button
                            name="stop"
                            className="btn btn-primary btn-lg"
                            type="button"
                            onClick={this.handleClick}
                        >
                            STOP
                        </button>
                    ) : (
                        <button
                            name="start"
                            className="btn btn-primary btn-lg"
                            type="button"
                            onClick={this.handleClick}
                        >
                            START
                        </button>
                    )}
                    <button
                        name="reset"
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={this.handleClick}
                    >
                        RESET
                    </button>
                </div>
            </Container>
        )
    }
}

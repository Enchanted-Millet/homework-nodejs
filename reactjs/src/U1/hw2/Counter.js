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

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { countNumber: 0 }
    }

    // handleChange(e) {
    handleChange = e => {
        const { name } = e.target
        if (name === 'plus') {
            this.setState(prevState => ({
                countNumber: prevState.countNumber + 1
            }))
        } else if (name === 'minus') {
            this.setState(prevState => ({
                countNumber: prevState.countNumber - 1
            }))
        }
    }

    render() {
        return (
            <Container>
                <Display>{this.state.countNumber}</Display>
                <div
                    className="btn-group"
                    role="group"
                    style={{ width: '100%' }}
                >
                    <button
                        name="plus"
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={this.handleChange}
                    >
                        +
                    </button>
                    <button
                        name="minus"
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={this.handleChange}
                    >
                        -
                    </button>
                </div>
            </Container>
        )
    }
}

// export default function Counter() {
//     const [countNumber, setCountNumber] = React.useState(0);
//     return (
//         <Container>
//             <Display>{countNumber}</Display>
//             <div className="btn-group" role="group" style={{ width: '100%' }}>
//                 <button
//                     name="plus"
//                     className="btn btn-primary btn-lg"
//                     type="button"
//                     onClick={() => setCountNumber(countNumber + 1)}
//                 >
//                     +
//                 </button>
//                 <button
//                     name="minus"
//                     className="btn btn-primary"
//                     type="button"
//                     onClick={() => setCountNumber(countNumber - 1)}
//                 >
//                     -
//                 </button>
//             </div>
//         </Container>
//     );
// }

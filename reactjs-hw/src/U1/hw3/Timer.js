import React, { Component } from 'react';

let timerID = null
class Timer extends Component {
    constructor(props) {
            super(props);
            this.state = {time: 0, started: false}
    }

    toggle = e => {
        const {name} = e.target
        if (name === 'start') {
            this.setState({started: true})
            timerID = setInterval(() => this.setState({time: this.state.time + 1}), 1000)

        } else {
            this.setState({started: false})
            clearInterval(timerID)
        }
    }

    reset = e => {
        const {name} = e.target
        if (name === 'start') {
            this.setState({time: 0})
            clearInterval(timerID)
        } else {
            this.setState({time: 0})
        } 
    }

    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                {
                    this.state.started ? ( 
                        <button name="stop" onClick={this.toggle}>STOP</button>
                    ) : (
                        <button name="start" onClick={this.toggle}>START</button>
                    )
                }
                <button onClick={this.reset}>RESET</button>
            </div>
        );
    }
}

export default Timer;

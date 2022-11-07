import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }
    addOne = () => {
        this.setState({number: this.state.number + 1});
    };
    minusOne = () => {
        this.setState({number: this.state.number - 1});
    };

    render() {
        return (
            <div>
                <p>Counter: {this.state.number}</p>
                <button name="add" onClick={this.addOne}>Increase</button>
                <button name="minus" onClick={this.minusOne}>Decrease</button>
            </div>
        );
    }
}

export default Counter;

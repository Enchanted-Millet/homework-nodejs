import './App.css';
import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {number:1};
    }
    addOne = () => {
        this.setState({number: this.state.number + 1});
    };
    minusOne = () => {
        this.setState({number: this.state.number -1});
    };
render(){

    return(
        <div className='c'>
            <p className='num'>{this.state.number}</p>
<button onClick={this.addOne} className='add'>+</button>
<button onClick={this.minusOne} className='minus'>-</button>
</div>
    )
}
}

export default App;
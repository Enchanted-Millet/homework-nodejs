import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    state = {number: 0, started: false};
    interval = null;

    handleClick = e => {
        const {name} = e.target;
        if(name === 'start'){
            this.setState({started:true});
            this.interval = setInterval(()=> {
                this.setState(prevState => ({...prevState, number: prevState.number + 1}));
            }, 1000);
        } else if (name === 'stop'){
            this.setState({started: false});
            clearInterval(this.interval);
        }else if (name === 'reset'){
            this.setState({number: 0});
            this.setState({started: false});
            clearInterval(this.interval);
        }
    };

    render(){
        let {number, started} = this.state;
        return(
            <div className='c'>
                <p className='num'>{number}</p>
                <div>
                    {started ? (
                        <button name="stop" className='button' onClick={this.handleClick}>STOP</button>
                    ) : (
                        <button name="start" className='button' onClick={this.handleClick}>START</button>
                    
                    )}
                    <button name="reset" className='button' onClick={this.handleClick}>RESET</button>
                </div>
            </div>
        );
    }
}
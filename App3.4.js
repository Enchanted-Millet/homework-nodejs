import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(event) {
      this.setState({
        value: event.target.value,
      });
      //console.log(event.target.value)
      
    }
  
    render() {
      return (
        <div>
          <input onChange={this.onChange} />
          <p >{'Hello ' + this.state.value + ' !'}</p>
        </div>
      );
    }
  }
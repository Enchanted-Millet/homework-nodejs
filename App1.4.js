import React, {Component} from 'react';
const str = num => {
    if (num === '') {
        return '' ;
    }

    switch (num % 10) {
        case 1:
            return num + 'st';
        case 2:
            return num + 'nd';
        case 3:
            return num + 'rd';
        default:
            return num + 'th';
    }
};

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
          <p >{str(this.state.value)}</p>
        </div>
      );
    }
  }

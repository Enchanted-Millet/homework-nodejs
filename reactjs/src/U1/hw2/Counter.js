import React, { Component } from 'react';
import './style.css';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = { countNumber: 0 };
    }

    // handleChange(e) {
    handleChange = e => {
        console.log(this.state.countNumber); // 0
        const { name } = e.target;
        if (name === 'plus') {
            this.setState(prevState => ({ countNumber: prevState.countNumber + 1 }));
        } else if (name === 'minus') {
            this.setState(prevState => ({ countNumber: prevState.countNumber - 1 }));
        }
    };
    render() {
        return (
            <div className="container">
                <div id="display">{this.state.countNumber}</div>
                <div className="btn-group">
                    <button name="plus" className="btn btn-primary btn-lg" type="button" onClick={this.handleChange}>
                        +
                    </button>
                    <button name="minus" className="btn btn-primary" type="button" onClick={this.handleChange}>
                        -
                    </button>
                </div>
            </div>
        );
    }
}

// export default function Counter() {
//     const [countNumber, setCountNumber] = React.useState(0);
//     return (
//         <div className="container">
//             <div id="display">{countNumber}</div>
//             <div className="btn-group">
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
//         </div>
//     );
// }

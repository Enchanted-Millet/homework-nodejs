import React, {Component} from 'react'

function List(props){
    return(
        <div>
            <input type='checkbox'>{props.list}</input><br/>
        </div>
    )
}

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={input:'', list:[]};
    }

    handleInput = e => {
        this.setState({list: e.target.value});
    }

    handleSpace = e => {
        if(e.keyCode === 13){
            const newItem = {
                id: index++,
                todo: this.state.input,
                completed: false,
            };
            this.state({list: [...this.state.list, newItem], input:''});
        }
    }

    handleCheck = id => {

    }

    handleClear = () => {

    }

    handleAllDone = () => {

    }
    render(){
        let {list} = this.state;
        
        return(
     <div>Todos-AngularJs<br/><br/>

         <input onChange={this.handleInput} value={this.state.list} placeholder='Type a todo list'/>

         <p>2 remaining<button>Clear Completed Todos</button></p>

         <input type="checkbox"/>Mark All Done <br/>
         <p>
         <input type="checkbox"/>Task 2<br/>
         <input type="checkbox"/>Task 1<br/>
         {this.state.list.map((item, index)=> {
                return <List key={item.id} {...item}/>;
            })}
         </p>
     </div>
        )
    }
}
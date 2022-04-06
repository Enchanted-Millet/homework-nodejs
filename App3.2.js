import React, {Component} from 'react'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {password:[], username:[]}
    }
    handleSubmit = e => {
            alert(this.state)
        }
        handleName = e => {
            this.setState({username: e.target.value});
        }
        handlePassword = e => {
            this.setState({password: e.target.value});
        }

    render(){
        
        function date () {
            
          let  year = getFullYear();
          let  month = getMonth();
          let today = getDay();

          let passwordtoday = year + month + today ;
          let passwordtomorrow = year + month + (today+1);
          let passwordyesterday = year + month + (today-1);

         console.log(date)
        }
        return(
            <form onSubmit={this.handleSubmit}> Form Register
               <br/><p>Username
               <input value={this.state.username} onChange={this.handleName} /><br/>
               </p>
               
               <p>Password
               <input type="password"  value={this.state.password} onChange={this.handlePassword}/><br/>
               </p>
               
               <button type="submit">Submit</button>
               
           </form>
        )
    }
}
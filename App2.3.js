import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {name:'SteveJobs', email:'s.jobs@apple.com', email2:'s.jobs@apple.com', password:'1234567', skill:'5', terms:true}
    }

    


    handleName = e => {
        this.setState({name: e.target.value});
    }
    handleEmail = e => {
        this.setState({email: e.target.value});
    }
    handleEmail2 = e => {
        this.setState({email2: e.target.value});
    }
    handlePassword = e => {
        this.setState({password: e.target.value});
    }
    handleSkill = e => {
        this.setState({skill: e.target.value});
    }
    handleTerms = e => {
        this.setState({term: e.target.value});
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }
    handleClear = e => {
        
    }
    handleReset = e => {
        
    }
    render(){
        App.propTypes = {
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        }
    
        return(
           <form onSubmit={this.handleSubmit}> Form Register
               <br/><p>Username
               <input ref={{required:true}} value={this.state.name} onChange={this.handleName} /><br/>
               </p>
               <p>Email
               <input ref={{required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, }} value={this.state.email} onChange={this.handleEmail}/><br/>
               </p>
               <p>Confirm Email
               <input ref={{required:true,
                        validate:{message:value=>value===('email')}}} value={this.state.email2} onChange={this.handleEmail2}/><br/>
               </p>
               <p>Password
               <input type="password" ref={{minLengh: 8}} value={this.state.password} onChange={this.handlePassword}/><br/>
               </p>
               <p>Dev Skills (1-10)
               <input value={this.state.skill} ref={{min: 1, max: 10}} onChange={this.handleSkill}/><br/>
               </p>
               <p>
                   <input type="checkbox" ref={{required:true}} onClick={this.terms}/>
                   Accept Terms
               </p>
               <button type="submit">Submit</button>
               <button>Clear</button>
               <button>Reset</button>
           </form>
        )
    }
}
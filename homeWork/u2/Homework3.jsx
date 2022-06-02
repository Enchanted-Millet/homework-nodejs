import React from "react";
import "./style.css"

const Form = () => {



    return (
        <div className="form_container">
        <form>
        <div>
            <p>Username</p>
        <input></input>
        <p>Email</p>
        <input></input>
        <p>Confirm Email</p>
        <input></input>
        <p>Password</p>
        <input></input>
        <p>Dev Skills(5-10)</p>
        <input></input>
        <div><input type="checkbox"></input><span>Accept Tems</span></div>
        <div className="button_container">
            <button>Submit</button>
            <button>Clear</button>
            <button>Reset</button>
        </div>

        </div>
        
        </form>
        </div>
    )



}  

export default Form;
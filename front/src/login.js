import React, { Component } from 'react';
import propTypes from "prop-types";
import "./login.css";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuario : "",
            password : ""
        }
    }

    render() {
        return ( <div>
            {this.renderLogin()}
        </div> );
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    onSubmitEvent(){
        fetch("/users/auth/login", {
            method: "POST", headers : {
              accept : "application/json",
              "Content-Type" : "application/json"
            }, body : JSON.stringify({
                username : this.state.usuario,
                password : this.state.password 
            })
          }).then((res)=>{
            console.log(res);
            if (res.ok){
              return res.json();
            }
          }).then((tweetsNuevos) => {
            
        });
    }

    renderLogin(){
        return (<div className="form">
            <div className="tab-content">
                <div id="login">   
                    <h1>Welcome Back!</h1>
                    <form onSubmit={this.onSubmitEvent}>
                        <div className="field-wrap">
                            <label>
                                Username<span className="req">*</span>
                            </label>
                            <input type="text"required autoComplete="off" name="usuario" onChange={this.handleInputChange.bind(this)}/>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Password<span className="req">*</span>
                            </label>
                            <input type="password"required autoComplete="off" name="password" onChange={this.handleInputChange.bind(this)}/>
                        </div>
                        <button className="button button-block">Log In</button>
                    </form>
                </div>
            </div>
        </div>)
    }
}

Login.propTypes = {
    token : propTypes.string.isRequired
};

export default Login;
import React, { Component } from 'react';
import propTypes from "prop-types";
import "./login.css";

class Login extends Component {
    constructor(props){
        super(props);
        this.state  = {
            login : "",
            password : "",
            bio : "",
            confirm : "",
            name : ""
        };
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

    handleChange(event) {
        this.setState({bio: event.target.value});
    }

    onSubmitEvent(){
        if(this.state.password === this.state.confirm){
            fetch("/users/auth/signup", {
                method: "post", headers : {
                accept : "application/json",
                "Content-Type" : "application/json"
                }, body : JSON.stringify({
                    username : this.state.usuario,
                    password : this.state.password,
                    bio : this.state.bio,
                    name : this.state.name
                })
            }).then((res)=>{
                console.log(res);
                if (res.ok){
                    return res.json();
                }
            }).then((tweetsNuevos) => {
                
            });
        } else {

        }
    }

    renderLogin(){            
        return (<div className="tab-content">
            <div id="signup">   
                <h1>Sign Up for Free</h1>    
                <form onSubmit={this.onSubmitEvent}>
                    <div className="top-row">
                        <div className="field-wrap">
                            <label>
                                Username<span className="req">*</span>
                            </label>
                            <input type="text" required autoComplete="off" name="login"onChange={this.handleInputChange.bind(this)} />
                        </div>
                        <div className="field-wrap">
                            <label>
                                Name<span className="req">*</span>
                            </label>
                            <input type="text"required autoComplete="off"name="name" onChange={this.handleInputChange.bind(this)}/>
                        </div>
                    </div>
                    <div className="field-wrap">
                        <label>
                            Email Address<span className="req">*</span>
                        </label>
                        <textarea value={this.state.bio} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="field-wrap">
                        <label>
                            Set A Password<span className="req">*</span>
                        </label>
                        <input type="password"required autoComplete="off" name="password"onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <div className="field-wrap">
                        <label>
                            confirm Password<span className="req">*</span>
                        </label>
                        <input type="password"required autoComplete="off" name="confirm"onChange={this.handleInputChange.bind(this)}/>
                    </div>
                    <button type="submit" className="button button-block">Get Started</button>
                </form>
            </div>
        </div>)
    }
}

Login.propTypes = {
    token : propTypes.string.isRequired
};

export default Login;
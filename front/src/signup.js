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
            confPassword : "",
            name : ""
        };
    }

    render() {
        return ( <div>
            {this.renderLogin()}
        </div> );
    }

    renderLogin(){            
        return (<div className="tab-content">
            <div id="signup">   
                <h1>Sign Up for Free</h1>    
                <form action="/" method="post">
                    <div className="top-row">
                        <div className="field-wrap">
                            <label>
                                First Name<span className="req">*</span>
                            </label>
                            <input type="text" required autoComplete="off" />
                        </div>
                        <div className="field-wrap">
                            <label>
                                Last Name<span className="req">*</span>
                            </label>
                            <input type="text"required autoComplete="off"/>
                        </div>
                    </div>
                    <div className="field-wrap">
                        <label>
                            Email Address<span className="req">*</span>
                        </label>
                        <input type="email"required autoComplete="off"/>
                    </div>
                    <div className="field-wrap">
                        <label>
                            Set A Password<span className="req">*</span>
                        </label>
                        <input type="password"required autoComplete="off"/>
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
import React, { Component } from 'react';
import './App.css';
import Login from "./login.js";
import Signup from "./signup.js";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      token : "",
      showSignup : false
    }
  }

  showLogin(event){
    if(this.state.showSignup !== false){
      this.setState({showSignup : false});
    }
  }

  showSignup(event){
    console.log(event);
    if(this.state.showSignup === false){
      this.setState({showSignup : true});
    }
  }

  doLogin(newToken){
    this.setState({token : newToken});
  }

  renderAuth(){
    var auth;
    if(this.state.token === ""){
      var activeLogin = !this.state.showSignup ? " active": "" ;
      var activeSignup = this.state.showSignup ? " active": "" ;
      auth = (
          <div className="form">
            <ul className="tab-group">
              <li className={'tab' + activeSignup}><a onClick={this.showSignup.bind(this)}>Sign Up</a></li>
              <li className={'tab' + activeLogin}><a onClick={this.showLogin.bind(this)}>Log In</a></li>
            </ul>
            {this.state.showSignup === true && <Signup token={this.state.token}></Signup>} 
            {this.state.showSignup === false && <Login token={this.state.token} login={this.doLogin.bind(this)}></Login>}
          </div>
      );
    } else {
      auth = (<div diplay="none"></div>);
    }
    return auth;
  }

  render() {
    return (<div>{this.renderAuth()}</div>);
  }
}

export default App;

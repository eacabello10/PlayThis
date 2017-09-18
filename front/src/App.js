import React, { Component } from 'react';

import  GamesList from "./GamesList.js";
class App extends Component {
 
  constructor(props){
    super(props);
    this.state={
      games: [
      ]
    };
  } 

  componentDidMount() {
    fetch("/games", {method:"GET", 
      headers:{accept:"application/json"}})
    .then((res) => {
      if(res.ok)
        return res.json();
    })
    .then((newGames) => {
      this.setState({
        games: newGames
      });
    });
  }

  render(){
    return (
      <div>
      <h1>Games</h1>
      <GamesList games={this.state.games}/>
      </div>);
  }
}


export default App;
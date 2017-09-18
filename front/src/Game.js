import React, {Component} from "react";
import PropTypes from "prop-types";

 class Game extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(<div>
			<div className="id">Game ID: {this.props.game.id}</div>
			<div className="name">Name: {this.props.game.name}</div>
			<div className="launchdate">Launch Date: {this.props.game.launchdate}</div>
			if({this.props.game.exclusive}){
			<div className="exclusive">It's exclusive?: Yes</div>
			}
			else{
			<div className="exclusive">It's exclusive?: No</div>
			}
			<div className="genre">Genre: {this.props.game.genre}</div>
			<div className="aproxDuration">Aprox. Duration: {this.props.game.aproxDuration}</div>
			<div className="multiplayer">Multiplayer: {this.props.game.multiplayer}</div>
			</div>);
			}
}

Game.propTypes = {
    game : PropTypes.object.isRequired
};

export default Game;
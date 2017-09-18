import React, {Component} from "react";
import PropTypes from "prop-types";

 class Game extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		//Podrian agregar esto en un formulario con un css de manera que se muestre mejor en la pagina
		return(<div>
		       <form>
			<div className="id" align="center">Game ID: {this.props.game.id}</div>
			<div className="name" align="center">Name: {this.props.game.name}</div>
			<div className="launchdate" align="center">Launch Date: {this.props.game.launchdate}</div>
			{this.props.game.exclusive === true && <div className="exclusive">It's exclusive?: Yes</div>}
			{this.props.game.exclusive === false && <div className="exclusive">It's exclusive?: No</div>}
			<div className="genre">Genre: {this.props.game.genre}</div>
			<div className="aproxDuration" align="center">Aprox. Duration: {this.props.game.aproxDuration}</div>
			{this.props.game.multiplayer === true && <div className="multiplayer">Multiplayer: Yes</div>}
			{this.props.game.multiplayer === false && <div className="multiplayer">Multiplayer: No</div>}
		       </form>
			</div>);
			}
}

Game.propTypes = {
    game : PropTypes.object.isRequired
};

export default Game;

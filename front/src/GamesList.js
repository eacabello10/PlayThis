import React, {Component} from "react";
import PropTypes from "prop-types";

import Game from "./Game.js";
class GamesList extends Component {
	constructor(props) {
		super(props);
	}

	renderGames() {
		return this.props.games.map((g,i) => {
			return <Game game= {g} key={i}/>;
		});
	}

	render(){
		return(<div>
			{this.renderGames()}
			</div>);
	}
}

GamesList.propTypes = {
    games : PropTypes.array.isRequired
};

export default GamesList;
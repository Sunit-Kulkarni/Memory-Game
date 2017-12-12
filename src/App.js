import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import MemoryGame from './MemoryGame';
import Ajax from './Ajax';

class App extends Component {
	constructor () {
		super();

	}

	render () {
		return (
			<div>
				<div className="navbar">
					<Link to="/memory">Memory Game</Link>
					<Link to="/ajax">Ajax</Link>
				</div>

				<Switch>
					<Route path="/" component={MemoryGame}/>
					<Route path="/memory" component={MemoryGame}/>
					<Route path="/ajax" component={Ajax}/>
				</Switch>
			</div>
		);
	}

}

export default App;
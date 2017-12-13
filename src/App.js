import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import MemoryGame from './MemoryGame';
import Jobs from './Jobs';

class App extends Component {
	constructor () {
		super();

	}

	render () {
		return (
			<div>
				<div className="navbar">
					<Link to="/memory">Memory Game</Link>
					<Link to="/Jobs">Jobs</Link>
				</div>

				<Switch>
					<Route path="/" component={MemoryGame}/>
					<Route path="/memory" component={MemoryGame}/>
					<Route path="/Jobs" component={Jobs}/>
				</Switch>
			</div>
		);
	}

}

export default App;
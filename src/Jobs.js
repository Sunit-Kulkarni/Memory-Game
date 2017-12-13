import React, { Component } from 'react';
import '/Jobs.css'

class Jobs extends Component {
	constructor () {
		super();

	}

	render () {
		return (
			<div>
				<div className="App">
					<header className="App-header">
	          			<h1 className="App-title">Memory Game</h1>
	          			<h1 className="App-sub-title">Match Cards to Win</h1>
	        		</header>
				</div>

				<div className="Jobs">
				Loading...
				</div>
			</div>
		);
	}

}

export default Jobs;
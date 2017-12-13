import React, { Component } from 'react';
import './Jobs.css';
import JobsListItem from './JobsListItem.js';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Job from './Job'

class Jobs extends Component {
	constructor () {
		super();
		this.state = {//do not do setState in the constructor
			jobs: []
		}; 
	}

	componentWillMount() {
		axios.get('/api/jobs')
		.then(({ data }) => {
			this.setState({
				jobs: data
			});
		})
	}

	render () {
		var jobsJSX = this.state.jobs.map((job, index) => {// mapping api data to JobsListItem
			return <JobsListItem key={index} {...job} />
		});
		return (
			<div>
				<div className="App">
					<header className="App-header">
	          			<h1 className="App-title">Jobs In Atlanta</h1>
	          			<h1 className="App-sub-title">Click to explore Jobs</h1>
	        		</header>
				</div>

				<div className="Jobs">
					<Switch>
						<Route exact path="/jobs" render={() => jobsJSX}/>
						<Route path="/jobs/:id" component={Job} />
					</Switch>
				</div>
			</div>
		);
	}

}

export default Jobs;
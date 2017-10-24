import React, { Component } from 'react';
import axios from 'axios';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import Paper from 'material-ui/Paper';
import ContentLoader from 'react-content-loader'

var Constants = require('utils/Constants');
const paperStyle = {
	textAlign: 'center',
	display: 'block',
};

const wrapperStyle = {
	width: '20%',
	height: 'auto',
	textAlign: 'left',
	float: 'left'
};

const headerStyle = {
	display: 'inline',
	textAlign: 'center'
};

const addStyle = {
	display: 'inline',
	textAlign: 'center',
	padding: '0',
	verticalAlign: 'bottom',
	float: 'right'
};

class ProjectView extends Component {
	constructor(props) {
		super(props);
		this.state = { projects : null };
		this.loadProjectData = this.loadProjectData.bind(this);
		this.loadData = this.loadData.bind(this);
		this.postData = this.postData.bind(this);
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		this.loadProjectData();
	}

	loadProjectData() {
		axios.get(Constants.projectUrl)
		.then(res => {
			this.setState({projects : res.data });
		})
		.catch(err => {
			console.log(err);
		})
	}

	postData(data) {
		axios.post(this.state.url, data)
		.then(res => {
			this.loadData();
		})
		.catch(err => {
			console.error(err);
		});
	}


	getProjectList() {
		if(this.state.projects) {
			return <ProjectList data={ this.state.projects } />;
		}
		return <ContentLoader type='list' />;
	}

	render() {
		let projectList = this.getProjectList();
		return (
			<div style={ wrapperStyle }>
				<div className="row">
					<h1 style={ headerStyle }>Projects</h1>
				</div>
				<div className="row">
					<Paper zDepth={1} style={ paperStyle }>
						<div>
							{projectList}
						</div>
					 </Paper>
				 </div>
			</div>
		)
	}
}

export default ProjectView;
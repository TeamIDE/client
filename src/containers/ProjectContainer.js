import React, {Component} from 'react';
import axios from 'axios';
import ProjectList from 'components/ProjectList';
import ContentLoader from 'react-content-loader'
require('./ProjectContainer.css');

var Constants = require('utils/Constants');

class ProjectContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { projects : null }
	}

	componentDidMount() {
		this.loadData();
	}

	loadData = () => {
		var self = this;
		axios.get(Constants.projectUrl)
		.then(res => {
			self.setState( {projects : res.data} );
		})
		.catch(err => {
			return err;
		})
	}



	render() {
		const dataReceived = this.state.projects !== null ? true : false;
		return(
			<div className='project-container'>
				{	dataReceived
					? <ProjectList projects={this.state.projects}/>
					: <ContentLoader mode='list' />
				}
			</div>
		)
	}
}

export default ProjectContainer;
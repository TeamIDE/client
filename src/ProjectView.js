import React, { Component } from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import DATA from './data';
import Paper from 'material-ui/Paper';

const style = {
	width: '100%',
	height: 'auto',
	textAlign: 'center',
	display: 'inline-block',
};

class ProjectView extends Component {
	constructor(props) {
		super(props);
		this.state = { data : [] };
	}


	render() {
		return (
			<div style={ style }>
				<div class="row">
					<Paper zdepth={1} className="col-md-6">
						<h2 class="col-md-2">Projects</h2>
						<ProjectList data={ DATA } />
					 </Paper>
				</div>
				<div class="row">
					<ProjectForm />
				</div>
			</div>
			)
	}
}

export default ProjectView;
import React, { Component } from 'react';
import axios from 'axios';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import Paper from 'material-ui/Paper';
import ContentLoader from 'react-content-loader'

const paperStyle = {
	textAlign: 'center',
	display: 'block',
};

const wrapperStyle = {
	width: '50%',
	height: 'auto',
	marginLeft: 'auto',
	marginRight: 'auto',
	textAlign: 'center'
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
		this.state = { data : [], url : props.url };
		this.loadData.bind(this);
	}

	loadData() {
		axios.get(this.state.url)
		.then(res => {
			this.setState({data : res.data });
		})
	}

	componentDidMount() {
		this.loadData();
	}

	getProjectList() {
		if(this.state.data) {
			return <ProjectList data={ this.state.data } />;
		}
		return <ContentLoader type='list' />;
	}

	render() {
		let projectList = this.getProjectList();
		return (
			<div style={ wrapperStyle }>
				<div className="row">
					<h1 style={ headerStyle }>Projects</h1>
					<span style={ addStyle }>
					<ProjectForm style={ addStyle } url={ this.props.url } reloadData={ this.loadData }/>
					</span>
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
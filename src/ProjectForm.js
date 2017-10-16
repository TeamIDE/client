import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ProjectForm extends Component {
	constructor(props) {
		super(props);
		this.state = { id : '', title : ''};
		this.handleIdChange.bind(this);
		this.handleTitleChange.bind(this);
		this.handleSubmit.bind(this);
	}

	handleIdChange(e) {
		this.setState({ id : e.target.value });
	}

	handleTitleChange(e) {
		this.setState({ title : e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("clicked submit with state { id : $(this.state.id), title : $(this.state.title) } ");
	}

	render() {
		return (
			<form onSubmit= { this.handleSubmit }>
				<h2>Create a new Project</h2>
				<TextField hintText='Project Title' onChange= { this.handletitleChange } />
				<RaisedButton label='Submit' onChange= { this.handleSubmit } /> 
			</form>
		)
	}
}

export default ProjectForm;
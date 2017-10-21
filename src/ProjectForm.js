import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';

class ProjectForm extends Component {
	constructor(props) {
		super(props);
		this.state = { id : '', title : '', description : '', open : false, url : props.url};
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleOpen() {
		this.setState({open : true});
	}

	handleClose() {
		this.setState({open : false});
	}

	handleTitleChange(event, value) {
		this.setState({ title : value });
	}

	handleDescriptionChange(event, value) {
		this.setState({ description : value });
	}

	handleSubmit(e) {
		this.setState({ open : false });

		var self = this;
		axios.post(this.state.url, {title : this.state.title, description : this.state.description })
		.then(res => {
			console.log('received client side response');
			self.props.reloadData;
		})
		.catch(err => {
			console.error(err);
		});
	}


	render() {
		const actions = [
			<RaisedButton label='Cancel' onClick= { this.handleClose } />,
			<RaisedButton label='Submit' onClick= { this.handleSubmit } />,
		];

		return (
			<span>
				<IconButton onClick={ this.handleOpen }><i className="material-icons">add</i></IconButton>
				<Dialog
					title="Create a new Project"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.state.handleClose}>
						<form onSubmit= { this.handleSubmit }>
							<TextField hintText='Project Title' onChange= { this.handleTitleChange } />
							<TextField hintText='Project Description' onChange= { this.handleDescriptionChange } />
						</form>
				</Dialog>
			</span>
		)
	}
}

export default ProjectForm;
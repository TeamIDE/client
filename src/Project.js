import React, { Component } from 'react';
import style from './style';

class Project extends Component {

	render() {
		return (
			<div style= { style.project }>
				<h3>{ this.props.title } <strong>{ this.props.id }</strong></h3>
				<span>{ this.props.description } </span>
			</div>
		)
	}
}

export default Project;
import React, { Component } from 'react';
import Project from './Project';
import style from './style';

class ProjectList extends Component {
	render() {
		let projectNodes = this.props.data.map(project => {
			return (<Project title={ project.title } id={ project.id } description={ project.description } />);
		});

		return (
			<div style= { style.projectsList }>
				{ projectNodes }
			</div>
		);

	}
}

export default ProjectList;
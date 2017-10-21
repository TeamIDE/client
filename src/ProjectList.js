import React, { Component } from 'react';
import Project from './Project';


class ProjectList extends Component {

	render() {
		var self = this;
		let projectNodes = [];
		
		Object.keys(self.props.data).forEach(key => {
			let project = self.props.data[key];
			projectNodes.push(<Project title={ project.title } description={ project.description } key={ project.id } />);
		});

		return (
			<div>
				{ projectNodes }
			</div>
		)
	}
}

export default ProjectList;
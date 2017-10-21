import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

class ProjectListItem extends Component {

	render() {
		return (
			<Card className='project-list-item'>
				<CardHeader
					title={ this.props.title }
					subtitle={ this.props.description }
					actAsExpander={ true }
					showExpandableButton={ false } 
					avatar={<FontIcon className="material-icons project-list-item-icon">folder</FontIcon> } />
				<CardText expandable={ true }>
					This is some sample text for now. Please replace with related files!
				</CardText>
			</Card>
		)
	}
}

export default ProjectListItem;
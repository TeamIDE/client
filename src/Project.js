import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Project extends Component {

	render() {
		return (
			<Card>
				<CardHeader 
					title={ this.props.title }
					subtitle={ this.props.description }
					actAsExpander={ true }
					showExpandableButton={ true } />
				<CardText expandable={ true }>
					This is some sample text for now. Please replace with related files!
				</CardText>
			</Card>
		)
	}
}

export default Project;
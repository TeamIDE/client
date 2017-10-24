import React, { Component } from 'react';
import ProjectListItem from './ProjectListItem';

class ProjectList extends Component {

    render() {
        var self = this;
        let projectNodes = [];
        
        Object.keys(this.props.projects).forEach(key => {
            let project = self.props.projects[key];
            projectNodes.push(<ProjectListItem title={ project.title } description={ project.description } key={ project.id } />);
        });

        return (
            <div className='project-list'>
                { projectNodes }
            </div>
        )
    }
}

export default ProjectList;
import React, {Component} from 'react';
import ProjectContainer from './ProjectContainer';
import CodeEditor from 'components/CodeEditor';
require('./App.css')
class App extends Component {

	render() {
		return (
			<div className='app'>
				<ProjectContainer />
				<CodeEditor />
			</div>
		)
	}

}

export default App;
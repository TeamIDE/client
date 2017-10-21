import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import codeCss from './code-mirror-style.css';
import overrideCss from './code-mirror-override.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {code : ''};
		this.updateCode = this.updateCode.bind(this);
	}

	updateCode(newCode) {
		this.setState({code : newCode});
	}

	render() {
		let options = {lineNumbers: true, mode:'javascript'};
		return (
			<div className='code-wrapper'>
				<CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />	
			</div>
		)
	}

}

export default App;
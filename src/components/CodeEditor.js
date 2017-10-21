import React, {Component} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
require('styles/CodeEditor.css');
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');


class CodeEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {value : 'Hello world'};
	}

	render() {
		let options = {
			mode: 'javascript',
			theme: 'material',
			lineNumbers: true
		}
		return(
			<div className='code-editor'>
				<CodeMirror
					value={this.state.value} 
					options={options} 
					onBeforeChange={(editor, data, value) => {this.setState({value})}}
					onChange={(editor, metadata, value) => {console.log(value);}} />
			</div>
		)
	}
}

export default CodeEditor;
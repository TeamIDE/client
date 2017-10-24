import React, {Component} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import axios from 'axios';
require('styles/CodeEditor.css');
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python')


class CodeEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {value : '# Input your code here'};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		axios.post('http://localhost:5002/processor', this.state)
		.then(res => {
			alert(res['data']);
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {
		let options = {
			mode: 'python',
			theme: 'material',
			lineNumbers: true
		}
		return(
			<div>
				<div className='code-editor'>
					<CodeMirror
						value={this.state.value} 
						options={options} 
						onBeforeChange={(editor, data, value) => {this.setState({value})}}
						onChange={(editor, metadata, value) => {console.log(value);}} />
				<input type='submit' value='Submit' onClick={this.handleSubmit} />
				</div>
			</div>
		)
	}
}

export default CodeEditor;
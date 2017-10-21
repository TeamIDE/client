import React from 'react';
import ReactDOM from 'react-dom';
import {red500, darkBlack} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import ProjectView from './ProjectView';
import registerServiceWorker from './registerServiceWorker';

const customTheme = {
	fontFamily: 'Roboto, sans-serif',
	palette : {
		primary1Color: red500,
		textColor: darkBlack
	}
}


ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
		<ProjectView url='http://localhost:5001/' />
		<App />
	</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

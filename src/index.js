import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProjectView from './ProjectView';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MuiThemeProvider>
		<ProjectView />
	</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

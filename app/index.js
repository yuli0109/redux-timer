var React = require('react');
var ReactDOM = require('react-dom');
import MyRouter from './config/router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <MyRouter />
  </MuiThemeProvider>
  , document.getElementById('app')
)

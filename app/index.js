var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./components/form');
var Navbar = require('./containers/navBar');

import {Router, Route, Link, browserHistory} from 'react-router'

class Helloworld extends React.Component {
  render () {
    return <div> Hello World </div>
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Navbar}>
      <Route path='/form' component={Form}/>
      <Route path='/hello' component={Helloworld}/>
    </Route>
  </Router>
  , document.getElementById('app')
)

import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import Form from '../components/form';
import Navbar from '../containers/navBar';
import Helloworld from '../components/hello';

class MyRouter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return <Router history={browserHistory}>
      <Route path='/' component={Navbar}>
        <Route path='/form' component={Form}/>
        <Route path='/hello' component={Helloworld}/>
      </Route>
    </Router>
  }
}

module.exports = MyRouter

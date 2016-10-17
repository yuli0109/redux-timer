import React from 'react'
import {Link} from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return  <div>
      <ul role="nav">
          <li><Link to="/form">Timer</Link></li>
          <li><Link to="/hello">Hello~</Link></li>
      </ul>
      {this.props.children}
    </div>
  }
}

module.exports = Navbar

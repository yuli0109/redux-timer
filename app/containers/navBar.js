import React from 'react';
import {Link} from 'react-router';

import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return  <div>
        <Tabs>
          <Tab
            label="Timer"
            icon={<FontIcon className="material-icons">alarm</FontIcon>}
            containerElement={<Link to="/form"/>}
          />
          <Tab
            label="Hello~~~"
            icon={<FontIcon className="material-icons">accessibility</FontIcon>}
            containerElement={<Link to="/hello"/>}
          />
        </Tabs>
      {this.props.children}
    </div>
  }
}

module.exports = Navbar

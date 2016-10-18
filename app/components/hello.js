import React from 'react';
import Student from './student';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var studentList = [{id: 1, name: 'std1'}, {id: 2, name: 'std2'}, {id: 3, name: 'std3'}];

class Helloworld extends React.Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.state = {
      studentList: []
    }
  }
  handleNext(){
    this.setState({
      studentList: this.state.studentList.concat([studentList.shift()])
    })
  }
  render () {
    return <div>
      <button onClick={this.handleNext}>Add</button>
      <ReactCSSTransitionGroup
          transitionName={{enter: "animated", enterActive: "rotateIn", leave: "animated",leaveActive: "tada"}}
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={300}>
      {
        this.state.studentList.map((std) => (
          <Student key={std.id} name={std.name}/>
        ))
      }
      </ReactCSSTransitionGroup>
    </div>
  }
}

module.exports = Helloworld;

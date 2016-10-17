import React from 'react';
import Student from './student';

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
    return <div> Hello World
      <Student name={'Puppy'}/>
      {
        this.state.studentList.reverse().map((std) => (
          <Student key={std.id} name={std.name}/>
        ))
      }
      <button onClick={this.handleNext}>Add</button>
    </div>
  }
}

module.exports = Helloworld;

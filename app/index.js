var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./components/form');

class Helloworld extends React.Component {
  render () {
    return <div> Hello World </div>
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
)

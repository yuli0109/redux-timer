var React = require('react');
var ReactDOM = require('react-dom');

class Helloworld extends React.Component {
  render () {
    return <div> Hello World </div>
  }
}

ReactDOM.render(
  <Helloworld />,
  document.getElementById('app')
)

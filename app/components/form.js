var React = require('react');

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSecondsChange = this.handleSecondsChange.bind(this)
    this.handleMinutesChange = this.handleMinutesChange.bind(this)
    this.state = {
      minutes: "",
      seconds: "",
      toCountDown: 0
    }
  }
  handleSubmit(event) {
    this.setState({
      toCountDown: Number.parseInt(this.state.seconds) + 60*Number.parseInt(this.state.seconds)
    })
  }
  handleSecondsChange(event) {
    this.setState({
      seconds: event.target.value
    })
  }
  handleMinutesChange(event) {
    this.setState({
      minutes: event.target.value
    })
  }
  render (){
    return <form>
      <input type="text" name="minute" value={this.state.minutes} placeholder="Minute"
        onChange={this.handleMinutesChange} />
      <input type="text" name="second" value={this.state.seconds} placeholder="Second"
        onChange={this.handleSecondsChange} />
      <a className="btn btn-primary" onClick={this.handleSubmit}>Submit</a>
      <p>Minute: {this.state.minutes} and second: {this.state.seconds}</p>
      <p>Total seconds for count down: {this.state.toCountDown}</p>
    </form>
  }
}

module.exports = Timer;

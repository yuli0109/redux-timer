import React from 'react';
import AnalogDisplay from './clock';


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSecondsChange = this.handleSecondsChange.bind(this)
    this.handleMinutesChange = this.handleMinutesChange.bind(this)
    this.clearMinute = this.clearMinute.bind(this)
    this.clearSecond = this.clearSecond.bind(this)
    this.state = {
      minutes: "0",
      seconds: "0",
      toCountDown: 0,
      bam: 'hidden'
    }
  }
  startCount() {
    var _this = this;
    var clearCount = setInterval(function(){
      _this.setState({
        toCountDown: --_this.state.toCountDown
      })
      if (_this.state.toCountDown <= 0) {
        clearInterval(clearCount)
        _this.setState({
          bam: 'show'
        })
      }
    }, 1000)
  }
  handleSubmit(event) {
    this.setState({
      toCountDown: Number.parseInt(this.state.seconds) + 60*Number.parseInt(this.state.minutes)
    })
    this.startCount()
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
  clearMinute(event) {
    this.setState({
      minutes: ""
    })
  }
  clearSecond(event) {
    this.setState({
      seconds: ""
    })
  }
  render (){
    return <div>
      <form>
        <input type="text" name="minute" value={this.state.minutes} placeholder="Minute"
          onChange={this.handleMinutesChange} onFocus={this.clearMinute}/>
        <input type="text" name="second" value={this.state.seconds} placeholder="Second"
          onChange={this.handleSecondsChange} onFocus={this.clearSecond}/>
        <a className="btn btn-primary" onClick={this.handleSubmit}>Submit</a>
        <p>Minute: {this.state.minutes} and second: {this.state.seconds}</p>
        <p>Total seconds for count down: {this.state.toCountDown}</p>
      </form>
      <AnalogDisplay countRemain={this.state.toCountDown}/>
      <h1 className={this.state.bam}>BAM!</h1>
    </div>
  }
}

module.exports = Timer;

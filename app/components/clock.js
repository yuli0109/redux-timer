import React from 'react';

const AnalogDisplay = function AnalogDisplay(props){
  let countRemain = props.countRemain
  let seconds = countRemain % 60;
  let minutes = Math.floor(countRemain / 60);
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
  }
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border:'1px solid red',
    width: '40%',
    height: 1,
    transform: `rotate(${(seconds/60)*360 - 90}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  }
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: `rotate(${(minutes/60)*360 - 90}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  }
  return <div>
          <div style={dialStyle}>
            <div style={secondHandStyle}/>
            <div style={minuteHandStyle}/>
          </div>
        </div>
}

module.exports = AnalogDisplay

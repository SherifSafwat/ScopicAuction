import React, {Component} from 'react';

export default class Timer extends Component{

    constructor(props){
        super(props);
        this.props = props;
        this.state={seconds:this.props.seconds};

        this.state = { time: {}, seconds: 0 };
        this.timer = 0;

        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);

    }

    secondsToTime(secs){
      let days = Math.floor(secs / (60 * 60 * 24));

      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "d": days,
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
      
    startTimer() {
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds === 0) { 
        clearInterval(this.timer);
      }
    }

    inputchangehandler = (event) => {
      this.setState = ({
        id: event.target.value
      })
    }

  componentDidMount(){
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  } //componentDidMount

  render(){
      return (

        <div > {this.state.seconds}
        <button onClick={this.startTimer}>Start</button>
        d: {this.state.time.d} h: {this.state.time.h} m: {this.state.time.m} s: {this.state.time.s}
         </div>
    
      ); //return
 
  } //render

}




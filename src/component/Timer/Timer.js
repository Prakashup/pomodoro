import React from 'react';
import './Timer.css'
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
    }

    componentWillUpdate(nextProps) {
        if(this.props.startTimer !== nextProps.startTimer){
            if(nextProps.startTimer){
                this.startTimer(nextProps.time.duration, nextProps.time.shortBreak)
            }

        }

    }


    startTimer(duration, breakTime){
        let interval;
        let totalTime = duration + breakTime;
        const display = document.querySelector('#timer');
        const workLabel = document.querySelector('.work');
        const breakLabel = document.querySelector('.break');
        let timer = totalTime*60, minutes, seconds;
        interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if(timer > duration) {
                display.parentNode.setAttribute(
                    "style", "color: #d8a12b; background-color: #fff; border-color:#d8a12b;");
                workLabel.setAttribute("style", "color:orange; font-weight:bold;");
            }

            if (--timer < 0) {
                workLabel.setAttribute("style", "color:#999; font-weight:normal;");
                breakLabel.setAttribute("style", "color:#999; font-weight:normal;");
                display.parentNode.setAttribute(
                    "style", "color: #444; background-color: #fff; border-color:#888;");
                clearInterval(interval);
            }

            if (timer == breakTime) {
                workLabel.setAttribute("style", "color:#999; font-weight:normal;")
                breakLabel.setAttribute("style", "color:green; font-weight:bold;")
                display.parentNode.setAttribute(
                    "style", "color: green; background-color: beige; border-color:green;");
            }
        }, 1000);
    }

    render() {
        return (<div className="timer text-center">
            <div className="timer-clock">
                <span id="timer">00:00</span>
            </div>
            <div className="timer-label work">Focus time: <span>{ this.props.time.duration } minutes</span></div>
            <div className="timer-label break">Break time: <span>{ this.props.time.shortBreak } minutes</span></div>
        </div>);
    }
}

export default Timer;
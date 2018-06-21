import React from 'react';
import './Timer.css'
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: null
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if(this.props.tasks !== nextProps.tasks && this.props.tasks.length === nextProps.tasks.length){
            const task = nextProps.tasks.find((task) => task.isPlaying === true);
            clearInterval(nextState.interval);
            this.startTimer(parseInt(task.duration), parseInt(task.shortBreak));
        }

    }

    startTimer(duration, breakTime){
        let totalTime = duration + breakTime;
        const display = document.querySelector('#timer');
        let timer = totalTime*60, minutes, seconds;
        var interval1 = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if(timer > duration) {
                display.parentNode.setAttribute(
                    "style", "color: #d8a12b; background-color: #fff; border-color:#d8a12b;");
            }

            if (--timer < 0) {
                display.parentNode.setAttribute(
                    "style", "color: #444; background-color: #fff; border-color:#888;");
                clearInterval(interval1);
            }

        }, 1000);

        this.setState({interval:interval1});
    }

    render() {
        return (<div className="timer text-center">
            <div className="timer-clock">
                <span id="timer">00:00</span>
            </div>
        </div>);
    }
}

export default Timer;
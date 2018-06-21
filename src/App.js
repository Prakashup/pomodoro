import React, { Component } from 'react';
import './App.css';
import TimerContainer from './container/TimerContainer';
import TaskModalContainer from './container/TaskModalContainer';
import TaskListContainer from './container/TaskListContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="pomoDoro">
          <TimerContainer/>
          <div className="text-center"><br/>
              <button className="btn btn-primary" onClick={this.props.openModal}>
                  <i className="fa fa-tasks"></i>
                  &nbsp; Add Task
              </button>
          </div>
          <TaskModalContainer/>
          <TaskListContainer/>
      </div>
    );
  }
}

export default App;

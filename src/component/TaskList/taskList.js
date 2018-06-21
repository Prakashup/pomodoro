import React from 'react';
import './TaskList.css'
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.updateTimer = this.updateTimer.bind(this);
    }

    updateTimer (task) {
        this.props.playTask(task);
    }

    deleteTask (task) {
        this.props.deleteTask(task);
    }
    render () {
        const taskItem = this.props.tasks.map(task => (
            <li className={task.isPlaying ? "active":''} key={task.id}>
                <div className="task-name">{task.title} {task.isPlaying}</div>
                <div className="task-status">
                    <span>Focus time: {task.duration} minutes</span><br/>
                    <span>Break time: {task.shortBreak} minutes</span>
                </div>
                <div className="task-actions">
                    <button className="fa fa-play" onClick= { () => { this.updateTimer(task) } }></button>
                    <button className="fa fa-trash" onClick= { () => { this.deleteTask(task) } }></button>
                </div>
            </li>
        ));
        return (<div className='taskList'>
                {this.props.tasks.length > 0 ?
                <ul className="task">
                    {taskItem}
                </ul>: ''}
            </div>
        )
    }
}

export default TaskList;
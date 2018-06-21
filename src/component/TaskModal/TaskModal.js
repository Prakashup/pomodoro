import React from 'react';
import './TaskModal.css';

class TaskModal extends React.Component {

    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(e) {
        e.preventDefault();
        let taskId = Math.floor(Math.random() * 1000) - 1;
        const task = {
            id: taskId,
            title: this.refs.title.value,
            duration: this.refs.duration.value,
            shortBreak: this.refs.shortBreak.value
        };
        this.refs.form.reset();
        this.props.saveTask(task);
        this.props.closeModal();
    }

    render () {
        return (<div>
            {
                this.props.isModalOpen ?
                <div className="taskModal">
                    <form onSubmit={this.formSubmit} ref='form'>
                        <h4 className="text-center">Task</h4>
                        <div className="form-block">
                            <label>Task Title:</label>
                            <input type="text" name="title" ref='title' required placeholder="Add task title"/>
                        </div>
                        <div className="form-block">
                            <label>Duration:</label>
                            <input type="number" name="duration" ref='duration' required/>
                            <span className="helper-text">( Duration in minutes )</span>
                        </div>
                        <div className="form-block">
                            <label>Short Break:</label>
                            <input type="number" name="shortBreak" required ref='shortBreak'/>
                            <span className="helper-text">( Duration in minutes )</span>
                        </div>
                        <div className="form-action">
                            <button
                                className="btn btn-primary" type="submit">
                                Save</button>
                            <button onClick={this.props.closeModal}
                                    className="btn btn-secondary" type="submit">
                                Cancel</button>
                        </div>
                    </form>
                </div>
                :
                ''
            }

            </div>
        )
    }
}

export default TaskModal;
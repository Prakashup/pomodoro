import { connect } from 'react-redux';
import TaskList from '../component/TaskList/TaskList';
import { deleteTask, playTask } from '../action/taskAction';


const mapStateToProps = (state) => ({
    tasks: state.taskList.tasks
});

const mapDispatchToProps = {
    deleteTask,
    playTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
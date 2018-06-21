import { connect } from 'react-redux';
import Timer from '../component/Timer/Timer';
import { deleteTask } from '../action/taskAction';

const mapStateToProps = (state) => ({
    tasks: state.taskList.tasks
});

const mapDispatchToProps = {
    deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
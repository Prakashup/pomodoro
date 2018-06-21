import { connect } from 'react-redux';
import { closeModal } from '../action/modalAction';
import { saveTask } from '../action/taskAction';
import TaskModal from '../component/TaskModal/TaskModal';

const mapStateToProps = (state) => ({
    isModalOpen: state.modal.isModalOpen
});

const mapDispatchToProps = {
    closeModal,
    saveTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal)
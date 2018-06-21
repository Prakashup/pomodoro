import { connect } from 'react-redux'
import { openModal } from '../action/modalAction'
import App from '../App'

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
    openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
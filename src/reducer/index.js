import { combineReducers } from 'redux'
import modalReducer from './modalReducer'
import taskReducer from './taskReducer'

export default combineReducers({
    modal: modalReducer,
    taskList: taskReducer
})
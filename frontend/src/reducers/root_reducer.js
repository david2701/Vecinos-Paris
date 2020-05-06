import { combineReducers } from 'redux';
import tasks from './task_reducer'
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  tasks,
  ui
});

export default RootReducer;
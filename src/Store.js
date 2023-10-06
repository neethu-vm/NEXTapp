
import { createStore, combineReducers } from 'redux';
import studentReducer from './Components/StudentReducer';
import teacherReducer from "./Components/TeacherReducer";

// Combine multiple reducers if you have more than one (e.g., teacherReducer)
const rootReducer = combineReducers({
  studentReducer,
  teacherReducer
  // Add other reducers here if needed
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;

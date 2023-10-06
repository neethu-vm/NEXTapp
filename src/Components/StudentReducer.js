// src/studentReducer.js
import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from './StudentActions';

const initialState = {
  students: [], // Initialize with an empty array
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    case EDIT_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? { ...student, ...action.payload.data } : student
        ),
      };
    default:
      return state;
  }
};

export default studentReducer;

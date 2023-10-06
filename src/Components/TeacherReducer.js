// src/studentReducer.js
import { ADD_TEACHER, DELETE_TEACHER, EDIT_TEACHER } from './TeacherActions';

const initialState = {
  teachers: [], // Initialize with an empty array
};

const TeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEACHER:
      return {
        ...state,
        teachers: [...state.teachers, action.payload],
      };
    case DELETE_TEACHER:
      return {
        ...state,
        teachers: state.teachers.filter((teacher) => teacher.id !== action.payload),
      };
    case EDIT_TEACHER:
      return {
        ...state,
        teachers: state.teachers.map((teacher) =>
          teacher.id === action.payload.id ? { ...teacher, ...action.payload.data } : teacher
        ),
      };
    default:
      return state;
  }
};

export default TeacherReducer;

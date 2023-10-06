
export const ADD_TEACHER = 'ADD_TEACHER';
export const DELETE_TEACHER = 'DELETE_TEACHER';
export const EDIT_TEACHER = 'EDIT_TEACHER';

// Action creators
export const addTeacher = (teacherData) => ({
  type: ADD_TEACHER,
  payload: teacherData,
});

export const deleteTeacher = (teacherId) => ({
  type: DELETE_TEACHER,
  payload: teacherId,
});

export const editTeacher = (teacherId, updatedData) => ({
  type: EDIT_TEACHER,
  payload: { id: teacherId, data: updatedData },
});

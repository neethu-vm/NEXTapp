
export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';

// Action creators
export const addStudent = (studentData) => ({
  type: ADD_STUDENT,
  payload: studentData,
});

export const deleteStudent = (studentId) => ({
  type: DELETE_STUDENT,
  payload: studentId,
});

export const editStudent = (studentId, updatedData) => ({
  type: EDIT_STUDENT,
  payload: { id: studentId, data: updatedData },
});

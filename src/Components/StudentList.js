
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, deleteStudent, editStudent } from './StudentActions';
import { useAlert } from "react-alert";
function StudentList() {
    const alert = useAlert()
  const students = useSelector((state) => state.studentReducer.students);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents,setFilteredStudents]=useState([])
  const [editingStudentId, setEditingStudentId] = useState(null); 
  const [newStudentName, setNewStudentName] = useState('');

  const newStudentsData = [
    {
      id: 1,
      name: "Neethu",
      
    },
    {
      id: 2,
      name: "John",
      
    },
   
  ];
  

  useEffect(() => {
    // Initialize filteredStudents with all students when the component mounts
    setFilteredStudents(students);
  }, [students]);
  const handleAddStudent = () => {
    // Dispatch the addStudent action with the new student's name
    if (newStudentName.trim() !== '') {
      dispatch(addStudent({ id: Date.now(), name: newStudentName }));
      setNewStudentName(''); // Clear the input field
    }
    setShowModal(false); // Close the modal
    alert.success("student added")
  };

  const handleDeleteStudent = (studentId) => {

    dispatch(deleteStudent(studentId));
    alert.success("deleted")
  };

  const handleEditStudent = (studentId) => {
    // Set the student ID to indicate that it's being edited
    setEditingStudentId(studentId);
  };

  const handleSaveEdit = (studentId) => {
    // Dispatch the editStudent action with the updated name
    if (newStudentName.trim() !== '') {
      dispatch(editStudent(studentId, { name: newStudentName }));
      setEditingStudentId(null); // Clear the editing state
    }
    alert.success("student edited")
  };

  const handleCancelEdit = () => {
    // Clear the editing state
    setEditingStudentId(null);
    alert.success("student cancelled")
  };

  const handleSearch = () => {
    // Implement search logic to filter students based on searchTerm
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Set the filtered students in your component's state
    setFilteredStudents(filteredStudents);
  };

  return (
    <div style={{  background: "#f8f9fa"}} >
      <h2>Student List</h2>
      <div style={{display:"flex"}}>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     &nbsp;&nbsp; <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
      {filteredStudents.map((student) => (
          <li key={student.id} style={{display:"flex" , width:"100%"}}>
            {editingStudentId === student.id ? ( // Check if this student is being edited
              <>
                <input
                  type="text"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(student.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <b>{student.name.toUpperCase()}</b> 
                &nbsp;&nbsp;  <button style={{background:"green"}}  onClick={() => handleEditStudent(student.id)}>Edit</button> &nbsp;&nbsp;
                <button  className="delete-button" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => setShowModal(true)}>Add Student</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Student</h3>
            <div style={{display:"flex"}}>
            <input
              type="text"
              placeholder="Student Name"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
            />
         &nbsp;&nbsp;   <button style={{background:"green"}}  onClick={handleAddStudent}>Save</button>&nbsp;&nbsp;
            <button style={{background:"red"}} onClick={() => setShowModal(false)}>Cancel</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;

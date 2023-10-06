
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTeacher, deleteTeacher, editTeacher } from './TeacherActions';
import { Modal,Button } from "react-bootstrap";
import { useAlert } from "react-alert";
function StudentList() {
  const teachers = useSelector((state) => state.teacherReducer.teachers);
  const dispatch = useDispatch();
  const alert = useAlert()
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
    setFilteredStudents(teachers);
  }, [teachers]);
  
  const handleAddStudent = () => {
    // Dispatch the addStudent action with the new student's name
    if (newStudentName.trim() !== '') {
      dispatch(addTeacher({ id: Date.now(), name: newStudentName }));
      setNewStudentName(''); // Clear the input field
    }
    setShowModal(false); // Close the modal
    alert.success("teacher added")
  };

  const handleDeleteStudent = (studentId) => {

    dispatch(deleteTeacher(studentId));
    alert.success("teacher deleted")
  };

  const handleEditStudent = (studentId) => {
    // Set the student ID to indicate that it's being edited
    setEditingStudentId(studentId);
  };

  const handleSaveEdit = (studentId) => {
    // Dispatch the editStudent action with the updated name
    if (newStudentName.trim() !== '') {
      dispatch(editTeacher(studentId, { name: newStudentName }));
      setEditingStudentId(null); // Clear the editing state
    }
    alert.success("teacher edited")
  };

  const handleCancelEdit = () => {
    // Clear the editing state
    setEditingStudentId(null);
    alert.success("cancelled")
  };

  const handleSearch = () => {
    // Implement search logic to filter students based on searchTerm
    const filteredStudents = teachers.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Set the filtered students in your component's state
    setFilteredStudents(filteredStudents);
  };

  return (
    <div style={{  background: "#f8f9fa"}} >
      <h2>Teachers List</h2>
      <div style={{display:"flex"}}>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     &nbsp;&nbsp; <button onClick={handleSearch}>Search</button></div>
      <ul> 
        <div >
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
                &nbsp;&nbsp; <button style={{background:"green"}} onClick={() => handleEditStudent(student.id)}>Edit</button> &nbsp;&nbsp;
                <button  className="delete-button"  onClick={() => handleDeleteStudent(student.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
        </div>
      </ul>
      <button onClick={() => setShowModal(true)}>Add Teacher</button>
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
           &nbsp;&nbsp; <button style={{background:"green"}}  onClick={handleAddStudent}>Save</button>&nbsp;&nbsp;
            <button  style={{background:"red"}}onClick={() => setShowModal(false)}>Cancel</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;

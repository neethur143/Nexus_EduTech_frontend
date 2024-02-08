import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [editableStudent, setEditableStudent] = useState(null);
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    standard: '', // Change 'class' to 'standard'
    section: '', // Add section to formData
    division: '',
  });

  useEffect(() => {
    // Fetch student data when the component mounts
    fetchStudents();
  }, []); // Empty dependency array to ensure this effect runs only once

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5011/api/Student/GetAll');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleEditStudent = (studentId) => {
    const studentToEdit = students.find(student => student.studentId === studentId);
    setEditableStudent(studentToEdit);
    setFormData({
      ...formData,
      studentId: studentToEdit.studentId,
      name: studentToEdit.name,
      standard: studentToEdit.standard,
      section: studentToEdit.section,
      division: studentToEdit.division,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put('http://localhost:5011/api/Student/UpdateStudent', formData);
      const updatedStudent = response.data;
      const updatedStudents = students.map(student =>
        student.studentId === updatedStudent.studentId ? updatedStudent : student
      );
      setStudents(updatedStudents);
      setEditableStudent(null);
      setFormData({ studentId: '', name: '', standard: '', section: '', division: '' });
      alert('Student details updated successfully!');
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student details!');
    }
  };

  const handleDeleteStudent = async (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`http://localhost:5011/api/Student/DeleteStudent/${studentId}`);
        const updatedStudents = students.filter(student => student.studentId !== studentId);
        setStudents(updatedStudents);
        alert('Student deleted successfully!');
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Failed to delete student!');
      }
    }
  };

  return (
    <div>
      <h2>Student Details</h2>
      <table className="table table-bordered table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Registration Number</th>
            <th scope="col">Name</th>
            <th scope="col">Standard</th>
            <th scope="col">Section</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.studentId}>
              <th scope="row">{index + 1}</th>
              <td>{student.registrationNumber}</td>
              <td>{editableStudent && editableStudent.studentId === student.studentId ?
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                /> : student.name}
              </td>
              <td>{editableStudent && editableStudent.studentId === student.studentId ?
                <input
                  type="text"
                  name="standard"
                  value={formData.standard}
                  onChange={handleChange}
                /> : student.standard}
              </td>
              <td>{editableStudent && editableStudent.studentId === student.studentId ?
                <input
                  type="text"
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                /> : student.section}
              </td>
              <td>
                {editableStudent && editableStudent.studentId === student.studentId ? (
                  <button
                    type="button"
                    className="btn btn-success me-2"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-warning me-2"
                    onClick={() => handleEditStudent(student.studentId)}
                  >
                    Edit
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteStudent(student.studentId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;

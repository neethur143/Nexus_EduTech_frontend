import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [editableStudent, setEditableStudent] = useState(null);
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    registrationNumber: '',
    standard: '',
    section: '',
    dob: '',
    address: '',
    email: ''
  });
  const classes = [
    { classId: 101, standard: '1', section: 'A' },
    { classId: 102, standard: '1', section: 'B' },
    { classId: 103, standard: '1', section: 'C' },
    { classId: 104, standard: '1', section: 'D' },
    { classId: 201, standard: '2', section: 'A' },
    { classId: 202, standard: '2', section: 'B' },
    { classId: 203, standard: '2', section: 'C' },
    { classId: 204, standard: '2', section: 'D' },
    { classId: 301, standard: '3', section: 'A' },
    { classId: 302, standard: '3', section: 'B' },
    { classId: 303, standard: '3', section: 'C' },
    { classId: 304, standard: '3', section: 'D' },
    { classId: 401, standard: '4', section: 'A' },
    { classId: 402, standard: '4', section: 'B' },
    { classId: 403, standard: '4', section: 'C' },
    { classId: 404, standard: '4', section: 'D' },
  ];

  useEffect(() => {
    fetchStudents();
  }, []);

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
      registrationNumber: studentToEdit.registrationNumber,
      standard: studentToEdit.standard,
      section: studentToEdit.section,
      dob: studentToEdit.dob,
      address: studentToEdit.address,
      email: studentToEdit.email
    });
    // Open modal here
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { standard, section, ...restFormData } = formData;
      const selectedClass = classes.find(c => c.standard === standard && c.section === section);
      if (!selectedClass) {
        alert('Please select a valid standard and section.');
        return;
      }
      const { classId } = selectedClass;

      // Format date to "yyyy-MM-dd" before sending it to the backend
      const formattedDate = formData.dob.split('T')[0];

      const formDataWithClassId = {
        ...restFormData,
        classId,
        dob: formattedDate,
        registrationNumber: restFormData.registrationNumber // Include registration number
      };

      const response = await axios.put('http://localhost:5011/api/Student/UpdateStudent', formDataWithClassId);
      const updatedStudent = response.data;
      const updatedStudents = students.map(student =>
        student.studentId === updatedStudent.studentId ? updatedStudent : student
      );
      setStudents(updatedStudents);
      setEditableStudent(null);
      setFormData({
        studentId: '',
        name: '',
        registrationNumber: '',
        standard: '',
        section: '',
        dob: '',
        address: '',
        email: ''
      });
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
        
            <th scope="col">Date of Birth</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.studentId}>
              <th scope="row">{index + 1}</th>
              <td>
                {editableStudent && editableStudent.studentId === student.studentId ?
                  <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                  /> : student.registrationNumber}
              </td>
              <td>
                {editableStudent && editableStudent.studentId === student.studentId ?
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  /> : student.name}
              </td>
              <td>
                {editableStudent && editableStudent.studentId === student.studentId ?
                  <select
                    name="standard"
                    value={formData.standard}
                    onChange={handleChange}
                  >
                    <option value="">Select Standard</option>
                    {Array.from(new Set(classes.map(c => c.standard))).map(standard => (
                      <option key={standard} value={standard}>{standard}</option>
                    ))}
                  </select> : student.standard}
              </td>
              <td>
                {editableStudent && editableStudent.studentId === student.studentId ?
                  <select
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                  >
                    <option value="">Select Section</option>
                    {classes.filter(c => c.standard === formData.standard).map(c => (
                      <option key={c.section} value={c.section}>{c.section}</option>
                    ))}
                  </select> : student.section}
              </td>
              <td>
                {editableStudent && editableStudent.studentId === student.studentId ?
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  /> : student.dob}
              </td>
              <td>
                {editableStudent && editableStudent.studentId === student.studentId ?
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  /> : student.address}
              </td>
              <td>
                {editableStudent && editableStudent.studentId === student.studentId ?
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  /> : student.email}
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

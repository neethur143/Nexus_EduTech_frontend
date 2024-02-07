import React, { useState } from 'react';

const StudentDetails = () => {
  const [students, setStudents] = useState([
    { studentId: 1, name: 'John Doe', class: 'Class A', division: 'A' },
    { studentId: 2, name: 'Jane Smith', class: 'Class B', division: 'B' },
    { studentId: 3, name: 'Michael Johnson', class: 'Class C', division: 'A' },
    { studentId: 4, name: 'Emily Davis', class: 'Class A', division: 'B' },
  ]);
  const [editableStudent, setEditableStudent] = useState(null);
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    class: '',
    division: '',
  });

  const handleEditStudent = (studentId) => {
    const studentToEdit = students.find(student => student.studentId === studentId);
    setEditableStudent(studentToEdit);
    setFormData({
      studentId: studentToEdit.studentId,
      name: studentToEdit.name,
      class: studentToEdit.class,
      division: studentToEdit.division,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedStudents = students.map(student =>
      student.studentId === formData.studentId ? formData : student
    );
    setStudents(updatedStudents);
    setEditableStudent(null);
    setFormData({ studentId: '', name: '', class: '', division: '' });
    alert('Student details updated successfully!');
  };

  const handleDeleteStudent = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      const updatedStudents = students.filter(student => student.studentId !== studentId);
      setStudents(updatedStudents);
      alert('Student deleted successfully!');
    }
  };

  return (
    <div>
      <h2>Student Details</h2>
      <table className="table table-bordered table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student ID</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Division</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.studentId}>
              <th scope="row">{index + 1}</th>
              <td>{student.studentId}</td>
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
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                  /> : student.class}
              </td>
              <td>{editableStudent && editableStudent.studentId === student.studentId ?
                  <input
                    type="text"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                  /> : student.division}
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

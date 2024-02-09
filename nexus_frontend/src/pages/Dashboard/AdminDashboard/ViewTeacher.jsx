import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const dummyTable = [
    { standard: '1', section: 'A', classId: '101' },
    { standard: '1', section: 'B', classId: '102' },
    // ... other standards and sections
  ];

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5011/api/Teacher/GetAll');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
        alert('An error occurred while fetching teachers');
      }
    };

    fetchTeachers();
  }, []);

  const handleDelete = async (teacherId) => {
    try {
      const response = await axios.delete(`http://localhost:5011/api/Teacher/Delete/${teacherId}`);
      if (response.status ===  200) {
        setTeachers(teachers.filter(teacher => teacher.teacherId !== teacherId));
        alert('Teacher deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting teacher:', error);
      alert('An error occurred while deleting the teacher');
    }
  };

  return (
    <div className="container">
      <h2>View Teachers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Standard</th>
            <th>Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {teachers.map((teacher, index) => {
            // Convert the classId from the backend to a string to match the dummyTable format
            const classIdString = teacher.classId.toString();
            const { standard, section } = dummyTable.find(item => item.classId === classIdString) || {};
            const formattedDOB = teacher.dob ? new Date(teacher.dob).toLocaleDateString() : '';
            return (
              <tr key={index}>
                <td>{index +  1}</td>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.contactNumber}</td>
                <td>{formattedDOB}</td>
                <td>{teacher.address}</td>
                <td>{standard}</td>
                <td>{section}</td>
                <td>
                  <button type="button"
                          className="btn btn-warning me-2"
                          onClick={() => handleEdit(teacher)}>Edit</button>
                  <button type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(teacher.teacherId)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTeacher;

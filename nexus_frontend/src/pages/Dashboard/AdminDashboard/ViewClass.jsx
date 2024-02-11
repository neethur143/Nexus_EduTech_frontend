import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewClass = () => {
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState('');

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
    { classId: 404, standard: '4', section: 'D' }
  ];

  const fetchStudentsByStandardAndSection = async (standard, section) => {
    try {
      const response = await axios.get(`http://localhost:5011/api/Student/GetByStdSec/${standard}/${section}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  const fetchTeachersByClassId = async (classId) => {
    try {
      const response = await axios.get(`http://localhost:5011/api/Teacher/GetAllTeacherByClass/${classId}`);
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teacher data:', error);
    }
  };

  const handleSelectStandard = (event) => {
    setSelectedStandard(event.target.value);
    setError('');
  };

  const handleSelectSection = (event) => {
    setSelectedSection(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedStandard || !selectedSection) {
      setError('Please select both standard and section.');
      return;
    }
    const selectedClass = classes.find(c => c.standard === selectedStandard && c.section === selectedSection);
    if (selectedClass) {
      fetchStudentsByStandardAndSection(selectedStandard, selectedSection);
      fetchTeachersByClassId(selectedClass.classId);
    }
  };

  return (
    <div className="container mt-5">
      <h2>View Class</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label className="form-label">Select Standard:</label>
          <select
            className={`form-select ${error && 'is-invalid'}`}
            value={selectedStandard}
            onChange={handleSelectStandard}
            required
          >
            <option value="">Select Standard</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Select Section:</label>
          <select
            className={`form-select ${error && 'is-invalid'}`}
            value={selectedSection}
            onChange={handleSelectSection}
            required
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="row mt-4">
        <div className="col">
          <h3>Students</h3>
          <ul className="list-group">
            {students.map(student => (
              <li key={student.studentId} className="list-group-item">{student.name}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3>Teachers</h3>
          <ul className="list-group">
            {teachers.map(teacher => (
              <li key={teacher.teacherId} className="list-group-item">{teacher.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewClass;

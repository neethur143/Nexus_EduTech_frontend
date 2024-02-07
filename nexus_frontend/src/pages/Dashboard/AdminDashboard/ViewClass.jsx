import React, { useState } from 'react';

const ViewClass = () => {
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  // Dummy data for demonstration
  const studentData = [
    { id: 1, name: 'Student 1', standard: '1', division: 'A' },
    { id: 2, name: 'Student 2', standard: '1', division: 'A' },
    { id: 3, name: 'Student 3', standard: '2', division: 'B' },
    { id: 4, name: 'Student 4', standard: '2', division: 'B' },
    { id: 5, name: 'Student 5', standard: '3', division: 'C' },
  ];

  const teacherData = [
    { id: 1, name: 'Teacher 1', subjects: ['Maths', 'Science'], standards: ['1', '2'], divisions: ['A', 'B'] },
    { id: 2, name: 'Teacher 2', subjects: ['English'], standards: ['1', '3'], divisions: ['A', 'C'] },
    { id: 3, name: 'Teacher 3', subjects: ['History', 'Geography'], standards: ['2'], divisions: ['B'] },
  ];

  const handleSelectStandard = (event) => {
    setSelectedStandard(event.target.value);
  };

  const handleSelectDivision = (event) => {
    setSelectedDivision(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Filter students and teachers based on selected standard and division
    const filteredStudents = studentData.filter(student => student.standard === selectedStandard && student.division === selectedDivision);
    const filteredTeachers = teacherData.filter(teacher => teacher.standards.includes(selectedStandard) && teacher.divisions.includes(selectedDivision));
    setStudents(filteredStudents);
    setTeachers(filteredTeachers);
  };

  return (
    <div className="container mt-5">
      <h2>View Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Select Standard:</label>
          <select
            className="form-select"
            value={selectedStandard}
            onChange={handleSelectStandard}
          >
            <option value="">Select Standard</option>
            <option value="1">Standard 1</option>
            <option value="2">Standard 2</option>
            <option value="3">Standard 3</option>
            {/* Add more options for other standards */}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Select Division:</label>
          <select
            className="form-select"
            value={selectedDivision}
            onChange={handleSelectDivision}
          >
            <option value="">Select Division</option>
            <option value="A">Division A</option>
            <option value="B">Division B</option>
            <option value="C">Division C</option>
            {/* Add more options for other divisions */}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="mt-4">
        <h3>Students</h3>
        <ul className="list-group">
          {students.map(student => (
            <li key={student.id} className="list-group-item">{student.name}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3>Teachers</h3>
        <ul className="list-group">
          {teachers.map(teacher => (
            <li key={teacher.id} className="list-group-item">{teacher.name} - Subjects: {teacher.subjects.join(', ')}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewClass;

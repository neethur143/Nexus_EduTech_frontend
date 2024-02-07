import React, { useState } from 'react';

const ViewStandard = () => {
  const [selectedStandard, setSelectedStandard] = useState('');
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  // Dummy data for demonstration
  const studentData = [
    { id: 1, name: 'Student 1', standard: '1' },
    { id: 2, name: 'Student 2', standard: '1' },
    { id: 3, name: 'Student 3', standard: '2' },
    { id: 4, name: 'Student 4', standard: '2' },
    { id: 5, name: 'Student 5', standard: '3' },
    // Add more student data for other standards
  ];

  const teacherData = [
    { id: 1, name: 'Teacher 1', subjects: ['Maths', 'Science'], standard: '1' },
    { id: 2, name: 'Teacher 2', subjects: ['English'], standard: '1' },
    { id: 3, name: 'Teacher 3', subjects: ['History', 'Geography'], standard: '2' },
    // Add more teacher data for other standards
  ];

  const handleSelectStandard = (std) => {
    setSelectedStandard(std);
    // Filter students and teachers based on selected standard
    const filteredStudents = studentData.filter(student => student.standard === std);
    const filteredTeachers = teacherData.filter(teacher => teacher.standard === std);
    setStudents(filteredStudents);
    setTeachers(filteredTeachers);
  };

  return (
    <div className="container mt-5">
      <h2>View Standards</h2>
      <div className="row">
        {[...Array(10).keys()].map(std => (
          <div key={std + 1} className="col-md-3 mb-3">
            <button
              className={`btn btn-primary btn-lg w-100 ${selectedStandard === `${std + 1}` && 'active'}`}
              onClick={() => handleSelectStandard(`${std + 1}`)}
            >
              Standard {std + 1}
            </button>
          </div>
        ))}
      </div>
      {selectedStandard && (
        <>
          <div className="mt-4">
            <h3>Students for Standard {selectedStandard}</h3>
            <ul className="list-group">
              {students.map(student => (
                <li key={student.id} className="list-group-item">{student.name}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3>Teachers for Standard {selectedStandard}</h3>
            <ul className="list-group">
              {teachers.map(teacher => (
                <li key={teacher.id} className="list-group-item">{teacher.name} - Subjects: {teacher.subjects.join(', ')}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewStandard;

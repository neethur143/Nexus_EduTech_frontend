import React, { useState } from 'react';

const ViewSubject = () => {
  const [teachers, setTeachers] = useState([]);

  // Dummy data for demonstration
  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Economics'];

  const teacherData = [
    { id: 1, name: 'John Doe', subjects: ['Mathematics', 'Science'] },
    { id: 2, name: 'Jane Smith', subjects: ['Science', 'English'] },
    { id: 3, name: 'David Brown', subjects: ['English', 'History'] },
    { id: 4, name: 'Emma Johnson', subjects: ['History', 'Geography'] },
    { id: 5, name: 'Michael Wilson', subjects: ['Geography', 'Physics'] },
    { id: 6, name: 'Sarah Miller', subjects: ['Physics', 'Chemistry'] },
    { id: 7, name: 'Christopher Martinez', subjects: ['Chemistry', 'Biology'] },
    { id: 8, name: 'Amanda Davis', subjects: ['Biology', 'Computer Science'] },
    { id: 9, name: 'Ryan Taylor', subjects: ['Computer Science', 'Economics'] },
    { id: 10, name: 'Jessica Anderson', subjects: ['Economics', 'Mathematics'] },
  ];

  // Function to get teachers handling a specific subject
  const getTeachersForSubject = (subject) => {
    return teacherData.filter(teacher => teacher.subjects.includes(subject));
  };

  // Function to handle click on a subject
  const handleClickSubject = (subject) => {
    const teachers = getTeachersForSubject(subject);
    setTeachers(teachers);
  };

  return (
    <div className="container mt-5">
      <h2> Subjects</h2>
      <div className="row">
        {subjects.map((subject, index) => (
          <div key={index} className="col-md-3 mb-3">
            <button
              className="btn btn-primary btn-lg w-100"
              onClick={() => handleClickSubject(subject)}
            >
              {subject}
            </button>
          </div>
        ))}
      </div>
      {teachers.length > 0 && (
        <div className="mt-4">
          <h3>Teachers handling the selected subject</h3>
          <ul className="list-group">
            {teachers.map(teacher => (
              <li key={teacher.id} className="list-group-item">{teacher.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ViewSubject;

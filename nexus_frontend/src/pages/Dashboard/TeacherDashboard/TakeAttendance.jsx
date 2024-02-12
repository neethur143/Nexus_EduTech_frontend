import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const classes = [
//   { classId: 101, standard: '1', section: 'A' },
//   { classId: 102, standard: '1', section: 'B' },
//   { classId: 103, standard: '1', section: 'C' },
//   { classId: 104, standard: '1', section: 'D' },
//   { classId: 201, standard: '2', section: 'A' },
//   { classId: 202, standard: '2', section: 'B' },
//   { classId: 203, standard: '2', section: 'C' },
//   { classId: 204, standard: '2', section: 'D' },
//   { classId: 301, standard: '3', section: 'A' },
//   { classId: 302, standard: '3', section: 'B' },
//   { classId: 303, standard: '3', section: 'C' },
//   { classId: 304, standard: '3', section: 'D' },
//   { classId: 401, standard: '4', section: 'A' },
//   { classId: 402, standard: '4', section: 'B' },
//   { classId: 403, standard: '4', section: 'C' },
//   { classId: 404, standard: '4', section: 'D' }
// ];
const AddAttendanceStudent = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState(students.map((student) => ({ studentId: student.studentId, status: 'absent' })));
  useEffect(() => {
    // Fetch teacher data from the server when the component mounts
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5011/api/Student/GetAll');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching Students:', error);
      }
    };

    fetchStudents();
  }, []);
  const handleCheckboxChange = (event, studentId) => {
    const { checked } = event.target;
    const status = checked ? 'Present' : 'Absent';
  
    // Directly update attendance state with the determined status
    setAttendance((prevAttendance) => {
      return [
        ...prevAttendance.filter((item) => item.studentId !== studentId), // Remove any existing entry for the student
        { studentId, status }, // Add the new entry with the calculated status
      ];
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send individual requests for each attendance item
      for (const { studentId, status } of attendance) {
        await axios.post('http://localhost:5011/api/StudentAttendence/AddStudentAttendence', { studentId, status }, {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      alert('Attendance submitted successfully');
      // Reset the attendance state after submission
      setAttendance([]);
    } catch (error) {
      console.error('Error submitting attendance:', error);
      alert('An error occurred while submitting attendance');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Student Attendance</h2>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              student.studentId != null && (
                <tr key={ student.studentId}>
                  <td>{student.studentId}</td>
                  <td>{student.name}</td>
                  <td>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`teacher_${student.studentId}_present`}
                        name={`teacher_${student.studentId}_present`}
               
                   
                        checked={attendance.some(item => item.studentId=== student.studentId && item.status === 'Present')}
                  
                        onChange={(event) => handleCheckboxChange(event, student.studentId)}
                      />
                      <label className="form-check-label" htmlFor={`teacher_${student.studentId}_present`}>
                        Present
                      </label>
                    </div>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">Submit Attendance</button>
        </div>
      </form>
    </div>
  );
};

export default AddAttendanceStudent;

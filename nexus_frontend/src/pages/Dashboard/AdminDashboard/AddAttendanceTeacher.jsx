import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAttendanceTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5011/api/Teacher/GetAll');
        setTeachers(response.data);
        // Initialize attendance state with all teachers marked as absent
        setAttendance(response.data.map(teacher => ({ teacherId: teacher.teacherId, status: 'absent' })));
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  const handleCheckboxChange = (event, teacherId, status) => {
    // Update the attendance state based on the checkbox status
    setAttendance(prevAttendance => {
      return prevAttendance.map(item => {
        if (item.teacherId === teacherId) {
          return { ...item, status: status };
        } else {
          return item;
        }
      });
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send individual requests for each attendance item
      for (const { teacherId, status } of attendance) {
        await axios.post('http://localhost:5011/api/TeacherAttendence/AddTeacherAttendence', { teacherId, status }, {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      setMessage('Attendance submitted successfully');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      // Reset the attendance state after submission
      setAttendance([]);
    } catch (error) {
      console.error('Error submitting attendance:', error);
      setMessage('An error occurred while submitting attendance');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Teacher Attendance</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <table className="table">
          <thead>
            <tr>
              <th>Teacher ID</th>
              <th>Teacher Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              teacher.teacherId != null && (
                <tr key={teacher.teacherId}>
                  <td>{teacher.teacherId}</td>
                  <td>{teacher.name}</td>
                  <td>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`teacher_${teacher.teacherId}_present`}
                        checked={attendance.some(item => item.teacherId === teacher.teacherId && item.status === 'Present')}
                        onChange={(event) => handleCheckboxChange(event, teacher.teacherId, 'Present')}
                      />
                      <label className="form-check-label" htmlFor={`teacher_${teacher.teacherId}_present`}>
                        Present
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`teacher_${teacher.teacherId}_absent`}
                        checked={attendance.some(item => item.teacherId === teacher.teacherId && item.status === 'absent')}
                        onChange={(event) => handleCheckboxChange(event, teacher.teacherId, 'absent')}
                      />
                      <label className="form-check-label" htmlFor={`teacher_${teacher.teacherId}_absent`}>
                        Absent
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

export default AddAttendanceTeacher;

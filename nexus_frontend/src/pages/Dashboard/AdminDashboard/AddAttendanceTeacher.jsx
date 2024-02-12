import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAttendanceTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState(teachers.map((teacher) => ({ teacherId: teacher.teacherId, status: 'absent' })));
  useEffect(() => {
    // Fetch teacher data from the server when the component mounts
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5011/api/Teacher/GetAll');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);
  const handleCheckboxChange = (event, teacherId) => {
    const { checked } = event.target;
    const status = checked ? 'present' : 'absent';
  console.log(status);
    // Directly update attendance state with the determined status
    setAttendance((prevAttendance) => {
      return [
        ...prevAttendance.filter((item) => item.teacherId !== teacherId), // Remove any existing entry for the teacher
        { teacherId, status }, // Add the new entry with the calculated status
      ];
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
      <h2>Add Teacher Attendance</h2>
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
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`teacher_${teacher.teacherId}_present`}
                        name={`teacher_${teacher.teacherId}_present`}
               
                   
                        checked={attendance.some(item => item.teacherId === teacher.teacherId && item.status === 'present')}
                       
                
                        onChange={(event) => handleCheckboxChange(event, teacher.teacherId)}
                      />
                      <label className="form-check-label" htmlFor={`teacher_${teacher.teacherId}_present`}>
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

export default AddAttendanceTeacher;

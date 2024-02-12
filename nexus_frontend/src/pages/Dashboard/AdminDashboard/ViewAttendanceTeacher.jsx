import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAttendance = () => {
  const [teachers, setTeachers] = useState([]);
  const [teacherId, setTeacherId] = useState('');
  const [attendanceData, setAttendanceData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:5011/api/Teacher/GetAll');
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const fetchAttendanceData = async () => {
    if (!teacherId) return;

    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5011/api/TeacherAttendence/ GetTeacherAttendenceById/${teacherId}`);
      setAttendanceData(response.data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTeacherIdChange = (event) => {
    setTeacherId(event.target.value);
    setIsInvalid(false); // Reset validation when input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (teacherId) {
      setIsSubmitted(true);
      fetchAttendanceData();
    } else {
      setIsInvalid(true); // Set validation if teacherId is empty
    }
  };

 const calculateAttendancePercentage = () => {
    if (!attendanceData) return 0;
    const { totalWorkingDays, noOfPresent } = attendanceData;
    return ((noOfPresent / totalWorkingDays) * 100).toFixed(2);
  };
 

  return (
    <div className="container mt-5">
      <h2>View Attendance</h2>
      <form onSubmit={handleSubmit} className={isInvalid ? '' : ''}>
      <div className="mb-3">
  <label htmlFor="teacherId" className="form-label">Select Teacher:</label>
  <select
    className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
    id="teacherId"
    value={teacherId}
    onChange={handleTeacherIdChange}
  >
    <option value="">Select a Teacher</option>
    {teachers.map((teacher) => (
      <option key={teacher.teacherId} value={teacher.teacherId}>
        {teacher.name}
      </option>
    ))}
  </select>
  <div className="invalid-feedback">Please select a teacher.</div>
</div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isSubmitted && attendanceData && (
        <div>
          <h3>Attendance for Teacher: {teachers.find(t => t.teacherId === teacherId)?.name}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Total Working Days</th>
              <th>No. of Present</th>
              <th>No. of Absent</th>
              <th>Attendance Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{attendanceData.totalWorkingDays}</td>
              <td>{attendanceData.noOfPresent}</td>
              <td>{attendanceData.noOfAbsent}</td>
              <td>{`${calculateAttendancePercentage()}%`}</td>
            </tr>
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default ViewAttendance;

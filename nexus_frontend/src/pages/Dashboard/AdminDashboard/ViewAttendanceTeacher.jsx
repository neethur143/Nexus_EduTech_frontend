import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAttendance = () => {
  const [teacherId, setTeacherId] = useState('');
  const [attendanceData, setAttendanceData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (isSubmitted && teacherId) {
      fetchAttendanceData();
    }
  }, [isSubmitted, teacherId]);

  const fetchAttendanceData = async () => {
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

  const calculateAttendancePercentage = () => {
    if (!attendanceData) return 0;
    const { totalWorkingDays, noOfPresent } = attendanceData;
    return ((noOfPresent / totalWorkingDays) * 100).toFixed(2);
  };

  const handleTeacherIdChange = (event) => {
    setTeacherId(event.target.value);
    setIsInvalid(false); // Reset validation when input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (teacherId) {
      setIsSubmitted(true);
    } else {
      setIsInvalid(true); // Set validation if teacherId is empty
    }
  };

  return (
    <div className="container mt-5">
      <h2>View Attendance</h2>
      <form onSubmit={handleSubmit} className={isInvalid ? 'was-validated' : ''}>
        <div className="mb-3">
          <label htmlFor="teacherId" className="form-label">Enter Teacher ID:</label>
          <input
            type="text"
            className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
            id="teacherId"
            value={teacherId}
            onChange={handleTeacherIdChange}
          
          />
          <div className="invalid-feedback">Please enter the Teacher ID.</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isSubmitted && attendanceData && (
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
      )}
    </div>
  );
};

export default ViewAttendance;

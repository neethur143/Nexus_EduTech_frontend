import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAttendanceByMonth = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [teacherAttendance, setTeacherAttendance] = useState([]);

  useEffect(() => {
    if (isSubmitted && selectedMonth) {
      fetchAttendanceData();
    }
  }, [isSubmitted, selectedMonth]);

  const fetchAttendanceData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5011/api/TeacherAttendence/GetTeacherAttendencebyMonth/${selectedMonth}`);
      setAttendanceData(response.data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedMonth) {
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (attendanceData.length > 0) {
      const teachers = {};
      attendanceData.forEach((attendance) => {
        if (!teachers[attendance.teacherId]) {
          teachers[attendance.teacherId] = {
            present: 0,
            absent: 0
          };
        }
        if (attendance.status.toLowerCase() === 'present') {
          teachers[attendance.teacherId].present++;
        } else if (attendance.status.toLowerCase() === 'absent') {
          teachers[attendance.teacherId].absent++;
        }
      });
      const formattedAttendance = Object.keys(teachers).map((teacherId) => {
        const { present, absent } = teachers[teacherId];
        const totalDays = present + absent;
        const percentage = (present / totalDays) * 100 || 0;
        return {
          teacherId,
          present,
          absent,
          percentage: percentage.toFixed(2)
        };
      });
      setTeacherAttendance(formattedAttendance);
    }
  }, [attendanceData]);

  return (
    <div className="container mt-5">
      <h2>View Attendance By Month</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="selectedMonth" className="form-label">Select Month:</label>
          <select
            className="form-select"
            id="selectedMonth"
            value={selectedMonth}
            onChange={handleMonthChange}
            required
          >
            <option value="">Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <div className="invalid-feedback">Please select a month.</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isSubmitted && teacherAttendance.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Teacher ID</th>
              <th>No. of Present</th>
              <th>No. of Absent</th>
              <th>Attendance Percentage</th>
            </tr>
          </thead>
          <tbody>
            {teacherAttendance.map((attendance) => (
              <tr key={attendance.teacherId}>
                <td>{attendance.teacherId}</td>
                <td>{attendance.present}</td>
                <td>{attendance.absent}</td>
                <td>{attendance.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAttendanceByMonth;

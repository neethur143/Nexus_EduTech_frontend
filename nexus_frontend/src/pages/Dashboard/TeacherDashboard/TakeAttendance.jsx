import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAttendanceStudent = () => {
  const [standards] = useState(Array.from({ length: 10 }, (_, i) => i + 1)); // Array of standards from 1 to 10
  const [sections] = useState(['A', 'B', 'C', 'D']); // Array of sections A to D
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5011/api/Student/GetAll');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleStandardChange = (event) => {
    setSelectedStandard(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const fetchClassId = async () => {
    try {
      const response = await axios.get(`http://localhost:5011/api/Student/GetByStdSec/${selectedStandard}/${selectedSection}`);
      setSelectedClassId(response.data.classId);
    } catch (error) {
      console.error('Error fetching class ID:', error);
    }
  };

  useEffect(() => {
    if (selectedStandard && selectedSection) {
      fetchClassId();
    }
  }, [selectedStandard, selectedSection]);

  const handleCheckboxChange = (event, studentId) => {
    const { checked } = event.target;
    const status = checked ? 'Present' : 'Absent';

    setAttendance(prevAttendance => {
      return [
        ...prevAttendance.filter(item => item.studentId !== studentId),
        { studentId, status },
      ];
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      for (const { studentId, status } of attendance) {
        await axios.post('http://localhost:5011/api/StudentAttendence/AddStudentAttendence', { studentId, status }, {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      alert('Attendance submitted successfully');
      setAttendance([]);
    } catch (error) {
      console.error('Error submitting attendance:', error);
      alert('An error occurred while submitting attendance');
    }
  };

  // Filter students based on selected class ID
  const filteredStudents = students.filter(student => student.classId === selectedClassId);

  return (
    <div className="container mt-5">
      <h2>Add Student Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="standardSelect" className="form-label">Select Standard:</label>
          <select className="form-select" id="standardSelect" onChange={handleStandardChange} value={selectedStandard}>
            <option value="">Select Standard</option>
            {standards.map((standard, index) => (
              <option key={index} value={standard}>{standard}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="sectionSelect" className="form-label">Select Section:</label>
          <select className="form-select" id="sectionSelect" onChange={handleSectionChange} value={selectedSection}>
            <option value="">Select Section</option>
            {sections.map((section, index) => (
              <option key={index} value={section}>{section}</option>
            ))}
          </select>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.name}</td>
                <td>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`student_${student.studentId}_present`}
                      name={`student_${student.studentId}_present`}
                      checked={attendance.some(item => item.studentId === student.studentId && item.status === 'Present')}
                      onChange={event => handleCheckboxChange(event, student.studentId)}
                    />
                    <label className="form-check-label" htmlFor={`student_${student.studentId}_present`}>
                      Present
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`student_${student.studentId}_absent`}
                      name={`student_${student.studentId}_absent`}
                      checked={attendance.some(item => item.studentId === student.studentId && item.status === 'Absent')}
                      onChange={event => handleCheckboxChange(event, student.studentId)}
                    />
                    <label className="form-check-label" htmlFor={`student_${student.studentId}_absent`}>
                      Absent
                    </label>
                  </div>
                </td>
              </tr>
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

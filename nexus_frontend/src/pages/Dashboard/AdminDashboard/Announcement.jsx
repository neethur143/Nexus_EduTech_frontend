// Communication.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Communication = () => {
  const [announcementContent, setAnnouncementContent] = useState('');
  const [recipientType, setRecipientType] = useState('all'); // Default to 'all' recipients
  const [recipients, setRecipients] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Fetch all students when component mounts
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setAllStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleRecipientTypeChange = (e) => {
    setRecipientType(e.target.value);
  };

  const handleAnnouncementContentChange = (e) => {
    setAnnouncementContent(e.target.value);
  };

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
    setSelectedStudent(null); // Reset selected student
  };

  const handleFetchStudentDetails = async () => {
    try {
      const response = await axios.get(`/api/students/${studentId}`);
      setSelectedStudent(response.data);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  const handleRecipientChange = (e) => {
    const selectedRecipients = Array.from(e.target.selectedOptions, option => option.value);
    setRecipients(selectedRecipients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/announcements/send', {
        announcementContent,
        recipients: recipientType === 'all' ? [] : recipients,
      });

      console.log('Announcement sent successfully');
    } catch (error) {
      console.error('Error sending announcement:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Communication</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="announcementContent" className="form-label">Announcement Content:</label>
          <textarea
            id="announcementContent"
            className="form-control"
            value={announcementContent}
            onChange={handleAnnouncementContentChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipientType" className="form-label">Recipient Type:</label>
          <select
            id="recipientType"
            className="form-select"
            value={recipientType}
            onChange={handleRecipientTypeChange}
          >
            <option value="all">All Students and Teachers</option>
            <option value="teachers">All Teachers Only</option>
            <option value="student">Select Student</option>
          </select>
        </div>
        {recipientType === 'student' && (
          <div className="mb-3">
            <label htmlFor="studentId" className="form-label">Enter Student ID:</label>
            <div className="input-group">
              <input
                type="text"
                id="studentId"
                className="form-control"
                value={studentId}
                onChange={handleStudentIdChange}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleFetchStudentDetails}
              >
                Fetch Details
              </button>
            </div>
            {selectedStudent && (
              <div className="mt-3">
                <p><strong>Student ID:</strong> {selectedStudent.id}</p>
                <p><strong>Name:</strong> {selectedStudent.name}</p>
                <p><strong>Email:</strong> {selectedStudent.email}</p>
                {/* Add more details as needed */}
              </div>
            )}
          </div>
        )}
        <button type="submit" className="btn btn-primary">Send Announcement</button>
      </form>
    </div>
  );
};

export default Communication;

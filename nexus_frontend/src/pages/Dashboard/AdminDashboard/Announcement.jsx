import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Communication = () => {
  const [announcementContent, setAnnouncementContent] = useState('');
  const [recipientType, setRecipientType] = useState(0); // Default to 'all' recipients
  const [recipients, setRecipients] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [customRecipientEmail, setCustomRecipientEmail] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState('');

  useEffect(() => {
    // Fetch all students when component mounts
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    try {
      const response = await axios.get('/api/Student/GetAll');
      setAllStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleRecipientTypeChange = (e) => {
    setRecipientType(parseInt(e.target.value));
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
      const response = await axios.get(`/api/Student/GetAll/${studentId}`);
      setSelectedStudent(response.data);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  const handleCustomRecipientEmailChange = (e) => {
    setCustomRecipientEmail(e.target.value);
  };

  const handleRecipientChange = (e) => {
    const selectedRecipients = Array.from(e.target.selectedOptions, option => option.value);
    setRecipients(selectedRecipients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let selectedRecipients = [];

    if (recipientType === 0) {
      // Include all recipients
      selectedRecipients = recipients;
    } else if (recipientType === 1) {
      // Fetch teachers and set them as recipients
      const response = await axios.get('/api/Teacher/GetAll');
      selectedRecipients = response.data.map(teacher => teacher.email);
    } else if (recipientType === 2) {
      // Include custom recipient email entered by the user
      selectedRecipients = [customRecipientEmail];
    }

    try {
      await axios.post('http://localhost:5011/api/Announcement/send', {
        announcementContent,
        recipientType,
        studentEmail: recipientType === 2 ? customRecipientEmail : null,
        recipients: selectedRecipients,
    
      });

      setPopoverMessage('Announcement sent successfully');
      setShowPopover(true);
      setTimeout(() => {
        setShowPopover(false);
      }, 3000); // Hide popover after 3 seconds
    } catch (error) {
      setPopoverMessage('Error sending announcement');
      setShowPopover(true);
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
            <option value={0}>All Students and Teachers</option>
            <option value={1}>All Teachers Only</option>
            <option value={2}>Select Student</option>
          </select>
        </div>
        {recipientType === 2 && (
          <div className="mb-3">
            <label htmlFor="customRecipientEmail" className="form-label">Enter Recipient Email:</label>
            <input
              type="email"
              id="customRecipientEmail"
              className="form-control"
              value={customRecipientEmail}
              onChange={handleCustomRecipientEmailChange}
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Send Announcement</button>
      </form>
      {showPopover && (
        <div className="popover">
          <div className="popover-content">
            {popoverMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Communication;

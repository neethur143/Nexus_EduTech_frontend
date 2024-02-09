import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed

const AddTeacher = () => {
  // ... existing state and handlers ...

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields before submission
    if (!teacherDetails.firstName || !teacherDetails.lastName || !teacherDetails.email || !teacherDetails.phoneNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare the payload for the API request
    const payload = {
      name: `${teacherDetails.firstName} ${teacherDetails.lastName}`,
      gender: teacherDetails.gender,
      dob: new Date().toISOString(), // Use current date as placeholder, replace with actual date
      address: teacherDetails.address,
      contactNumber: teacherDetails.phoneNumber,
      email: teacherDetails.email,
      classId:  101 // Replace with the actual classId based on selection
    };

    try {
      const response = await axios.post('http://localhost:5011/api/Teacher/AddTeacher', payload, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status ===  200) {
        alert('Teacher Added Successfully');
      } else {
        throw new Error('Error adding teacher');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while adding the teacher');
    }

    // Reset form fields after submission
    setTeacherDetails({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      qualification: '',
      subjects: [],
      standards: [],
      divisions: []
    });
  };

  return (
    <div className="container mt-5">
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={teacherDetails.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={teacherDetails.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={teacherDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            name="phoneNumber"
            value={teacherDetails.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Qualification:</label>
          <input
            type="text"
            className="form-control"
            name="qualification"
            value={teacherDetails.qualification}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Subjects:</label>
          <input
            type="text"
            className="form-control"
            name="subjects"
            value={teacherDetails.subjects}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Standards:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="standards"
                value="1"
                checked={teacherDetails.standards.includes('1')}
                onChange={handleCheckboxChange}
              /> Standard 1
            </label>
            <label>
              <input
                type="checkbox"
                name="standards"
                value="2"
                checked={teacherDetails.standards.includes('2')}
                onChange={handleCheckboxChange}
              /> Standard 2
            </label>
            {/* Add more checkboxes for other standards */}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Divisions:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="divisions"
                value="A"
                checked={teacherDetails.divisions.includes('A')}
                onChange={handleCheckboxChange}
              /> Division A
            </label>
            <label>
              <input
                type="checkbox"
                name="divisions"
                value="B"
                checked={teacherDetails.divisions.includes('B')}
                onChange={handleCheckboxChange}
              /> Division B
            </label>
            {/* Add more checkboxes for other divisions */}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddTeacher;

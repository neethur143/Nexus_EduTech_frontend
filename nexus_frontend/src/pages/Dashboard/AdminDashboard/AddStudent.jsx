import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [studentDetails, setStudentDetails] = useState({
    studentId: '',
    fullName: '',
    registerNo: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    emailAddress: '',
    standard: '',
    section: '',
    classId: ''
  });

  const [errors, setErrors] = useState({});

  const dummyData = [
    { standard: '1', section: 'A', classId: '101' },
    { standard: '1', section: 'B', classId: '102' },
    { standard: '1', section: 'C', classId: '103' },
    { standard: '1', section: 'D', classId: '104' },
    { standard: '2', section: 'A', classId: '201' },
    { standard: '2', section: 'B', classId: '202' },
    { standard: '2', section: 'C', classId: '203' },
    { standard: '2', section: 'D', classId: '204' },
    { standard: '3', section: 'A', classId: '301' },
    { standard: '3', section: 'B', classId: '302' },
    { standard: '3', section: 'C', classId: '303' },
    { standard: '3', section: 'D', classId: '304' },
    { standard: '4', section: 'A', classId: '401' },
    { standard: '4', section: 'B', classId: '402' },
    { standard: '4', section: 'C', classId: '403' },
    { standard: '4', section: 'D', classId: '404' },
    { standard: '5', section: 'A', classId: '501' },
    { standard: '5', section: 'B', classId: '502' },
    { standard: '5', section: 'C', classId: '503' },
    { standard: '5', section: 'D', classId: '504' },
    { standard: '6', section: 'A', classId: '601' },
    { standard: '6', section: 'B', classId: '602' },
    { standard: '6', section: 'C', classId: '603' },
    { standard: '6', section: 'D', classId: '604' },   
  ];

  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    let updatedStudentDetails = { ...studentDetails, [name]: value };

    if (name === 'standard' || name === 'section') {
      const selectedClass = dummyData.find(
        item => item.standard === updatedStudentDetails.standard && item.section === updatedStudentDetails.section
      );
      if (selectedClass) {
        updatedStudentDetails = { ...updatedStudentDetails, classId: selectedClass.classId };
      }
    }

    setStudentDetails(updatedStudentDetails);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const newErrors = {};

    // Basic form validation
    if (!studentDetails.studentId) {
      newErrors.studentId = 'Student ID is required';
    }
    if (!studentDetails.fullName) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!studentDetails.registerNo) {
      newErrors.registerNo = 'Register No is required';
    }
    if (!studentDetails.gender) {
      newErrors.gender = 'Gender is required';
    }
    if (!studentDetails.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of Birth is required';
    }
    if (!studentDetails.address) {
      newErrors.address = 'Address is required';
    }
    if (!studentDetails.emailAddress) {
      newErrors.emailAddress = 'Email Address is required';
    } else if (!isValidEmail(studentDetails.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    if (!studentDetails.standard) {
      newErrors.standard = 'Standard is required';
    }
    if (!studentDetails.section) {
      newErrors.section = 'Section is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Convert the studentDetails object to match the expected payload structure
    const payload = {
      studentId: parseInt(studentDetails.studentId),
      name: studentDetails.fullName,
      registrationNumber: studentDetails.registerNo,
      classId: parseInt(studentDetails.classId),
      gender: studentDetails.gender,
      dob: new Date(studentDetails.dateOfBirth).toISOString(),
      address: studentDetails.address,
      email: studentDetails.emailAddress
    };

    try {
      const response = await axios.post('http://localhost:5011/api/Student/AddStudent', payload, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200) {
        alert('Student Added Successfully');
      } else {
        throw new Error('Error adding student');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while adding the student');
    }

    // Reset form fields and errors after submission
    setStudentDetails({
      studentId: '',
      fullName: '',
      registerNo: '',
      gender: '',
      dateOfBirth: '',
      address: '',
      emailAddress: '',
      standard: '',
      section: '',
      classId: ''
    });
    setErrors({});
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card mt-5">
            <div className="card-header">
              <h4 className="card-title">Add Student</h4>
            </div>
            <div className="card-body">             
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="studentId" className="form-label">Student ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentId"
                    name="studentId"
                    value={studentDetails.studentId}
                    onChange={handleDropdownChange}
                  />
                  <span className="text-danger">{errors.studentId}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={studentDetails.fullName}
                    onChange={handleDropdownChange}
                  />
                  <span className="text-danger">{errors.fullName}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="registerNo" className="form-label">Register No:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="registerNo"
                    name="registerNo"
                    value={studentDetails.registerNo}
                    onChange={handleDropdownChange}
                  />
                  <span className="text-danger">{errors.registerNo}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender:</label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={studentDetails.gender}
                    onChange={handleDropdownChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="text-danger">{errors.gender}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={studentDetails.dateOfBirth}
                    onChange={handleDropdownChange}
                    max="2003-12-31"
                    min="1990-01-01"
                  />
                  <span className="text-danger">{errors.dateOfBirth}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address:</label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    value={studentDetails.address}
                    onChange={handleDropdownChange}
                  />
                  <span className="text-danger">{errors.address}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label">Email Address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    name="emailAddress"
                    value={studentDetails.emailAddress}
                    onChange={handleDropdownChange}
                  />
                  <span className="text-danger">{errors.emailAddress}</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="standard" className="form-label">Standard:</label>
                  <select
                    className="form-select"
                    id="standard"
                    name="standard"
                    value={studentDetails.standard}
                    onChange={handleDropdownChange}
                  >
                    <option value="">Select Standard</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <span className="text-danger">{errors.standard}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="section" className="form-label">Section:</label>
                  <select
                    className="form-select"
                    id="section"
                    name="section"
                    value={studentDetails.section}
                    onChange={handleDropdownChange}
                  >
                    <option value="">Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                  <span className="text-danger">{errors.section}</span>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-success me-2">Submit</button>
                  <button type="reset" className="btn btn-danger">Reset</button>
                </div>          
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

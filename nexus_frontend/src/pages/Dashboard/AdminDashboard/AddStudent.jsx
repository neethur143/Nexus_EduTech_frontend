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

  const dummyData = [
    { standard: '1', section: 'A', classId: '101' },
    { standard: '1', section: 'B', classId: '102' },
    // ... other standards and sections
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

      if (response.status ===   200) {
        alert('Student Added Successfully');
      } else {
        throw new Error('Error adding student');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while adding the student');
    }

    // Reset form fields after submission
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
                    required
                  />
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
                    required
                  />
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
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender:</label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={studentDetails.gender}
                    onChange={handleDropdownChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
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
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address:</label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    value={studentDetails.address}
                    onChange={handleDropdownChange}
                    required
                  />
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
                    required
                  />
                  </div>

                  <div className="mb-3">
                  <label htmlFor="standard" className="form-label">Standard:</label>
                  <select
                    className="form-select"
                    id="standard"
                    name="standard"
                    value={studentDetails.standard}
                    onChange={handleDropdownChange}
                    required
                  >
                    <option value="">Select Standard</option>
                    {Array.from({ length:  10 }, (_, i) => (
                      <option key={i +  1} value={i +  1}>{i +  1}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="section" className="form-label">Section:</label>
                  <select
                    className="form-select"
                    id="section"
                    name="section"
                    value={studentDetails.section}
                    onChange={handleDropdownChange}
                    required
                  >
                    <option value="">Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
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

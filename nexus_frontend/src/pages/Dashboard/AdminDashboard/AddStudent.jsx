import React, { useState } from 'react';

const AddStudent = () => {
  const [studentDetails, setStudentDetails] = useState({
    studentId: '',
    fullName: '',
    registerNo: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    emailAddress: '',
    classId: ''
  });

  const dummyTable = [
    { classId: '101', standard: '1', section: 'A' },
    { classId: '102', standard: '1', section: 'B' },
    { classId: '103', standard: '1', section: 'C' },
    { classId: '104', standard: '1', section: 'D' },
    { classId: '201', standard: '2', section: 'A' },
    // Add more dummy data as needed
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'standard' || name === 'section') {
      const selectedClass = dummyTable.find(item => item.standard === studentDetails.standard && item.section === studentDetails.section);
      if (selectedClass) {
        setStudentDetails({ ...studentDetails, [name]: value, classId: selectedClass.classId });
      }
    } else {
      setStudentDetails({ ...studentDetails, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(studentDetails);
    // Reset form fields after submission
    setStudentDetails({
      studentId: '',
      fullName: '',
      registerNo: '',
      gender: '',
      dateOfBirth: '',
      address: '',
      emailAddress: '',
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Standard</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
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
                    onChange={handleChange}
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

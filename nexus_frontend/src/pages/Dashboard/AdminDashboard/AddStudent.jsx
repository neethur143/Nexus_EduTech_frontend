import React, { useState } from 'react';

const AddStudent = () => {
  const [studentDetails, setStudentDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    medium: '',
    standard: '',
    division: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(studentDetails);
    // Reset form fields after submission
    setStudentDetails({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      medium: '',
      standard: '',
      division: ''
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
                  <label htmlFor="firstName" className="form-label">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={studentDetails.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={studentDetails.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={studentDetails.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={studentDetails.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="medium" className="form-label">Medium:</label>
                  <select
                    className="form-select"
                    id="medium"
                    name="medium"
                    value={studentDetails.medium}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Medium</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                  </select>
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
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="division" className="form-label">Division:</label>
                  <select
                    className="form-select"
                    id="division"
                    name="division"
                    value={studentDetails.division}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Division</option>
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

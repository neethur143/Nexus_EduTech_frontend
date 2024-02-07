import React, { useState } from 'react';

const AddExam = () => {
  // State variables to manage form data
  const [standard, setStandard] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if standard and subject are selected
    if (!standard || !subject) {
      alert('Please select both standard and subject.');
      return;
    }
    // Confirm before adding the exam
    if (window.confirm('Are you sure you want to add this exam?')) {
      // Perform form submission logic here, e.g., send data to the server
      console.log('Form submitted:', { standard, subject, date });
      // Reset form fields after submission
      setStandard('');
      setSubject('');
      setDate('');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Exam</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Standard:</label>
          <select
            className="form-select"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
            required
          >
            <option value="">Select Standard</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            {/* Add more standard options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Subject:</label>
          <select
            className="form-select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            {/* Add more subject options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddExam;

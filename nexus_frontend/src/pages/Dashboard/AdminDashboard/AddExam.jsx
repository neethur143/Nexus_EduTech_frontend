import React, { useState } from 'react';
import axios from 'axios';

const AddExam = () => {
  const [standard, setStandard] = useState('');
  const [section, setSection] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [maxMark, setMaxMark] = useState('');
  const [examId, setExamId] = useState('');
  const [examName, setExamName] = useState('');

  const classes = [
    { classId: 101, standard: '1', section: 'A' },
    { classId: 102, standard: '1', section: 'B' },
    { classId: 103, standard: '1', section: 'C' },
    { classId: 104, standard: '1', section: 'D' },
    { classId: 201, standard: '2', section: 'A' },
    { classId: 202, standard: '2', section: 'B' },
    { classId: 203, standard: '2', section: 'C' },
    { classId: 204, standard: '2', section: 'D' },
    { classId: 301, standard: '3', section: 'A' },
    { classId: 302, standard: '3', section: 'B' },
    { classId: 303, standard: '3', section: 'C' },
    { classId: 304, standard: '3', section: 'D' },
    { classId: 401, standard: '4', section: 'A' },
    { classId: 402, standard: '4', section: 'B' },
    { classId: 403, standard: '4', section: 'C' },
    { classId: 404, standard: '4', section: 'D' }
  ];

  const subjects = [
    { subjectId: 10, name: 'Maths' },
    { subjectId: 11, name: 'English' },
    { subjectId: 12, name: 'Biology' },
    { subjectId: 13, name: 'Evs' }
    // Add more subjects as needed
  ];

  const addExam = async (examData) => {
    try {
      const response = await axios.post('http://localhost:5011/api/Exam/AddExam', examData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add exam');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const selectedClass = classes.find((cls) => cls.standard === standard && cls.section === section);

    // Validate if all fields are filled
    if (!examId || !examName || !standard || !section || !subject || !date || !maxMark) {
      alert('Please fill in all fields.');
      return;
    }

    // Validate if exam ID and max mark are numbers
    if (isNaN(examId) || isNaN(maxMark)) {
      alert('Please enter valid numbers for Exam ID and Max Mark.');
      return;
    }

    // Validate if the selected date is in the future
    const currentDate = new Date().toISOString().split('T')[0];
    if (date < currentDate) {
      alert('Please select a future date.');
      return;
    }

    const examData = {
      examId: parseInt(examId),
      examName: examName,
      examDate: date,
      subjectId: parseInt(subject),
      max_Mark: parseInt(maxMark),
      classId: selectedClass ? selectedClass.classId : null, // Assign classId if found, otherwise null
    };

    try {
      await addExam(examData);
      alert('Exam added successfully');
    } catch (error) {
      console.error('Error adding exam:', error.message);
      alert('Failed to add exam. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Exam</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Exam ID:</label>
          <input
            type="text"
            className="form-control"
            value={examId}
            onChange={(e) => setExamId(e.target.value)}
           
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Exam Name:</label>
          <input
            type="text"
            className="form-control"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
          
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Standard:</label>
          <select
            className="form-select"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
         
          >
            <option value="">Select Standard</option>
            {Array.from(new Set(classes.map((cls) => cls.standard))).map((std) => (
              <option key={std} value={std}>
                {`Class ${std}`}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Section:</label>
          <select
            className="form-select"
            value={section}
            onChange={(e) => setSection(e.target.value)}
           
          >
            <option value="">Select Section</option>
            {classes
              .filter((cls) => cls.standard === standard)
              .map((cls) => (
                <option key={cls.section} value={cls.section}>
                  {cls.section}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Subject:</label>
          <select
            className="form-select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          
          >
            <option value="">Select Subject</option>
            {subjects.map((subj) => (
              <option key={subj.subjectId} value={subj.subjectId}>
                {subj.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]} // Set min date to today
           
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Max Mark:</label>
          <input
            type="number"
            className="form-control"
            value={maxMark}
            onChange={(e) => setMaxMark(e.target.value)}
            
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddExam;

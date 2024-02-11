import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewExam = () => {
  const [exams, setExams] = useState([]);
  const [editableExam, setEditableExam] = useState(null); // State to store the exam being edited
  const [standards, setStandards] = useState([]);
  const [sections, setSections] = useState([]);

  // Dummy data for classes and subjects
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5011/api/Exam/GetAll');
        setExams(response.data);
        const uniqueStandards = Array.from(new Set(classes.map(cls => cls.standard)));
        setStandards(uniqueStandards);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    }
    fetchData();
  }, []);

  const updateExam = async (examData) => {
    try {
      const response = await axios.put('http://localhost:5011/api/Exam/UpdateExam', examData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update exam');
    }
  };

  const handleEdit = (examId) => {
    // Find the exam to edit from the exams state
    const examToEdit = exams.find((exam) => exam.examId === examId);
    setEditableExam({ ...examToEdit }); // Set the editable exam in the state
  };

  const handleSave = async () => {
    try {
      // Make sure all fields are filled
      if (!editableExam.examName || !editableExam.subjectId || !editableExam.classId || !editableExam.max_Mark) {
        alert('Please fill in all fields.');
        return;
      }

      // Send updated exam data to the server
      await updateExam(editableExam);
      alert('Exam updated successfully');
      setEditableExam(null); // Clear the editable exam state
    } catch (error) {
      console.error('Error updating exam:', error);
      alert('Failed to update exam. Please try again.');
    }
  };

  const handleCancel = () => {
    setEditableExam(null); // Clear the editable exam state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableExam({ ...editableExam, [name]: value });
  };

  const handleDelete = (examId) => {
    // Display confirmation popup
    const confirmDelete = window.confirm('Are you sure you want to delete this exam?');

    if (confirmDelete) {
      // Call delete API
      axios.delete(`http://localhost:5011/api/Exam/DeleteExam/${examId}`)
        .then((response) => {
          // Update exams state after successful deletion
          if (response.status === 200) {
            alert('Exam Deleted');
            // Fetch updated list of exams
            setExams(exams.filter(exam => exam.examId !== examId));
          }
        })
        .catch((error) => {
          console.error('Error deleting exam:', error);
          alert('An error occurred while deleting the exam');
        });
    }
  };

  const handleStandardChange = (e) => {
    const selectedStandard = e.target.value;
    const filteredSections = classes.filter(cls => cls.standard === selectedStandard).map(cls => cls.section);
    setSections(filteredSections);
  };

  return (
    <div className="container mt-5">
      <h2>View Exams</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Exam Name</th>
            <th>Exam Date</th>
            <th>Subject</th>
            <th>Standard</th>
            <th>Section</th>
            <th>Max Mark</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={exam.examId} className={index % 2 === 0 ? 'table-primary' : 'table-secondary'}>
              <td>{index + 1}</td>
              <td>{editableExam && editableExam.examId === exam.examId ? (
                <input
                  type="text"
                  name="examName"
                  value={editableExam.examName}
                  onChange={handleChange}
                />
              ) : (
                exam.examName
              )}</td>
              <td>{exam.examDate.split('T')[0]}</td>
              <td>{editableExam && editableExam.examId === exam.examId ? (
                <select
                  name="subjectId"
                  value={editableExam.subjectId}
                  onChange={handleChange}
                >
                  <option value="">Select Subject</option>
                  {subjects.map((subj) => (
                    <option key={subj.subjectId} value={subj.subjectId}>
                      {subj.name}
                    </option>
                  ))}
                </select>
              ) : (
                subjects.find(subject => subject.subjectId === exam.subjectId)?.name
              )}</td>
              <td>{editableExam && editableExam.examId === exam.examId ? (
                <select
                  name="standard"
                  value={editableExam.standard}
                  onChange={(e) => {
                    handleChange(e);
                    handleStandardChange(e);
                  }}
                >
                  <option value="">Select Standard</option>
                  {standards.map((std) => (
                    <option key={std} value={std}>
                      {std}
                    </option>
                  ))}
                </select>
              ) : (
                classes.find(cls => cls.classId === exam.classId)?.standard
              )}</td>
              <td>{editableExam && editableExam.examId === exam.examId ? (
                <select
                  name="section"
                  value={editableExam.section}
                  onChange={handleChange}
                >
                  <option value="">Select Section</option>
                  {sections.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              ) : (
                classes.find(cls => cls.classId === exam.classId)?.section
              )}</td>
              <td>{editableExam && editableExam.examId === exam.examId ? (
                <input
                  type="number"
                  name="max_Mark"
                  value={editableExam.max_Mark}
                  onChange={handleChange}
                />
              ) : (
                exam.max_Mark
              )}</td>
              <td>
                {editableExam && editableExam.examId === exam.examId ? (
                  <>
                    <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
                    <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button className="btn btn-primary me-2" onClick={() => handleEdit(exam.examId)}>Edit</button>
                )}
                <button className="btn btn-danger" onClick={() => handleDelete(exam.examId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewExam;

import React, { useState } from 'react';

const ViewExam = () => {
  const [exams, setExams] = useState([
    { id: 1, standard: 'Class 1', subject: 'Mathematics', date: '2024-02-15' },
    { id: 2, standard: 'Class 2', subject: 'Science', date: '2024-02-20' },
    { id: 3, standard: 'Class 3', subject: 'English', date: '2024-02-25' },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedExam, setEditedExam] = useState({});

  const handleEdit = (id) => {
    setEditingId(id);
    // Find the exam to be edited
    const examToEdit = exams.find((exam) => exam.id === id);
    setEditedExam({ ...examToEdit });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedExam({ ...editedExam, [name]: value });
  };

  const handleSave = () => {
    // Update the exams array with the edited exam data
    const updatedExams = exams.map((exam) =>
      exam.id === editedExam.id ? editedExam : exam
    );
    setExams(updatedExams);
    setEditingId(null);
    // Show success message or perform any additional actions
    alert('Exam edited successfully.');
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this exam?')) {
      const updatedExams = exams.filter((exam) => exam.id !== id);
      setExams(updatedExams);
      alert('Exam deleted successfully.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>View Exams</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Standard</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={exam.id}>
              <td>{index + 1}</td>
              <td>
                {editingId === exam.id ? (
                  <input
                    type="text"
                    name="standard"
                    value={editedExam.standard}
                    onChange={handleChange}
                  />
                ) : (
                  exam.standard
                )}
              </td>
              <td>
                {editingId === exam.id ? (
                  <input
                    type="text"
                    name="subject"
                    value={editedExam.subject}
                    onChange={handleChange}
                  />
                ) : (
                  exam.subject
                )}
              </td>
              <td>
                {editingId === exam.id ? (
                  <input
                    type="date"
                    name="date"
                    value={editedExam.date}
                    onChange={handleChange}
                  />
                ) : (
                  exam.date
                )}
              </td>
              <td>
                {editingId === exam.id ? (
                  <div>
                    <button
                      className="btn btn-success me-2"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEdit(exam.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(exam.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewExam;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateMarks = () => {
  const [marks, setMarks] = useState([]);
  const [editingMarkId, setEditingMarkId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch all marks, exams, and students
    Promise.all([
      axios.get("http://localhost:5011/api/Mark/GetAllMarks"),
      axios.get("http://localhost:5011/api/Exam/GetAll"),
      axios.get("http://localhost:5011/api/Student/GetAll")
    ]).then((responses) => {
      const marksData = responses[0].data;
      const examsData = responses[1].data;
      const studentsData = responses[2].data;
      
      // Enrich marks data with exam names and student names
      const enrichedMarks = marksData.map(mark => ({
        ...mark,
        examName: examsData.find(exam => exam.examId === mark.examId)?.examName,
        studentName: studentsData.find(student => student.studentId === mark.studentId)?.name
      }));
      
      setMarks(enrichedMarks);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const handleEdit = (markId) => {
    setEditingMarkId(markId);
  };

  const handleSave = async (markId, newMark) => {
    try {
      // Find the mark being edited
      const markToEdit = marks.find((mark) => mark.markId === markId);

      // Construct the payload with the required IDs and the new mark
      const payload = {
        markId: markId,
        studentId: markToEdit.studentId,
        examId: markToEdit.examId,
        mark: newMark
      };

      await axios.put(`http://localhost:5011/api/Mark/UpdateMark/${markId}`, payload);
      setSuccessMessage('Mark updated successfully');
      setEditingMarkId(null); // Exit edit mode
      setTimeout(() => window.location.reload(),  2000);
    } catch (error) {
      console.error('Error updating mark:', error);
      setSuccessMessage('Failed to update mark. Please try again.');
    }
  };

  const handleCancel = () => {
    setEditingMarkId(null); // Exit edit mode without saving
  };

  return (
    <div className="container mt-5">
      <h2>Update Marks</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Exam Name</th>
            <th>Mark</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => (
            <tr key={mark.markId}>
              <td>{mark.studentName}</td>
              <td>{mark.examName}</td>
              <td>
                {editingMarkId === mark.markId ? (
                  <input
                    type="number"
                    value={mark.mark}
                    onChange={(e) => setMarks(marks.map(m => m.markId === mark.markId ? {...m, mark: e.target.value} : m))}
                  />
                ) : (
                  mark.mark
                )}
              </td>
              <td>
                {editingMarkId === mark.markId ? (
                  <>
                    <button onClick={() => handleSave(mark.markId, mark.mark)}className="btn btn-success">Save</button>
                    <button onClick={handleCancel}className="btn btn-secondary">Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(mark.markId)} className="btn btn-primary">Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateMarks;


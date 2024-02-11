import React, { useState } from 'react';
import axios from 'axios';

const UpdateMarks = () => {
    const [studentId, setStudentId] = useState('');
    const [examId, setExamId] = useState('');
    const [mark, setMark] = useState('');
    const [validationErrors, setValidationErrors] = useState({
        examId: '',
        studentId: '',
        mark: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Clear previous validation errors
        setValidationErrors({
            examId: '',
            studentId: '',
            mark: ''
        });

        let errors = {};

        // Validate if all fields are filled
        if (!studentId) {
            errors.studentId = 'Please fill in Student ID.';
        }

        if (!examId) {
            errors.examId = 'Please fill in Exam ID.';
        }

        if (!mark) {
            errors.mark = 'Please fill in Updated Mark.';
        }

        // Validate if exam ID and mark are numbers
        if (isNaN(examId)) {
            errors.examId = 'Please enter a valid number for Exam ID.';
        }

        if (isNaN(studentId)) {
            errors.studentId = 'Please enter a valid number for Student ID.';
        }

        if (isNaN(mark)) {
            errors.mark = 'Please enter a valid number for Updated Mark.';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        const updatedMark = {
            studentId: parseInt(studentId),
            examId: parseInt(examId),
            mark: parseInt(mark),
        };

        try {
            await axios.put('http://localhost:5011/api/Mark/UpdateMark', updatedMark);
            alert('Mark updated successfully');
            // Clear input fields after successful update
            setStudentId('');
            setExamId('');
            setMark('');
        } catch (error) {
            console.error('Error updating mark:', error.message);
            alert('Failed to update mark. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Update Mark</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Exam ID:</label>
                    <input
                        type="text"
                        className={`form-control ${validationErrors.examId && 'is-invalid'}`}
                        value={examId}
                        onChange={(e) => setExamId(e.target.value)}
                    />
                    {validationErrors.examId && <div className="invalid-feedback">{validationErrors.examId}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Student ID:</label>
                    <input
                        type="text"
                        className={`form-control ${validationErrors.studentId && 'is-invalid'}`}
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    />
                    {validationErrors.studentId && <div className="invalid-feedback">{validationErrors.studentId}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Updated Mark:</label>
                    <input
                        type="text"
                        className={`form-control ${validationErrors.mark && 'is-invalid'}`}
                        value={mark}
                        onChange={(e) => setMark(e.target.value)}
                    />
                    {validationErrors.mark && <div className="invalid-feedback">{validationErrors.mark}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateMarks;

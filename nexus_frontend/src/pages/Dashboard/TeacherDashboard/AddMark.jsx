import React, { useState } from 'react';
import axios from 'axios';

const AddMarks = () => {
    const [studentId, setStudentId] = useState('');
    const [examId, setExamId] = useState('');
    const [mark, setMark] = useState('');
    const [validationError, setValidationError] = useState('');

    const addMark = async (markData) => {
        try {
            const response = await axios.post('http://localhost:5011/api/Mark/AddMark', markData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to add mark');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Clear previous validation error
        setValidationError('');

        // Validate if all fields are filled
        if (!studentId) {
            setValidationError('Please fill in Student ID.');
            return;
        }

        if (!examId) {
            setValidationError('Please fill in Exam ID.');
            return;
        }

        if (!mark) {
            setValidationError('Please fill in Mark.');
            return;
        }

        // Validate if exam ID and max mark are numbers
        if (isNaN(examId) || isNaN(mark) || isNaN(studentId)) {
            setValidationError('Please enter valid numbers for Exam ID, Mark, and Student ID.');
            return;
        }

        const markData = {
            studentId: parseInt(studentId),
            examId: parseInt(examId),
            mark: parseInt(mark),
        };

        try {
            await addMark(markData);
            alert('Mark added successfully');
        } catch (error) {
            console.error('Error adding mark:', error.message);
            alert('Failed to add mark. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Add Mark</h2>
                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                        <div className="mb-3">
                            <label className="form-label">Exam ID:</label>
                            <input
                                type="text"
                                className={`form-control ${validationError && !examId && 'is-invalid'}`}
                                value={examId}
                                onChange={(e) => setExamId(e.target.value)}
                                required
                            />
                            <div className="invalid-feedback">
                                {validationError && !examId ? validationError : 'Please fill in the Exam ID.'}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Student ID:</label>
                            <input
                                type="text"
                                className={`form-control ${validationError && !studentId && 'is-invalid'}`}
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                required
                            />
                            <div className="invalid-feedback">
                                {validationError && !studentId ? validationError : 'Please fill in the Student ID.'}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mark:</label>
                            <input
                                type="text"
                                className={`form-control ${validationError && !mark && 'is-invalid'}`}
                                value={mark}
                                onChange={(e) => setMark(e.target.value)}
                                required
                            />
                            <div className="invalid-feedback">
                                {validationError && !mark ? validationError : 'Please fill in the Mark.'}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMarks;

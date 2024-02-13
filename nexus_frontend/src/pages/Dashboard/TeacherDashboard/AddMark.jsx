import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const AddMarks = () => {
    const [studentId, setStudentId] = useState(0);
    const [examId, setExamId] = useState(0);
    const [mark, setMark] = useState('');
    const [markDetails, setMarkDetails] = useState([]);
    const [StudentDetails, setStudentDetails] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({
        studentId: '',
        examId: '',
        mark: ''
    });
   
    useEffect(() => {
        axios
            .get("http://localhost:5011/api/Exam/GetAll")
            .then((response) => {
                setMarkDetails(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const validateInputs = () => {
        let isValid = true;
        let errors = {};

        if (!studentId) {
            isValid = false;
            errors.studentId = 'Select Student.';
        } else {
            // Assuming StudentDetails is an array of objects with 'name' property
            const selectedStudent = StudentDetails.find(detail => detail.studentId === studentId);
            if (!selectedStudent) {
                isValid = false;
                errors.studentId = 'Invalid student selection.';
            }
        }

        if (!examId) {
            isValid = false;
            errors.examId = 'Select Exam.';
        } else {
            // Assuming markDetails is an array of objects with 'examName' property
            const selectedExam = markDetails.find(detail => detail.examId === examId);
            if (!selectedExam) {
                isValid = false;
                errors.examId = 'Invalid exam selection.';
            }
        }

        if (!mark || mark === '') {
            isValid = false;
            errors.mark = 'Mark is required.';
        }

        setErrorMessages(errors);
        return isValid;
    };

    useEffect(() => {
        axios
            .get("http://localhost:5011/api/Student/GetAll")
            .then((response) => {
                setStudentDetails(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
 
    const handleSubmit = (e) => {
        e.preventDefault();
 
       
        console.log(marks)
        if (!validateInputs()) {
            return;
        }
        var marks = {
            studentId: studentId,
            examId: examId,
            mark: mark,
        };
        axios
            .post("http://localhost:5011/api/Mark/AddMark", marks)
            .then((response) => {
                setSuccessMessage('Mark added successfully!');
                console.log(response.data);
               
                
                // Clear the form fields
                setStudentId(0);
                setExamId(0);
                setMark('');
                  // Optionally, wait a bit before reloading the page
                  setTimeout(() => window.location.reload(),  2000);
            })
            .catch((error) => {
                console.log(error);
            });
            
    };
 
    return (
        <div className="container mt-5">
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Add Mark</h2>
                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3">
                <label className="form-label">Select Exam Name:</label>
                <select
                    className="form-control"
                    value={examId}
                    onChange={(e) => setExamId(parseInt(e.target.value))}
                    required
                >
                    <option value="0">Select Exam</option>
                    {markDetails.map((detail) => (
                        <option key={detail.examId} value={detail.examId}>{detail.examName}</option>
                    ))}
                </select>
                {errorMessages.examId && <span style={{ color: 'red' }}>{errorMessages.examId}</span>}
            </div>
                        <div className="mb-3">
                            <label className="form-label">Select Student Name:</label>
                            <select
                                className="form-control"
                                value={studentId}
                                onChange={(e) => setStudentId(parseInt(e.target.value))}
                                required
                            >
                                <option value="0">Select Student</option>
                                {StudentDetails.map((detail) => (
                                    <option value={detail.studentId}>{detail.name}</option>
                                ))}
                            </select>
                            {errorMessages.studentId && <span style={{ color: 'red' }}>{errorMessages.studentId}</span>}
                        </div>
                        <div className="mb-3">
            <label className="form-label">Mark:</label>
            <input
                type="number"
                className="form-control"
                value={mark}
                onChange={(e) => setMark(e.target.value)}
                required
            />
            {errorMessages.mark && <span style={{ color: 'red' }}>{errorMessages.mark}</span>}
        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
 
export default AddMarks;
import React, { useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap';

const ViewResult = () => {
    // Dummy data for exam results
    const results = [
        { id: 1, examName: 'Midterm Exam', subjectName: 'Mathematics', examDate: '2024-02-15', marksGot: 85, maxMarks: 100 },
        { id: 2, examName: 'Midterm Exam', subjectName: 'Science', examDate: '2024-02-15', marksGot: 75, maxMarks: 100 },
        { id: 3, examName: 'Final Exam', subjectName: 'Mathematics', examDate: '2024-05-20', marksGot: 90, maxMarks: 150 },
        { id: 4, examName: 'Final Exam', subjectName: 'Science', examDate: '2024-05-20', marksGot: 80, maxMarks: 150 },
        // Add more dummy data as needed
    ];

    const [filterExamName, setFilterExamName] = useState('');
    const [filteredResults, setFilteredResults] = useState(results);
    const [examNames, setExamNames] = useState([]);

    useEffect(() => {
        // Get unique exam names
        const uniqueExamNames = [...new Set(results.map(result => result.examName))];
        setExamNames(uniqueExamNames);
    }, [results]);

    useEffect(() => {
        if (filterExamName) {
            setFilteredResults(results.filter(result => result.examName === filterExamName));
        } else {
            setFilteredResults(results);
        }
    }, [filterExamName, results]);

    const handleChange = (event) => {
        setFilterExamName(event.target.value);
    };

    return (
        <div>
            <h2>Exam Results</h2>
            <Form.Group controlId="formExamName">
                <Form.Label>Filter by Exam Name:</Form.Label>
                <Form.Control as="select" value={filterExamName} onChange={handleChange}>
                    <option value="">All</option>
                    {examNames.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Table striped bordered hover responsive="md">
                <thead>
                    <tr>
                        <th>Exam Name</th>
                        <th>Subject Name</th>
                        <th>Exam Date</th>
                        <th>Marks Got</th>
                        <th>Maximum Marks</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.examName}</td>
                            <td>{result.subjectName}</td>
                            <td>{result.examDate}</td>
                            <td>{result.marksGot}</td>
                            <td>{result.maxMarks}</td>
                            <td>{((result.marksGot / result.maxMarks) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ViewResult;

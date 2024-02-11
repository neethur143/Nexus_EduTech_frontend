import React, { useState, useEffect,useContext } from 'react';
import { Table, Form } from 'react-bootstrap';
import axios from 'axios';
import { StudentContext } from './StudentContext'; 
const ViewResult = ({ studentId }) => {
    const [results, setResults] = useState([]);
    const [filterExamName, setFilterExamName] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [examNames, setExamNames] = useState([]);
    const { loggedInStudentId } = useContext(StudentContext);

    useEffect(() => {
        // Fetch student results by ID
        const fetchResults = async () => {
            try {
                const response = await axios.get(`http://localhost:5011/api/Student/ViewResultById/${loggedInStudentId}`);
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching student results:', error);
            }
        };

        fetchResults();
    }, [studentId]);

    useEffect(() => {
        // Get unique exam names
        const uniqueExamNames = [...new Set(results.map(result => result.examName))];
        setExamNames(uniqueExamNames);
        setFilteredResults(results);
    }, [results]);

    const handleChange = (event) => {
        setFilterExamName(event.target.value);
        if (event.target.value) {
            setFilteredResults(results.filter(result => result.examName === event.target.value));
        } else {
            setFilteredResults(results);
        }
    };

    return (
        <div>
            <h2>Student Exam Results</h2>
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
                        <th>Marks Obtained</th>
                        <th>Maximum Marks</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.examName}</td>
                            <td>{result.subjectName}</td>
                            <td>{result.mark}</td>
                            <td>{result.max_Mark}</td>
                            <td>{((result.mark / result.max_Mark) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ViewResult;

import React, { useState, useEffect, useContext } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import axios from 'axios';
// import { StudentContext } from './path-to-your-context/StudentContext';
import { StudentContext } from './StudentContext'; // Update the import path to match your actual location

const ViewStudentDetail = () => {
    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { loggedInStudentId } = useContext(StudentContext); // Access the context value

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get(`http://localhost:5011/api/Student/GetByStudentId/${loggedInStudentId}`);
                setStudent(response.data);
                setIsLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, [loggedInStudentId]); // Only re-run the effect if loggedInStudentId changes

    return (
        <div>
            <h2>Student Details</h2>
            {isLoading ? ( // Display loading spinner if data is still being fetched
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Register No</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Standard</th>
                            <th>Section</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student && (
                            <tr>
                                <td>{student.studentId}</td>
                                <td>{student.name}</td>
                                <td>{student.registrationNumber}</td>
                                <td>{student.gender}</td>
                                <td>{student.dob}</td>
                                <td>{student.address}</td>
                                <td>{student.email}</td>
                                <td>{student.standard}</td>
                                <td>{student.section}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default ViewStudentDetail;

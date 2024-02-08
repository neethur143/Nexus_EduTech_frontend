import React from 'react';
import { Table } from 'react-bootstrap';

const ViewStudentDetail = () => {
    // Dummy table data
    const students = [
        { studentId: 1, name: 'John Doe', registerNo: '123456', gender: 'Male', dob: '2005-05-10', address: '123 Street, City', email: 'john@example.com', standard: 10, section: 'A' },
        { studentId: 2, name: 'Jane Doe', registerNo: '789012', gender: 'Female', dob: '2006-07-15', address: '456 Road, Town', email: 'jane@example.com', standard: 9, section: 'B' },
        // Add more dummy data as needed
    ];

    return (
        <div>
            <h2>Student Details</h2>
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
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.studentId}</td>
                            <td>{student.name}</td>
                            <td>{student.registerNo}</td>
                            <td>{student.gender}</td>
                            <td>{student.dob}</td>
                            <td>{student.address}</td>
                            <td>{student.email}</td>
                            <td>{student.standard}</td>
                            <td>{student.section}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ViewStudentDetail;

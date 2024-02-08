import React from 'react';
import { Table } from 'react-bootstrap';

const ViewExam = () => {
    // Dummy data for exams
    const exams = [
        { id: 1, examName: 'Midterm Exam', subjectName: 'Mathematics', examDate: '2024-02-15', maxMarks: 100 },
        { id: 2, examName: 'Final Exam', subjectName: 'Science', examDate: '2024-05-20', maxMarks: 150 },
        // Add more dummy data as needed
    ];

    return (
        <div>
            <h2>Exam Details</h2>
            <Table striped bordered hover responsive="md">
                <thead>
                    <tr>
                        <th>Exam Name</th>
                        <th>Subject Name</th>
                        <th>Exam Date</th>
                        <th>Maximum Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {exams.map((exam, index) => (
                        <tr key={index}>
                            <td>{exam.examName}</td>
                            <td>{exam.subjectName}</td>
                            <td>{exam.examDate}</td>
                            <td>{exam.maxMarks}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ViewExam;

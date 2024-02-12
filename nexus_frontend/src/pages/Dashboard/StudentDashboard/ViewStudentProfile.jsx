import React, { useState, useEffect, useContext } from 'react';
import { Form, Spinner, Container, Row, Col } from 'react-bootstrap';
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
        <Container className="my-5">
            <h2 className="mb-4 text-center">Student Details</h2>
            <div className="student-details-box p-4 border rounded" style={{ borderColor: '#Be25a6' }}>
                {isLoading ? ( // Display loading spinner if data is still being fetched
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="studentId">
                                    <Form.Label>Student ID</Form.Label>
                                    <Form.Control type="text" value={student && student.studentId} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={student && student.name} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="registrationNumber">
                                    <Form.Label>Register No</Form.Label>
                                    <Form.Control type="text" value={student && student.registrationNumber} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="gender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control type="text" value={student && student.gender} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="dob">
                                    <Form.Label>DOB</Form.Label>
                                    <Form.Control type="text" value={student && student.dob} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" value={student && student.address} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={student && student.email} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="standard">
                                    <Form.Label>Standard</Form.Label>
                                    <Form.Control type="text" value={student && student.standard} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="section">
                                    <Form.Label>Section</Form.Label>
                                    <Form.Control type="text" value={student && student.section} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                )}
            </div>
        </Container>
    );
};

export default ViewStudentDetail;

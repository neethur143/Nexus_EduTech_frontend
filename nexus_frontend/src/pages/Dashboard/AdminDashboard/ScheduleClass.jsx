import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ScheduleClass = () => {
    // const [standard, setStandard] = useState('');
    // const [division, setDivision] = useState('');

    const [teacher, setTeacher] = useState('');
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [classId, setClassId] = useState('');

    // Dummy data for dropdowns
    // const standards = ['1st', '2nd', '3rd', '4th', '5th'];
    // const divisions = ['A', 'B', 'C'];
    const teacherList = [
        { id: 1, name: 'Teacher 1' },
        { id: 2, name: 'Teacher 2' },
        { id: 3, name: 'Teacher 3' }
    ];
    const subjects = ['Math', 'Science', 'English'];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                {/* <Form.Group controlId="standard">
                    <Form.Label>Select Standard</Form.Label>
                    <Form.Control as="select" onChange={(e) => setStandard(e.target.value)}>
                        <option value="">Select...</option>
                        {standards.map((std, index) => (
                            <option key={index} value={std}>{std}</option>
                        ))}
                    </Form.Control>
                </Form.Group> */}
                {/* 
                <Form.Group controlId="division">
                    <Form.Label>Select Division</Form.Label>
                    <Form.Control as="select" onChange={(e) => setDivision(e.target.value)}>
                        <option value="">Select...</option>
                        {divisions.map((div, index) => (
                            <option key={index} value={div}>{div}</option>
                        ))}
                    </Form.Control>
                </Form.Group> */}

                <Form.Group controlId="classId">
                    <Form.Label>Class ID</Form.Label>
                    <Form.Control type="text" value={classId} onChange={(e) => setClassId(e.target.value)} />
                </Form.Group>


                <Form.Group controlId="teacher">
                    <Form.Label>Select Teacher</Form.Label>
                    <Form.Control as="select" onChange={(e) => setTeacher(e.target.value)}>
                        <option value="">Select...</option>
                        {teacherList.map((t) => (
                            <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="subject">
                    <Form.Label>Select Subject</Form.Label>
                    <Form.Control as="select" onChange={(e) => setSubject(e.target.value)}>
                        <option value="">Select...</option>
                        {subjects.map((subj, index) => (
                            <option key={index} value={subj}>{subj}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="time">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>




        </div>
    );
};

export default ScheduleClass;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ScheduleClass = () => {
    const dummyData = [
        { standard: '1', section: 'A', classId: 101 },
        { standard: '1', section: 'B', classId: 102 },
        { standard: '2', section: 'A', classId: 201 },
        { standard: '2', section: 'B', classId: 202 },
        // ... other standards and sections
    ];

    const dummySubject = [
        { subjectId: 10, Subject: 'English' },
        { subjectId: 11, Subject: 'Maths' },
        { subjectId: 12, Subject: 'Biology' },
        { subjectId: 13, Subject: 'Evs' },
    ];

    const [standard, setStandard] = useState('');
    const [section, setSection] = useState('');
    const [classId, setClassId] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [teacherId, setTeacherId] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);

    useEffect(() => {
        if (standard && section) {
            const selectedClass = dummyData.find(data => data.standard === standard && data.section === section);
            if (selectedClass) {
                setClassId(selectedClass.classId);
            } else {
                setClassId('');
            }
        }
    }, [standard, section]);

    useEffect(() => {
        axios
            .get("http://localhost:5011/api/Teacher/GetAll")
            .then((response) => {
                setTeachers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (standard && section && teacherId && time && date && subjectId) {
            let scheduleclass = {
                classId: classId,
                teacherId: parseInt(teacherId),
                sessionTime: time,
                sessionDate: date,
                subjectId: parseInt(subjectId),
            };
            console.log(scheduleclass);
            axios
                .post("http://localhost:5011/api/ScheduleClass/AssignTeacher", scheduleclass)
                .then((response) => {
                    console.log(response.data);
                    // Reset form fields after successful submission
                    setStandard('');
                    setSection('');
                    setTeacherId('');
                    setTime('');
                    setDate('');
                    setSubjectId('');
                    setSuccessAlert(true);
                    setTimeout(() => {
                        setSuccessAlert(false);
                    }, 3000); // Hide success alert after 3 seconds
                })
                .catch((error) => console.log(error));
        } else {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000); // Hide validation alert after 3 seconds
        }
    };

    // Extracting unique standard values
    const uniqueStandards = [...new Set(dummyData.map(data => data.standard))];

    return (
        <div>
            <h2 className='text-center'>Schedule Class</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="standard">
                    <Form.Label>Select Standard</Form.Label>
                    <Form.Control as="select" onChange={(e) => setStandard(e.target.value)} value={standard}>
                        <option value="">Select...</option>
                        {uniqueStandards.map((std, index) => (
                            <option key={index} value={std}>{std}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="section">
                    <Form.Label>Select Section</Form.Label>
                    <Form.Control as="select" onChange={(e) => setSection(e.target.value)} value={section}>
                        <option value="">Select...</option>
                        {dummyData
                            .filter(data => data.standard === standard)
                            .map((data, index) => (
                                <option key={index} value={data.section}>{data.section}</option>
                            ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="teacher">
                    <Form.Label>Select Teacher</Form.Label>
                    <Form.Control as="select" onChange={(e) => setTeacherId(e.target.value)} value={teacherId}>
                        <option value="">Select...</option>
                        {teachers.map((teacher) => (
                            <option key={teacher.teacherId} value={teacher.teacherId}>{teacher.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="subject">
                    <Form.Label>Select Subject</Form.Label>
                    <Form.Control as="select" onChange={(e) => setSubjectId(e.target.value)} value={subjectId}>
                        <option value="">Select...</option>
                        {dummySubject.map((subj) => (
                            <option key={subj.subjectId} value={subj.subjectId}>{subj.Subject}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="time">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {showAlert && <Alert variant="danger">All fields are required!</Alert>}
            {successAlert && <Alert variant="success">Schedule class successfully!</Alert>}
        </div>
    );
};

export default ScheduleClass;

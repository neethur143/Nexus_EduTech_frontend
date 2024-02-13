import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
 
const ViewScheduleClass = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [scheduledetails, setSchedule] = useState([]);
    const [scheduleId, setScheduleId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');
    // const [teacherid,setTeacherId] = useState(null);
    // const [teacherDetails, setTeacherDetails] = useState({});
    const [formValues, setFormValues] = useState({
        classId: '',
        subjectId: '',
        sessionTime: '',
        teacherId: '',
        sessionDate: ''
    });
    const dummyData = [
        { classId: 101, standard: '1', section: 'A' },
        { classId: 102, standard: '1', section: 'B' },
        { classId: 103, standard: '1', section: 'C' },
        { classId: 104, standard: '1', section: 'D' },
        { classId: 201, standard: '2', section: 'A' },
        { classId: 202, standard: '2', section: 'B' },
        { classId: 203, standard: '2', section: 'C' },
        { classId: 204, standard: '2', section: 'D' },
        { classId: 301, standard: '3', section: 'A' },
        { classId: 302, standard: '3', section: 'B' },
        { classId: 303, standard: '3', section: 'C' },
        { classId: 304, standard: '3', section: 'D' },
        { classId: 401, standard: '4', section: 'A' },
        { classId: 402, standard: '4', section: 'B' },
        { classId: 403, standard: '4', section: 'C' },
        { classId: 404, standard: '4', section: 'D' }
        // ... other standards and sections
    ];
 
    const dummySubject = [
        { subjectId: 10, Subject: 'English' },
        { subjectId: 11, Subject: 'Maths' },
        { subjectId: 12, Subject: 'Biology' },
        { subjectId: 13, Subject: 'Evs' },
    ];
 
    const getSubjectName = (subjectId) => {
        const subject = dummySubject.find(subj => subj.subjectId === subjectId);
        return subject ? subject.Subject : 'Unknown';
    };
 
    const getStandardSection = (classId) => {
        const detail = dummyData.find(det => det.classId === classId);
        return detail ? `${detail.standard} ${detail.section}` : 'Unknown';
    };
    useEffect(() => {
        axios
            .get("http://localhost:5011/api/ScheduleClass/ViewSchedule")
            .then((response) => {
                console.log(response.data);
                setSchedule(response.data);
                // Retrieve the ScheduleClassId from the response and store it
                if (response.data.length > 0) {
                    let scheduleClassId = response.data[0].scheduleClassId;
                    console.log(scheduleClassId);
                }
            })
            .catch((error) => {
                console.log(error);
            });
                             
        }, []);
 
   
    const handleEdit = (index) => {
        setSelectedRow(scheduledetails[index]);
        setFormValues(scheduledetails[index]);
        setScheduleId(scheduledetails[index].scheduleClassId); // Assuming the property name is correct
    };
 
    const handleDelete = (id) => {
        axios
            .delete("http://localhost:5011/api/ScheduleClass/DeleteScheduleClass/" + id)
            .then((response) => {
                console.log(response.data);
                setSuccessMessage("Deleted Successfully");
                setTimeout(() => setSuccessMessage(''),  3000);
               
                // Filter out the deleted item from the scheduledetails state
                const updatedScheduleDetails = scheduledetails.filter(detail => detail.scheduleClassId !== id);
                setSchedule(updatedScheduleDetails);
            })
            .catch((error) => console.log(error));
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with updated values:", formValues);
       
        // Construct the URL with the scheduleId included
        const url = `http://localhost:5011/api/ScheduleClass/EditScheduleClass/${scheduleId}`;
       
        axios
            .put(url, formValues) // Pass formValues as the body of the request
            .then((response) => {
                console.log(response.data);
                setSuccessMessage('Updated Successfully');
                setTimeout(() => setSuccessMessage(''),  3000);
                // Optionally, clear the form or perform other actions upon success
            })
            .catch((error) => console.log(error));
    };
 
 
    return (
        <div>
            <h2>View Schedule Class</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
{successMessage && <div className="alert alert-success">{successMessage}</div>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Standard & Section</th>
                        <th>Subject Name</th>
                        <th>Time</th>
                        <th>Teacher Id</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduledetails.map((item, index) => {
                        const sessiondob = item.sessionDate ? new Date(item.sessionDate).toLocaleDateString() : '';
                        return (
                            <tr key={index}>
                                <td>{getStandardSection(item.classId)}</td>
                                <td>{getSubjectName(item.subjectId)}</td>
                                <td>{item.sessionTime}</td>
                                <td>{item.teacherId}</td>
                                <td>{sessiondob}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(index)}>Edit</Button>{' '}
                                    <Button variant="danger" onClick={() => handleDelete(item.scheduleClassId)}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            {selectedRow && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formClassId">
                        <Form.Label>Class ID</Form.Label>
                        <Form.Control type="text" name="classId" value={formValues.classId} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formSubjectId">
                        <Form.Label>Subject Name</Form.Label>
                        <Form.Control as="select" name="subjectId" value={formValues.subjectId} onChange={handleChange}>
                            {dummySubject.map(subject => (
                                <option key={subject.subjectId} value={subject.subjectId}>
                                    {subject.Subject}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formSessionTime">
                        <Form.Label>Session Time</Form.Label>
                        <Form.Control type="text" name="sessionTime" value={formValues.sessionTime} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formTeacherId">
                        <Form.Label>Teacher ID</Form.Label>
                        <Form.Control type="text" name="teacherId" value={formValues.teacherId} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formSessionDate">
                        <Form.Label>Session Date</Form.Label>
                        <Form.Control type="text" name="sessionDate" value={formValues.sessionDate} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            )}
        </div>
    );
};
 
export default ViewScheduleClass;
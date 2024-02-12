import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const ViewScheduleClass = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [scheduledetails, setSchedule] = useState([]);
    const [scheduleId, setScheduleId] = useState(null);
    const [formValues, setFormValues] = useState({
        classId: '',
        subjectId: '',
        sessionTime: '',
        teacherId: '',
        sessionDate: ''
    });

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
        // Set selected row details to form values
        setSelectedRow(scheduledetails[index]);
        setFormValues(scheduledetails[index]);
    };

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:5011/api/ScheduleClass/DeleteScheduleClass/"+id)
            .then((response) => {
              console.log(response.data);
              alert("Delete Successfully")
            })
            .catch((error) => console.log(error));
        };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement update functionality
        console.log("Form submitted with updated values:", formValues);
        // let schedule = {
        //     classId: classId,
        //     teacherId: teacherId,
        //     sessionTime: sessionTime,
        //     sessionDate: section,
        //     subjectId: sessionDate,
        //   };
          axios
            .put("http://localhost:5011/api/ScheduleClass/EditScheduleClass/"+formValues)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => console.log(error));
        };


    return (
        <div>
            <h2>View Schedule Class</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Class ID</th>
                        <th>Subject</th>
                        <th>Time</th>
                        <th>Teacher</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduledetails.map((item, index) => {
                        const sessiondob = item.sessionDate ? new Date(item.sessionDate).toLocaleDateString() : '';
                        return (
                            <tr key={index}>
                                <td>{item.classId}</td>
                                <td>{item.subjectId}</td>
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
                        <Form.Label>Subject ID</Form.Label>
                        <Form.Control type="text" name="subjectId" value={formValues.subjectId} onChange={handleChange} />
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
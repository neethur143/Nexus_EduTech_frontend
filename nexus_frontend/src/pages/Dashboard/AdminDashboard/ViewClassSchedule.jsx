import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ViewScheduleClass = () => {
    const [scheduleData, setScheduleData] = useState([
        { id: 1, classId: '1A', teacher: 'Teacher 1', subject: 'Math', time: '9:00 AM', date: '2024-02-08' },
        { id: 2, classId: '2B', teacher: 'Teacher 2', subject: 'Science', time: '10:00 AM', date: '2024-02-09' },
        { id: 3, classId: '3C', teacher: 'Teacher 3', subject: 'English', time: '11:00 AM', date: '2024-02-10' }
    ]);

    const [showEditModal, setShowEditModal] = useState(false);
    const [editData, setEditData] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleEdit = (id) => {
        const data = scheduleData.find(item => item.id === id);
        setEditData(data);
        setShowEditModal(true);
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowDeleteModal(true);
    };

    const handleEditSubmit = () => {
        // Handle edit submission
        setShowEditModal(false);
    };

    const handleDeleteConfirm = () => {
        // Handle delete confirmation
        const newData = scheduleData.filter(item => item.id !== deleteId);
        setScheduleData(newData);
        setShowDeleteModal(false);
    };

    return (
        <div>
            <h2>View Schedule Class</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Class ID</th>
                        <th>Teacher</th>
                        <th>Subject</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduleData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.classId}</td>
                            <td>{item.teacher}</td>
                            <td>{item.subject}</td>
                            <td>{item.time}</td>
                            <td>{item.date}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleEdit(item.id)}>Edit</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Schedule</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Edit form fields */}
                        {/* For example: */}
                        <Form.Group controlId="formClassId">
                            <Form.Label>Class ID</Form.Label>
                            <Form.Control type="text" defaultValue={editData.classId} />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleEditSubmit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Schedule</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this schedule?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ViewScheduleClass;

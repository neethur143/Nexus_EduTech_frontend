import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ViewTimeTable = () => {
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
            <h2>View TimeTable</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    
                        <th>Teacher</th>
                        <th>Subject</th>
                        <th>Time</th>
                        <th>Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {scheduleData.map((item, index) => (
                        <tr key={index}>
                           
                            <td>{item.teacher}</td>
                            <td>{item.subject}</td>
                            <td>{item.time}</td>
                            <td>{item.date}</td>
                          
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ViewTimeTable;

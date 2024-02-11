import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const ViewTimeTableTeacher= () => {
    const [scheduleData, setScheduleData] = useState([]);
    const [teachersData, setTeachersData] = useState([]);
    const [classesData, setClassesData] = useState([]);
    const [subjectsData, setSubjectsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch schedule data
                const scheduleResponse = await axios.get('http://localhost:5011/api/ScheduleClass/ViewSchedule');
                setScheduleData(scheduleResponse.data);

                const teachersResponse = await axios.get('http://localhost:5011/api/Teacher/GetAll');
                setTeachersData(teachersResponse.data);

                // Fetch classes data
                const classesResponse = [
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
                ];
                setClassesData(classesResponse);

                // Fetch subjects data
                const subjectsResponse = [
                    { subjectId: 10, name: 'Maths' },
                    { subjectId: 11, name: 'English' },
                    { subjectId: 12, name: 'Biology' },
                    { subjectId: 13, name: 'Evs' }
                ];
                setSubjectsData(subjectsResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const getTeacherName = (teacherId) => {
        const teacher = teachersData.find(teacher => teacher.teacherId === teacherId);
        return teacher ? teacher.name : 'Unknown';
    };

    const getClassName = (classId) => {
        const classData = classesData.find(item => item.classId === classId);
        return classData ? `${classData.standard}${classData.section}` : 'Unknown';
    };

    const getSubjectName = (subjectId) => {
        const subjectData = subjectsData.find(item => item.subjectId === subjectId);
        return subjectData ? subjectData.name : 'Unknown';
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <h2>View TimeTable</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Standard</th>  
                        <th>Subject</th>               
                        <th>Teacher</th>                     
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduleData.map((item, index) => (
                        <tr key={index}>
                            <td>{getClassName(item.classId)}</td>
                            <td>{getSubjectName(item.subjectId)}</td>
                            <td>{getTeacherName(item.teacherId)}</td>
                            <td>{item.sessionTime}</td>
                            <td>{formatDate(item.sessionDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ViewTimeTableTeacher;

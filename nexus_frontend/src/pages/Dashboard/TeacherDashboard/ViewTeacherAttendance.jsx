import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TeacherContext } from './TeacherContext';

const ViewAttendanceTeacher = () => {
    const [attendanceData, setAttendanceData] = useState({});
    const [attendancePercentage, setAttendancePercentage] = useState(0);
    const { loggedInTeacherId } = useContext(TeacherContext);

    useEffect(() => {
        const fetchAttendance = async () => {
            if (!loggedInTeacherId) return; // Exit early if loggedInStudentId is not available
            try {
              const response = await axios.get(`http://localhost:5011/api/TeacherAttendence/ GetTeacherAttendenceById/${loggedInTeacherId}`);
              setAttendanceData(response.data);
            } catch (error) {
              console.error('Error fetching teacher attendance:', error);
            }
          };
          
    
        fetchAttendance();
    }, [loggedInTeacherId]); // <-- Change 'studentId' to 'loggedInStudentId'
    

    useEffect(() => {
        // Calculate attendance percentage when attendanceData changes
        const { totalWorkingDays, noOfPresent } = attendanceData;
        if (totalWorkingDays > 0) {
            const percentage = (noOfPresent / totalWorkingDays) * 100;
            setAttendancePercentage(percentage.toFixed(2));
        }
    }, [attendanceData]);

    return (
        <div>
            <h2>Teacher Attendance</h2>
            <p>Total Working Days: {attendanceData.totalWorkingDays || 0}</p>
            <p>No. of Present: {attendanceData.noOfPresent || 0}</p>
            <p>No. of Absent: {attendanceData.noOfAbsent || 0}</p>
            <p>Attendance Percentage: {attendancePercentage}%</p>
        </div>
    );
};

export default ViewAttendanceTeacher;

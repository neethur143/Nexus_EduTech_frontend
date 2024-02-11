import React from 'react';
import StudentSidebar from './Stu_sidebar';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import ViewStudentDetail from './ViewStudentProfile';
import ViewExam from './ViewExam';
import ViewResult from './ViewResult';
import ViewTimeTable from './ViewTimetable';
import { Routes, Route } from 'react-router-dom';
import ViewAttendance from './ViewAttendance';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <Navbar/>
      <div className="student-main-content" style={{ marginTop: '60px' }}>
        <div className="col-md-3">
          <div className="sidebar-wrapper bg-primary text-white p-4">
            <StudentSidebar/>
          </div>
        </div>
        <div className="col-md-9">
          <div className="content-wrapper p-4">
            <Routes>
              <Route path="/student/viewStudentProfile" element={<ViewStudentDetail/>} />
              <Route path="/student/viewExam" element={<ViewExam/>} />
              <Route path="/student/viewResult" element={<ViewResult/>} />
              <Route path="/student/viewAttendanceList" element={<ViewAttendance/>} />
              <Route path="/student/viewTimeTableList" element={<ViewTimeTable/>}/>             
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;

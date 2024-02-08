import React from 'react';
import StudentSidebar from './/Stu_sidebar';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import ViewStudentDetail from './ViewStudentProfile';
import ViewExam from './ViewExam';
import ViewResult from './ViewResult';
import ViewTimeTable from './ViewTimetable';
// import DashboardContent from './DashboardContent';
// import ProfileContent from './ProfileContent';
import { Routes, Route } from 'react-router-dom';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
<Navbar/>
      <div className="student-main-content">
        <StudentSidebar/>
        <Routes>
          <Route path="/student/viewStudentProfile" element={<ViewStudentDetail/>} />
          <Route path="/student/viewExam" element={<ViewExam/>} />
          <Route path="/student/viewResult" element={<ViewResult/>} />
          {/* <Route path="/student/viewAttendanceList" element={} /> */}
          <Route path="/student/viewTimeTableList" element={<ViewTimeTable/>}/>             
        </Routes>
      </div>
    </div>
  );
}

export default StudentDashboard;
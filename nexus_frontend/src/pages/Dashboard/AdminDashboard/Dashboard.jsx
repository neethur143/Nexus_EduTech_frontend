// AdminDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSideBar from './SideBar';
import Navbar from '../Navbar';
import AddStudent from './AddStudent';
import ViewStudentDetail from '../StudentDashboard/ViewStudentProfile';
import AddTeacher from './AddTeacher';
import ViewTeacher from './ViewTeacher';
import ViewClass from './ViewClass';
import ViewStandard from './ViewStandard';
import ViewSubject from './ViewSubject';
import ScheduleClass from './ScheduleClass';
import ViewScheduleClass from './ViewClassSchedule';
import AddExam from './AddExam';
import ViewExam from './ViewExam';
import Communication from './Announcement';
import StudentDetails from './ViewStudent';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <AdminSideBar/>
      <div className="admin-main-content">
    <Navbar/>
        <Routes>
          <Route path="/admin/addStudent" element={<AddStudent/>} />
          <Route path="/admin/viewStudent" element={<StudentDetails/>} />
          <Route path="/admin/addTeacher" element={<AddTeacher/>} />
          <Route path="/admin/viewTeacher" element={<ViewTeacher/>} />
          <Route path="/admin/viewClass" element={<ViewClass/>}/>
          <Route path="/admin/viewStandard" element={<ViewStandard/>}/>
          <Route path="/admin/viewSubject" element={<ViewSubject/>}/>
          {/* <Route path="/admin/viewAttendance" element={}/> */}
          <Route path="/admin/Scheduleclass" element={<ScheduleClass/>}/>
          <Route path="/admin/viewScheduleclass" element={<ViewScheduleClass/>}/>
          <Route path="/admin/addExam" element={<AddExam/>}/>
          <Route path="/admin/viewExam" element={<ViewExam/>}/>
          <Route path="/admin/Communication" element={<Communication/>}/>
       
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;

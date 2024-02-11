import React from 'react';
import Navbar from '../Navbar'; 
import TeacherSidebar from './tea_sidebar'; 
import { Routes, Route } from 'react-router-dom';
import AddMarks from './AddMark';
import UpdateMarks from './UpdateMark';
import ViewTimeTableTeacher from './ViewTimetableTeacher';
// import teacherTakeAttendance from './TakeAttendance';
function TeacherDashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
            <Navbar />             
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <TeacherSidebar />
                    <div className="container">
                    <Routes>
          {/* <Route path="/takeAttendance" element={<teacherTakeAttendance/>} /> */}
          <Route path="/addmark" element={<AddMarks/>} />
          <Route path="/updatemark" element={<UpdateMarks/>} />
          <Route path="/viewtimetableteacher" element={<ViewTimeTableTeacher/>} />
          
          </Routes>            
                    </div>
                </main>
            </div>
        </div>
    );
}

export default TeacherDashboard;

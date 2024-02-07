import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Home from './pages/Home';
 import Header from '../src/component/Header';
 import Footer from '../src/component/Footer';
import StudentDashboard from '../src/pages/Dashboard/StudentDashboard/Student_dashboard'; 
import TeacherDashboard from './pages/Dashboard/TeacherDashboard/Teacher_Dashboard';
import Dashboard from './pages/Dashboard/AdminDashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>     
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        {/* <Route path="/student/profile" element={<StudentProfile />} /> // Assuming you have a StudentProfile component
        <Route path="/student/courses" element={<StudentCourses />} /> // Assuming you have a StudentCourses component
        <Route path="/student/grades" element={<StudentGrades />} /> // Assuming you have a StudentGrades component */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/admin/dashboard" element={Dashboard} />
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
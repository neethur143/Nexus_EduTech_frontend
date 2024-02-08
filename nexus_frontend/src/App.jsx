// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/AdminDashboard/Dashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard/Student_dashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard/Teacher_Dashboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/admin/*" element={<Dashboard/>} />
        <Route path="/student/*" element={<StudentDashboard/>} />
        <Route path="/teacher/*" element={<TeacherDashboard/>} />
      </Routes>
    </Router>
    
  );
}

export default App;

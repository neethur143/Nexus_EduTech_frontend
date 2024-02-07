import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from '../src/component/Header';
import StudentDashboard from '../src/pages/Dashboard/StudentDashboard/Student_dashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard/Teacher_Dashboard';
import Dashboard from './pages/Dashboard/AdminDashboard/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import StudentDetails from './pages/Dashboard/AdminDashboard/ViewStudent';
import AddStudent from './pages/Dashboard/AdminDashboard/AddStudent';
import AddTeacher from './pages/Dashboard/AdminDashboard/AddTeacher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/admin/dashboard" element={<Dashboard />} >
          {/* admin home */}
         
          {/* <Route index element={<AddTeacher />} />
          <Route path="studenttbl" element={<StudentDetails />} />
          <Route path="addstudent" element={<AddStudent/>}/>
          <Route path="addteacher" element={<AddTeacher/>}/> */}
        </Route>




      </Routes>
    </BrowserRouter>
  );
}

export default App;
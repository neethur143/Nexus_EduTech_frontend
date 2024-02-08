import React from 'react';
import { Link } from 'react-router-dom'
const AdminSideBar = () => {
    return (

        <div style={{ position: "fixed" }} className="main-menu menu-dark menu-fixed menu-shadow menu-border menu-accordion">
        <div className="main-menu-content">
          <ul id="main-menu-navigation" data-menu="menu-navigation" className="navigation navigation-main">
            <li className="nav-item">
              <Link to="/admin">
                <i className="icon-home3"></i>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>         
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Student</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="admin/addStudent" className="menu-item">Add Student</Link>
                </li>
                <li>
                  <Link to="admin/viewStudent" className="menu-item">View Student</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Teacher</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="admin/addTeacher" className="menu-item">Add Teacher</Link>
                </li>
                <li>
                  <Link to="admin/viewTeacher" className="menu-item">View Teacher</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Class</span>
              </a>
              <ul className="menu-content">              
                <li>
                  <Link to="admin/viewClass" className="menu-item">View Class</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Standard</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="admin/viewStandard" className="menu-item">View Standard</Link>
                </li>
              </ul>
            </li>
           
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Subject</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="admin/viewSubject" className="menu-item">View Subject</Link>
                </li>
              </ul>
            </li>         
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Attendance</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="admin/viewAttendance" className="menu-item">View Attendance</Link>
                </li>
              </ul>
            </li>           
            
                   
        
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Schedule Class</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="admin/Scheduleclass" className="menu-item">Schedule Class</Link>
                </li>
                <li>
                  <Link to="admin/viewScheduleclass" className="menu-item">View Schedule Class</Link>
                </li>
              </ul>
            </li>
            <li className="navigation-header">
              <span>EXAM & RESULT</span>
              <i className="icon-ellipsis"></i>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Exam</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="admin/addExam" className="menu-item">Add Exam</Link>
                </li>
                <li>
                  <Link to="admin/viewExam" className="menu-item">View Exam</Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Question Paper</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="/admin/addQuePaper" className="menu-item">Add Question Paper</Link>
                </li>
                <li>
                  <Link to="/admin/viewQuePaper" className="menu-item">View Question Paper</Link>
                </li>
              </ul>
            </li> */}                            
            <li className="nav-item">
              <a href="#">
                <i className="icon-stack-2"></i>
                <span className="menu-title">Communication</span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="admin/Communication" className="menu-item">Add Message</Link>
                </li>
              </ul>
            </li>           
          </ul>
        </div>
      </div>
          );
   
};


export default AdminSideBar;

import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
const AdminSideBar = () => {
    return (
      <>
   
      <div>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white border border-dark" style={{ marginTop: "56px",marginLeft:'12px',position:'fixed',top:0,left: 0,right: 0, zIndex:100 }}>
          <div className="position-fixed  ">
            <div className="list-group list-group-flush mx-4  border border-dark mw-100">
              <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                <i className="fas fa-tachometer-alt fa-fw "/> <span className="menu-title">Admin Dashboard</span>
              </a>
            </div>
            <br />
 
           
 
            <div className='justify-content-center align-items-centerd-lg '>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Student
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3" /><span><Link to="addStudent" className="menu-item">Add Student</Link></span></a></li>
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-line fa-fw me-3" /><span><Link to="viewStudent" className="menu-item">View Student</Link></span></a></li>
              </ul>
            </div>
              <br />
 
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Teacher
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3" /><span><Link to="addTeacher" className="menu-item">Add Teacher</Link></span></a></li>
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-globe fa-fw me-3" /><span><Link to="viewTeacher" className="menu-item">View Teacher</Link></span></a></li>
              </ul>
              </div>
         
              <br />
 
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Class
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-building fa-fw me-3" /><span> <Link to="viewClass" className="menu-item">View Class</Link></span></a></li>
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-calendar fa-fw me-3" /><span><Link to="viewStandard" className="menu-item">View Standard</Link></span></a></li>
              </ul>
              </div>
       
              <br />
             
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Subject
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3" /><span><Link to="viewSubject" className="menu-item">View Subject</Link></span></a></li>
              </ul>
              </div>
 
              <br />
 
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle mx-5 mt-3  bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Attendance
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span><Link to="AddAttendanceTeacher" className="menu-item">Add Attendance Teacher</Link></span></a></li>
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span><Link to="viewAttendanceTeacher" className="menu-item">View Attendance Teacher</Link></span></a></li>
              </ul>
             
              </div>
 
       
              <br />
             
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle mx-5 mt-3  bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Class Schedule
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span><Link to="Scheduleclass" className="menu-item">Schdule Class</Link></span></a></li>
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span><Link to="viewScheduleclass" className="menu-item">View Schedule Class</Link></span></a></li>
              </ul>
              </div>
              <br />
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle mx-5 mt-3  bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Exam
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span><Link to="addExam" className="menu-item">Add Exam</Link></span></a></li>
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span><Link to="viewExam" className="menu-item">View Exam</Link></span></a></li>
              </ul>
              </div>
              <br />

 
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Communication
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span> <Link to="Communication" className="menu-item">Add Announcement</Link></span></a></li>
              </ul>
              </div>
              <br />
            </div>
          </div>
        </nav>
      </div>
     
      <Navbar />
    </>

          );
   
};



export default AdminSideBar;

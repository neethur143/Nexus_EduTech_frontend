import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
const AdminSideBar = () => {
    return (

      //   <div style={{ position: "fixed" }} className="main-menu menu-dark menu-fixed menu-shadow menu-border menu-accordion">
      //   <div className="main-menu-content">
      //     <ul id="main-menu-navigation" data-menu="menu-navigation" className="navigation navigation-main">
      //       <li className="nav-item">
      //         <Link to="/admin">
      //           <i className="icon-home3"></i>
      //           <span className="menu-title">Dashboard</span>
      //         </Link>
      //       </li>         
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Student</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="admin/addStudent" className="menu-item">Add Student</Link>
      //           </li>
      //           <li>
      //             <Link to="viewStudent" className="menu-item">View Student</Link>
      //           </li>
      //         </ul>
      //       </li>
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Teacher</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="admin/addTeacher" className="menu-item">Add Teacher</Link>
      //           </li>
      //           <li>
      //             <Link to="admin/viewTeacher" className="menu-item">View Teacher</Link>
      //           </li>
      //         </ul>
      //       </li>
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Class</span>
      //         </a>
      //         <ul className="menu-content">              
      //           <li>
      //             <Link to="admin/viewClass" className="menu-item">View Class</Link>
      //           </li>
      //         </ul>
      //       </li>
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Standard</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="admin/viewStandard" className="menu-item">View Standard</Link>
      //           </li>
      //         </ul>
      //       </li>
           
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Subject</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="admin/viewSubject" className="menu-item">View Subject</Link>
      //           </li>
      //         </ul>
      //       </li>         
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Attendance</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="admin/viewAttendance" className="menu-item">View Attendance</Link>
      //           </li>
      //         </ul>
      //       </li>           
            
                   
        
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Schedule Class</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="admin/Scheduleclass" className="menu-item">Schedule Class</Link>
      //           </li>
      //           <li>
      //             <Link to="admin/viewScheduleclass" className="menu-item">View Schedule Class</Link>
      //           </li>
      //         </ul>
      //       </li>
      //       <li className="navigation-header">
      //         <span>EXAM & RESULT</span>
      //         <i className="icon-ellipsis"></i>
      //       </li>
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Exam</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="admin/addExam" className="menu-item">Add Exam</Link>
      //           </li>
      //           <li>
      //             <Link to="admin/viewExam" className="menu-item">View Exam</Link>
      //           </li>
      //         </ul>
      //       </li>
      //       {/* <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Question Paper</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="/admin/addQuePaper" className="menu-item">Add Question Paper</Link>
      //           </li>
      //           <li>
      //             <Link to="/admin/viewQuePaper" className="menu-item">View Question Paper</Link>
      //           </li>
      //         </ul>
      //       </li> */}                            
      //       <li className="nav-item">
      //         <a href="#">
      //           <i className="icon-stack-2"></i>
      //           <span className="menu-title">Communication</span>
      //         </a>
      //         <ul className="menu-content">
      //           <li>
      //             <Link to="admin/Communication" className="menu-item">Add Message</Link>
      //           </li>
      //         </ul>
      //       </li>           
      //     </ul>
      //   </div>
      // </div>
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

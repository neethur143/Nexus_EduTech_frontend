import React from 'react';
import { Link } from 'react-router-dom'
const AdminSideBar = () => {
    return (
        // <div className="container-fluid">
        //     <div className="row">
        //         {/* Add 'collapse' class to hide the sidebar by default on smaller screens */}
        //         <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
        //             <div className="sidebar-sticky pt-3">
        //                 <ul className="nav flex-column">
        //                     <li className="nav-item ">
        //                         <a className="nav-link active fs-4" href="#">
        //                             <span data-feather="home" />
        //                             Dashboard <span className="sr-only"></span>
        //                         </a>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link dropdown-toggle fs-4" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             <span data-feather="users"></span>
        //                             Users
        //                         </a>
        //                         <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">

        //                             <li><a className="dropdown-item text-center" href="#">Student</a></li>
        //                             {/* <li><a className="dropdown-item text-center" href="#">Teacher</a> </li> */}
        //                             <li><a className="dropdown-item text-center" ></a><Link to="/studenttbl">Teacher</Link></li>
        //                         </ul>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link fs-4" href="#">
        //                             <span data-feather="exams" />
        //                             Examination
        //                         </a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link fs-4" href="#">
        //                             <span data-feather="classes" />
        //                             Classes
        //                         </a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link fs-4" href="#">
        //                             <span data-feather="results" />
        //                             Results
        //                         </a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link fs-4" href="#">
        //                             <span data-feather="settings" />
        //                             Settings
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </nav>
        //     </div>
        // </div>

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
                  <Link to="/admin/addStudentManually" className="menu-item">Add Student</Link>
                </li>
                <li>
                  <Link to="/admin/viewStudent" className="menu-item">View Student</Link>
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
                  <Link to="/admin/addTeacher" className="menu-item">Add Teacher</Link>
                </li>
                <li>
                  <Link to="/admin/viewTeacher" className="menu-item">View Teacher</Link>
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
                  <Link to="/admin/viewClass" className="menu-item">View Class</Link>
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
                  <Link to="/admin/viewStandard" className="menu-item">View Standard</Link>
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
                  <Link to="/admin/viewSubject" className="menu-item">View Subject</Link>
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
                  <Link to="/admin/viewAttendance" className="menu-item">View Attendance</Link>
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
                  <Link to="/admin/addTimeTableSetting" className="menu-item">Schedule Class</Link>
                </li>
                <li>
                  <Link to="/admin/viewTimeTableSetting" className="menu-item">View Schedule Class</Link>
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
                  <Link to="/admin/addExam" className="menu-item">Add Exam</Link>
                </li>
                <li>
                  <Link to="/admin/viewExam" className="menu-item">View Exam</Link>
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
                  <Link to="/admin/viewFeedback" className="menu-item">Add Message</Link>
                </li>
              </ul>
            </li>           
          </ul>
        </div>
      </div>
          );
   
};


export default AdminSideBar;

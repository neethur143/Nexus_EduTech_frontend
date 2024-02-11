import React from 'react';
import { Link } from 'react-router-dom';

function StudentSidebar() {
    const sidebarStyle = {
        backgroundColor: 'black', // Set background color to black
        color: 'white', // Set text color to white
        padding: '20px' // Add padding to the sidebar
    };

    const menuItemStyle = {
        fontSize: '18px', // Set font size to 18px
        marginBottom: '10px' // Add margin bottom to each menu item
    };

    return (
        <div style={sidebarStyle} className="main-menu menu-dark menu-fixed menu-shadow menu-border menu-accordion">
            <div className="main-menu-content">
                <ul id="main-menu-navigation" data-menu="menu-navigation" className="navigation navigation-main">
                    <li className="nav-item">
                        <Link to="/student" style={menuItemStyle}>
                            <i className="icon-home3"></i>
                            <span data-i18n="nav.dash.main" className="menu-title">Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a href="#" style={menuItemStyle}>
                            <i className="icon-stack-2"></i>
                            <span data-i18n="nav.page_layouts.main" className="menu-title">Student</span>
                        </a>
                        <ul className="menu-content">
                            <li>
                                <Link to="student/viewStudentProfile" style={menuItemStyle} className="menu-item">View Profile</Link>
                            </li>
                        </ul>
                    </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Exam
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="student/viewExam"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Exam
                    </Link>
                  </li>
                </ul>
              </li>
                <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                  Result
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="student/viewResult"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Result
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Attendence
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="sviewAttendanceList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Attendance
                    </Link>
                  </li>
                </ul>
              </li>
            
            
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                   View Class Schedule
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="student/viewTimeTableList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Time-Table
                    </Link>
                  </li>
                </ul>
              </li>
             
            </ul>
          </div>

        </div>
    );
}

export default StudentSidebar;

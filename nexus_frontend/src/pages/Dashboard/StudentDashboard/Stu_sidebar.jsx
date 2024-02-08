import React from 'react';
 import { Link } from 'react-router-dom';

function StudentSidebar() {
    return (
        <div class="main-menu menu-dark menu-fixed menu-shadow menu-border menu-accordion">
          {/* <!-- main menu header--> */}
          {/* <!-- / main menu header--> */}
          {/* <!-- main menu content--> */}
          <div class="main-menu-content">
            <ul
              id="main-menu-navigation"
              data-menu="menu-navigation"
              class="navigation navigation-main"
            >
              <li class=" nav-item">
                <Link to="/student">
                  <i class="icon-home3"></i>
                  <span data-i18n="nav.dash.main" class="menu-title">
                    Dashboard
                  </span>
                </Link>
              </li>
            
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Student
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="student/viewStudentProfile"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Profile
                    </Link>
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
                      to="student/viewAttendanceList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Attendance
                    </Link>
                  </li>
                </ul>
              </li>
            
{/*             
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Teacher
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewTeacherList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Teacher
                    </Link>
                  </li>
                </ul>
              </li> */}             
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
              {/* <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">EXAM & RESULT</span>
                <i
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Layouts"
                  class="icon-ellipsis icon-ellipsis"
                ></i>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Exam Time-Table
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewExamttList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Exam Time-Table
                    </Link>
                  </li>
                </ul>
              </li> */}
             
              {/* <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Question Paper
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewQuestionPaperList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Question Paper
                    </Link>
                  </li>
                </ul>
              </li> */}
             
              {/* <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Event
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/viewEventList"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Event
                    </Link>
                  </li>
                </ul>
              </li> */}
            
              {/* <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Feedback
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/addFeedback"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      Give Feedback
                    </Link>
                  </li>
                </ul>
              </li> */}
{/*               
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Leave Request
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/student/addLeaveRequest"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      Add Leave Request
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/student/viewLeaveRequest"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Leave Request
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>

        </div>
    );
}

export default StudentSidebar;

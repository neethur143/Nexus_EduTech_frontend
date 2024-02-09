import React from 'react';
import { Link } from 'react-router-dom'
const TeacherSidebar = () => {
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
                <Link to="/teacher">
                  <i class="icon-home3"></i>
                  <span data-i18n="nav.dash.main" class="menu-title">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">TEACHER</span>
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
                    Teacher
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/teacher/viewProfile"
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
                    Remark
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/teacher/addRemark"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      Add Remark
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
                      to="takeAttendance"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      Take Attendence
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" nav-item">
                <a href="#">
                  <i class="icon-stack-2"></i>
                  <span data-i18n="nav.page_layouts.main" class="menu-title">
                    Notice
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/teacher/viewNotice"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Notice
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">TIMETABLE</span>
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
                    Time-Table
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/teacher/viewTimeTable"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Time-Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/teacher/viewMyTimeTable"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      My Time-Table
                    </Link>
                  </li>
                </ul>
              </li> */}
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
                      to="/teacher/viewExamTimeTable"
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
                      to="/teacher/viewQuestionPaper"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Question Paper
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">
                  EVENTS & ACTIVITIES
                </span>
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
                    Event
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/teacher/viewEvent"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Event
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">Feedback</span>
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
                    Feedback
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/teacher/giveFeedback"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      Give Feedback
                    </Link>
                  </li>
                </ul>
              </li>
              <li class=" navigation-header">
                <span data-i18n="nav.category.layouts">Leave Request</span>
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
                    Leave Request
                  </span>
                </a>
                <ul class="menu-content">
                  <li>
                    <Link
                      to="/teacher/addLeaveRequest"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      Add Leave Request
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/teacher/viewLeaveRequest"
                      data-i18n="nav.page_layouts.1_column"
                      class="menu-item"
                    >
                      View Leave Request
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          
        </div>
    );
};

export default TeacherSidebar;

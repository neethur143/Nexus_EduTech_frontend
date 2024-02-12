import React from 'react';
import { Link } from 'react-router-dom';

function StudentSidebar() {
    return (
        <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-dark text-light"
            style={{ marginTop: '56px', marginLeft: '12px', position: 'fixed', top:  0, left:  0, right:  0, zIndex:  100 }}
        >
            <div className="position-fixed">
                <div className="list-group list-group-flush mx-4 border border-dark mw-100">
                    <Link to="/student" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                        <i className="fas fa-tachometer-alt fa-fw"></i> <span className="menu-title">Dashboard</span>
                    </Link>
                </div>
                <br />
                <div className="justify-content-center align-items-center">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Student
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="student/viewStudentProfile" className="dropdown-item">View Profile</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Exam
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="student/viewExam" className="dropdown-item">View Exam</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Result
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="student/viewResult" className="dropdown-item">View Result</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Attendance
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="student/viewAttendanceList" className="dropdown-item">View Attendance</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle mx-5 mt-3 bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Class Schedule
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="student/viewTimeTableList" className="dropdown-item">View Time-Table</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default StudentSidebar;

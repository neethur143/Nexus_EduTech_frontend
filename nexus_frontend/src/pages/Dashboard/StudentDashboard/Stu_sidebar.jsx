import React from 'react';
// import { Link } from 'react-router-dom';

function StudentSidebar() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
            <div className="position-sticky">
                <div className="pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a to="/student/dashboard" className="nav-link active">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a to="/student/profile" className="nav-link">Profile</a>
                        </li>                      
                        <li className="nav-item">
                            <a to="/student/class" className="nav-link">Class</a>
                        </li>
                        <li className="nav-item">
                            <a to="/student/timetable" className="nav-link">Timetable</a>
                        </li>
                        <li className="nav-item">
                            <a to="/student/grades" className="nav-link">Grades</a>
                        </li>
                        <li className="nav-item">
                            <a to="/student/exam" className="nav-link">Exams</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default StudentSidebar;

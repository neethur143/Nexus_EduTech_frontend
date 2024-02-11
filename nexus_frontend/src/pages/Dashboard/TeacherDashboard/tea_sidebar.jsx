import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeacherSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ backgroundColor: 'black' }}>
            <div className="sidebar-header" onClick={toggleSidebar}>
                <h3 style={{ color: 'white' }}>Teacher</h3>
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-item">
                    <Link to="/teacher" className="sidebar-link" style={{ color: 'white' }}>
                        <i className="fas fa-home sidebar-icon" style={{ color: 'white' }}></i>
                        Dashboard
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="viewProfile" className="sidebar-link" style={{ color: 'white' }}>
                        <i className="fas fa-user-graduate sidebar-icon" style={{ color: 'white' }}></i>
                        View Profile
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="addmark" className="sidebar-link" style={{ color: 'white' }}>
                        <i className="fas fa-sticky-note sidebar-icon" style={{ color: 'white' }}></i>
                        Add Mark
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="takeAttendance" className="sidebar-link" style={{ color: 'white' }}>
                        <i className="fas fa-calendar-check sidebar-icon" style={{ color: 'white' }}></i>
                        Take Attendance
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/teacher/viewNotice" className="sidebar-link" style={{ color: 'white' }}>
                        <i className="fas fa-clipboard-list sidebar-icon" style={{ color: 'white' }}></i>
                        View Attendance
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="viewtimetableteacher" className="sidebar-link" style={{ color: 'white' }}>
                        <i className="fas fa-comments sidebar-icon" style={{ color: 'white' }}></i>
                       View Schedule class
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="updatemark" className="sidebar-link" style={{ color: 'white' }}>
                        <i className="fas fa-clipboard sidebar-icon" style={{ color: 'white' }}></i>
                       UpdateMark
                    </Link>
                </li>            
            </ul>
            <div className="toggle-sidebar" onClick={toggleSidebar}>
                <i className={`fas fa-angle-double-${isSidebarOpen ? 'left' : 'right'}`}></i>
            </div>
        </div>
    );
};

export default TeacherSidebar;

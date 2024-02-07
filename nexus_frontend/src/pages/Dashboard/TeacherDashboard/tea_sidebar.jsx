import React from 'react';

const TeacherSidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
            <div className="position-sticky">
                <div className="pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <span data-feather="home"></span>
                                Dashboard <span className="sr-only">(Teacher)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="users"></span>
                                Users
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="exams"></span>
                                Exams
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="classes"></span>
                                Classes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="results"></span>
                                Results
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="settings"></span>
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TeacherSidebar;

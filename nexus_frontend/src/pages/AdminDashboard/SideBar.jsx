import React from 'react';

const SideBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                    <div className="sidebar-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item" >
                            <a className="nav-link active" href="#" >
    <span data-feather="home" />
    Dashboard <span className="sr-only"></span>
</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span data-feather="users"></span>
                                    Users
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                    <li><a className="dropdown-item text-center" href="#">Admin</a></li>
                                    <li><a className="dropdown-item text-center" href="#">Student</a></li>
                                    <li><a className="dropdown-item text-center" href="#">Teacher</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="exams" />
                                    Examiation
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="classes" />
                                    Classes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="results" />
                                    Results
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="settings" />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>


    );
};

export default SideBar;
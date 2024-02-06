import React from 'react'
import SideBar from './SideBar'
import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>

            <header className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">
                        <img src="logo.png" alt="Admin Logo" className="d-inline-block align-top" height={30} width={30} /> Admin Dashboard
                    </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Admin Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Users</a>
                            </li>
                            <li className="nav-item dropdown">
                            {/* <button type="button" className="btn btn-success me-2"><Link to='signup'>Sign Up</Link></button> */}
                            </li>
                        </ul>
                        <form className="d-flex ms-auto text-white">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto text-white">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notifications <span className="badge bg-danger rounded-pill">2</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    John Doe
                                </a>
                                <ul className="dropdown-menu bg-black"  aria-labelledby="userDropdown">
                                    <li><a className="dropdown-item text-white" href="#">Profile</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>

        </div>
    )
}

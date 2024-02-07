import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
    return (
      <div>
    <nav className="navbar navbar-expand-lg py-3 navbar-light" style={{ backgroundColor: 'rgb(0, 204, 204)' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <img src="/images/logo.png" width="40" height="40" class="d-inline-block align-top" ></img>
        <h2  className="ms-2 mb-2"><a className="navbar-brand" ><Link to='/'>NeXuS Edutech </Link></a></h2>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" ><Link to='/'>Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ><a to='/'>About Us</a></a>
            </li>
          </ul>
        <div className="collapse navbar-collapse me-auto" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          </ul>
          <button type="button" className="btn btn-success me-2"><Link to='signin'>Sign In</Link></button>
          <button type="button" className="btn btn-success me-2"><Link to='signup'>Sign Up</Link></button>
        </div>
      </div>
      
    </nav>
    <Outlet/>
    </div>
    )
}

export default Header;

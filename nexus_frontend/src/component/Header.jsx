import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">NEXUS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link to='/'>Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to='aboutus' >About Us</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#"><Link to='contactus' >Contact Us</Link></a>
              </li>
              <div style={{paddingLeft:"52rem"}}>
              <button type="button" class="btn  btn-outline-primary  float-right">
                <Link to='signin' style={{ textDecoration: 'none' }}>Sign In</Link>
              </button>
              &nbsp; &nbsp;&nbsp;
              <button type="button" class="btn btn-outline-primary float-right">
                <Link to='signup' style={{ textDecoration: 'none' }}>Sign Up</Link>
              </button>
              </div>

            </ul>

          </div>
        </div>

      </nav>
    <Outlet />
    </div>
      
  
    )
}

export default Header;

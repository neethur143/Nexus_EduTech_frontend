import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a to="/" className="nav-link active" aria-current="page">
              
                </a>
              </li>
              <li className="nav-item">
                {/* <a to="/users" className="nav-link text-white">
                  Users
                </a> */}
              </li>
            </ul>
           
            <ul className="navbar-nav ms-auto text-white">
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Notifications <span className="badge bg-danger rounded-pill">2</span>
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    dropdownOpen ? 'show' : ''
                  }`}
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={dropdownOpen}
                  onClick={handleDropdownClick}
                >
              Profile
                </a>
                <ul
                  className={`dropdown-menu bg-white dropdown-menu-end ${
                    dropdownOpen ? 'show' : ''
                  }`}
                  aria-labelledby="userDropdown"
                  style={{ minWidth: '200px' }}
                >
                  {/* <li>
                    <a className="dropdown-item text-white" href="#">
                    <i  /><span><Link to="/" className="menu-item">Profile</Link></span>
                    </a>
                  </li> */}
                  <li>
                  
                    <a href="#" className="dropdown-item text-black"><i  /><span><Link to="/" className="menu-item">Logout</Link></span></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div> 
   
  );
 
}

export default Navbar;

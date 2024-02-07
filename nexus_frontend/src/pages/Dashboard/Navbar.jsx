import React, { useState } from 'react';

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
                <a to="/users" className="nav-link text-white">
                  Users
                </a>
              </li>
            </ul>
            <form className="d-flex ms-auto text-white">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto text-white">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Notifications <span className="badge bg-danger rounded-pill">2</span>
                </a>
              </li>
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
                 Neethu R
                </a>
                <ul
                  className={`dropdown-menu bg-black dropdown-menu-end ${
                    dropdownOpen ? 'show' : ''
                  }`}
                  aria-labelledby="userDropdown"
                  style={{ minWidth: '200px' }}
                >
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Logout
                    </a>
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

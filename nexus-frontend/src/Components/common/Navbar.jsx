// NavigationBar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";

const NavigationBar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm); // Toggle the login form visibility
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand as={Link} to="/">
            Nexus EduTech Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className=" ">
              <Nav.Link as={Link} to="/" className="btn btn-outline-info">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="btn btn-outline-info">
                About
              </Nav.Link>
              <Nav.Link
                onClick={handleLoginClick}
                className="btn btn-outline-info"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showLoginForm && <LoginForm onClose={handleLoginClick} />}
    </div>
  );
};

export default NavigationBar;

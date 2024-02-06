import React from 'react';

function Footer() {
  return (
    <div className="container-fluid navbar-light" style={{ backgroundColor: 'rgba(227, 242, 253, 0.8)' }}>
  <footer className="d-flex flex-wrap justify-content-between align-items-center px-4 py-3 border-top text-white">
    <p className="col-md-4 mb-0 text-muted">© 2022 My Blog, Inc</p>
    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-white">
      <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
    </a>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted text-white">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted text-white">About Us</a></li>
    </ul>
  </footer>
</div>

  );
}

export default Footer;

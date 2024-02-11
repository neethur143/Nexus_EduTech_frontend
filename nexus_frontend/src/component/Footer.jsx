import React from 'react';

function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#565350', color: 'white', paddingTop: '10px', paddingBottom: '10px' }}>
      <div className="container">
        <footer className="row row-cols-1 row-cols-md-5 py-3 border-top">
          <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <svg className="bi me-2" width={20} height={10}><use xlinkHref="#bootstrap" /></svg>
            </a>
            <p className="text-muted text-white">Team F © 2024</p>
          </div>
          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="list-unstyled">
              <li className="d-inline me-3"><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li className="d-inline me-3"><a href="#" className="text-white text-decoration-none">Features</a></li>
              <li className="d-inline me-3"><a href="#" className="text-white text-decoration-none">Pricing</a></li>
              <li className="d-inline me-3"><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              <li className="d-inline"><a href="#" className="text-white text-decoration-none">About</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

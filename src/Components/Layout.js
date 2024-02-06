import React from 'react';
import NavigationBar from './common/Navbar';
import About from './common/About';
import Footer from './common/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <About />
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';
import StudentSidebar from './/Stu_sidebar';
import { useLocation } from 'react-router-dom';
// import DashboardContent from './DashboardContent';
// import ProfileContent from './ProfileContent';
import Navbar from '../Navbar';
// ... other content components
import Footer from '../../../component/Footer';

function StudentDashboard() {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      // case '/student/dashboard':
      //   return <DashboardContent />;
      // case '/student/profile':
      //   return <ProfileContent />;
      // // ... other cases
      // default:
      //   return <NotFound />;
    }
  };

  return (
    <div className="container-fluid">
        <Navbar/>
      <div className="row">
        <StudentSidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {renderContent()}
        </main>
      </div>   
    </div>
  );
}

export default StudentDashboard;
import React from 'react';
import Navbar from '../Navbar'; 
import AdminSideBar from './SideBar';
import StudentDetails from './StudentTable';
import { Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
              <AdminSideBar/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-0">
                    <Navbar />
                    <div className="container">
                      <Outlet/>                      
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;

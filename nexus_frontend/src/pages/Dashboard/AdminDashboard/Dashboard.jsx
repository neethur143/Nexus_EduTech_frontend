import React from 'react';
import Navbar from '../Navbar'; 
import AdminSideBar from './SideBar';

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
              <AdminSideBar/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Navbar />
                    <div className="container">
                        <h1>Admin Dashboard</h1>                      
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;

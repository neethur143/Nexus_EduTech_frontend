import React from 'react';
import Navbar from '../Navbar'; 
import TeacherSidebar from './tea_sidebar'; 
function TeacherDashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
            <Navbar />             
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <TeacherSidebar />
                    <div className="container">
                        <h1>Teacher Dashboard</h1>                      
                    </div>
                </main>
            </div>
        </div>
    );
}

export default TeacherDashboard;

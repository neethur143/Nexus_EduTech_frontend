import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Home() {
    return (
        <div>
            <Header/>
            {/* <div className="Home-container">
                <div className="d-flex justify-content-center" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
                    <div className="card mx-2 shadow-sm" style={{ width: '18rem' }}>
                        <img src="images/img1.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Reigniting family-centered faith</h5>
                            <p className="card-text">Reigniting family-centered faith isn’t a nostalgic nod to the past but a clarion call to reclaim what has always been the…</p>
                            <a href="#" className="btn btn-primary">Read More..</a>
                        </div>
                    </div>

                    <div className="card mx-2 shadow-sm" style={{ width: '18rem' }}>
                        <img src="images/img2.png" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Family Discipleship Institute Empowers Future</h5>
                            <p className="card-text">In a world where the foundations of family values are being tested, there arises a pressing need for intentional, well-researched…</p>
                            <a href="#" className="btn btn-primary">Read More..</a>
                        </div>
                    </div>

                    <div className="card mx-2 shadow-sm" style={{ width: '18rem' }}>
                        <img src="images/img3.png" className="card-img-top"  />
                        <div className="card-body">
                            <h5 className="card-title">Nationwide Movement towards Reviving Families</h5>
                            <p className="card-text">Victorious Family Ignites Nationwide Movement for Family Discipleship Victorious Family, an international nonprofit, is sparking…</p>
                            <a href="#" className="btn btn-primary">Read More..</a>
                        </div>
                    </div>
                </div>
               
                
            </div> */}
            <div>
            <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />            
        </Routes>
        </div>
{/*     
        <Footer/>                    */}
        </div>
        
    );
}

export default Home;



import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import video from '../component/Assets/universityvideo.mp4'
function Home() {
    return (
        <div>
      <div className="home">
        <br></br>
        <div className="content">
          <p class="spoiler" style={{ backgroundPosition: 'right', backgroundSize: '100% 100%', backgroundImage: 'linear-gradient(#a0aec0, #a0aec0)', display: 'inline', backgroundRepeat: 'no-repeat', transition: 'all 500ms ease-in-out', }}>
            <h1 id='video-text' className=''>WHY STUDY IN NEXUS EDUTECH?</h1>
          </p>
          <hr />
          <video width={1360} height={500} muted autoPlay loop style={{ zIndex: '-999', top: "90%", left: "50%", transform: "translate(2%, -2%)" }}>
            <source src={video} type="video/mp4" />
          </video>

        </div>



        <div className="container">
          <div className="main-txt">
            {/* <h1>O</h1> */}
          </div>
          <div className="row" style={{ marginTop: 30 }}>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src="images/Sports.jpeg" alt height="280px" />
                <button
                  className="btn btn-primary" // Add styling for the button
                  style={{
                    position: "absolute", // Position button on top of image
                    top: "90%", // Center button vertically
                    left: "50%", // Center button horizontally
                    transform: "translate(-50%, -50%)", // Adjust positioning as needed
                  }}
                >
                  Sports
                </button>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src="images/LAB.jpeg" alt height="280px" />
                <button
                  className="btn btn-primary" // Add styling for the button
                  style={{
                    position: "absolute", // Position button on top of image
                    top: "90%", // Center button vertically
                    left: "50%", // Center button horizontally
                    transform: "translate(-50%, -50%)", // Adjust positioning as needed
                  }}
                >
                  Lab
                </button>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src="images/LBBRY.jpeg" alt height="280px" />
                <button
                  className="btn btn-primary" // Add styling for the button
                  style={{
                    position: "absolute", // Position button on top of image
                    top: "90%", // Center button vertically
                    left: "50%", // Center button horizontally
                    transform: "translate(-50%, -50%)", // Adjust positioning as needed
                  }}
                >
                  Library
                </button>
              </div>
            </div>
          </div>
        </div>



        <div className="Home-container">
          <div className="d-flex justify-content-center" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <div className="card mx-2 shadow-sm" style={{ width: '18rem' }}>
              <img src="images/G_H.jpeg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Reigniting family-centered faith</h5>
                <p className="card-text">Reigniting family-centered faith isn’t a nostalgic nod to the past but a clarion call to reclaim what has always been the…</p>

              </div>
            </div>

            <div className="card mx-2 shadow-sm" style={{ width: '18rem' }}>
              <img src="images/S2.jpeg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Family Discipleship Institute Empowers Future</h5>
                <p className="card-text">In a world where the foundations of family values are being tested, there arises a pressing need for intentional, well-researched…</p>

              </div>
            </div>

            <div className="card mx-2 shadow-sm" style={{ width: '18rem' }}>
              <img src="images/S3.jpeg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Nationwide Movement towards Reviving Families</h5>
                <p className="card-text">Victorious Family Ignites Nationwide Movement for Family Discipleship Victorious Family, an international nonprofit, is sparking…</p>

              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <Footer />

      </div>
    </div>
    )
}

export default Home;



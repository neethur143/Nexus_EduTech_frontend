import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit'
function SignIn() {
    // return (
    //     <div>
    //         <div className="form-body">
    //             <div className="row">
    //                 <div className="form-holder">
    //                     <div className="form-content">
    //                         <div className="form-items">
    //                             <h3 className='text-center'>Sign In</h3>
    //                             <form className="requires-validation" noValidate >
    //                                 <div className="col-md-12">
    //                                     <label htmlFor="email" className="form-label">Email Address:</label>
    //                                     <input className="form-control" type="email" name="email" placeholder="Enter E-mail Address" required />
    //                                     <div className="valid-feedback">Email field is valid!</div>
    //                                     <div className="invalid-feedback">Email field cannot be blank!</div>
    //                                 </div><br></br>
    //                                 <div className="col-md-12">
    //                                     <label htmlFor="password" className="form-label">Password :</label>
    //                                     <input className="form-control" type="password" name="password" placeholder="Enter Password" required />
    //                                     <div className="valid-feedback">Password field is valid!</div>
    //                                     <div className="invalid-feedback">Password field cannot be blank!</div>
    //                                 </div>
    //                                 <br></br>
    //                                 <div className="form-check">
    //                                     <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
    //                                     <label className="form-check-label">Remember Me</label>
    //                                     <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
    //                                 </div>
    //                                 <div className="form-button mt-3 text-center ">
    //                                     <button id="submit" type="submit" className="btn btn-primary">Submit</button>
    //                                 </div>
    //                                 <div className="d-flex justify-content-between">
    //                                     <span className="d-block mt-4">
    //                                     <Link to="/signup" className="small text-white">New User? Sign Up Here</Link>
    //                                     </span>
    //                                     <span className="d-block mt-4">
    //                                        <Link to="/signup" className="small text-white">New User? Sign Up Here</Link>
    //                                     </span>
    //                                 </div>

    //                             </form>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         <Footer />
    //     </div>
    // )
    return (
        <MDBContainer className="my-5 w-50">   
          <MDBCard>
            <MDBRow className=' g-0'> 
              <MDBCol md='6'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
              </MDBCol>
    
              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
    
                  <div className='d-flex flex-row mt-2'>
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              
                  </div>
    
                  <h5 className="fw-normal my-4 pb-3 fs-2 text-center" style={{letterSpacing: '1px'}}>Login</h5>
    
                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
    
                  <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2">  <Link to="/signup" className="small text-black">New User? Sign Up Here</Link></p>   
                </MDBCardBody>
              </MDBCol>            
            </MDBRow>
          </MDBCard>
    
        </MDBContainer>
      );
}

export default SignIn

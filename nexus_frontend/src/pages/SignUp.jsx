import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function SignUp() {
    return (
        <div>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3 className='text-center'>Sign Up</h3>                            
                                <form className="container bg-light col-md-16 p-4 rounded shadow-sm">
                                    <fieldset style={{ marginTop: '20px', marginBottom: '20px' }}>
                                        {/* <legend>Sign Up</legend> */}
                                        <div className="row mb-3">
                                            {/* Left side fields */}
                                            <div className="col-md-6">

                                            <label htmlFor="firstName" className="form-label">First Name:</label>
                                                <input type="text" className="form-control" id="firstName" name="firstName" required /><br/>
                                           
                                                <label htmlFor="email" className="form-label">Email Address:</label>
                                                <input type="email" className="form-control" id="email" name="email" required /><br/>

                                                <label htmlFor="password" className="form-label">Password:</label>
                                                <input type="password" className="form-control" id="password" name="password" required /><br/>

                                                <label htmlFor="dob" className="form-label">Date of Birth:</label>
                                                <input type="date" className="form-control" id="dob" name="dob" required />
                                               
                                            </div>

                                            {/* Right side fields */}
                                            <div className="col-md-6">
                                          
                                              
                                                <label htmlFor="lastName" className="form-label">Last Name:</label>
                                                <input type="text" className="form-control" id="lastName" name="lastName" required /><br/>

                                                <label htmlFor="username" className="form-label">Username:</label>
                                                <input type="text" className="form-control" id="username" name="username" required autofocus /><br/>

                     
                                                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required /><br/>

                                                <label htmlFor="phone" className="form-label">Phone:</label>
                                                <input type="tel" className="form-control" id="phone" name="phone" />
                                            </div>
                                        </div>

                                        <div className="col-mb-3">
                                            <label htmlFor="role" className="form-label">Role:</label>
                                            <select className="form-select" id="role" name="role" required>
                                            <option  placeholder="Select your role">-- Please select --</option>
                                               
                                                <option value="Student">Student</option>
                                                <option value="Teacher">Teacher</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="gender" className="form-label">Gender:</label>
                                            <select className="form-select" id="gender" name="gender" required>
                                            <option  placeholder="Select Gender">-- Please select --</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div className="form-button mt-3 text-center ">

                                        <button type="submit" className="btn btn-primary ">Submit</button></div>
                                    </fieldset>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SignUp

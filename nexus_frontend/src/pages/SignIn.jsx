import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function SignIn() {
    return (
        <div>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3 className='text-center'>Sign In</h3>
                                <form className="requires-validation" noValidate >
                                    <div className="col-md-12">
                                        <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                                        <div className="valid-feedback">Email field is valid!</div>
                                        <div className="invalid-feedback">Email field cannot be blank!</div>
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="password" name="password" placeholder="Password" required />
                                        <div className="valid-feedback">Password field is valid!</div>
                                        <div className="invalid-feedback">Password field cannot be blank!</div>
                                    </div>
                                    <br></br>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                                        <label className="form-check-label">Remember Me</label>
                                        <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                    </div>
                                    <div className="form-button mt-3 text-center ">
                                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span class="d-block mt-4">
                                            <a href='#' class="small text-white">Forgot Password!</a>
                                        </span>
                                        <span class="d-block mt-4">
                                            <a href='#' class="small text-white">New User? Sign Up Here</a>
                                        </span>
                                    </div>

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

export default SignIn

import React, { useState } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';
const SignUp = (e) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        personalId: '',
        role: ''
    });
 
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios
            .post("http://localhost:5011/api/User/AddUser", formData)
            .then((response) => {
              console.log(response.data);
              setFormData(
                response.data
              )
            })
        } catch (error) {
            console.error('Error:', error);
            console.log(error); // Handle error
        }
    };
 
 
    return (
        <div>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3 className='text-center'>Sign Up</h3>                            
                                <form className="container bg-light col-md-16 p-4 rounded shadow-sm" onSubmit={handleSubmit}>
                                    <fieldset style={{ marginTop: '20px', marginBottom: '20px' }}>
                                        {/* <legend>Sign Up</legend> */}
                                        <div className="row mb-3">
                                            {/* Left side fields */}
                                            <div className="col-md-6">
 
                                            <label htmlFor="username" className="form-label">Username:</label>
                                                <input type="text" className="form-control" id="username" value={formData.username} name="username" required onChange={(e)=>setFormData((prevState)=>({...prevState,username:e.target.value}))} /><br/>
                                           
                                               
 
                                                <label htmlFor="password" className="form-label">Password:</label>
                                                <input type="password" className="form-control" id="password" value={formData.password} name="password" required onChange={(e)=>setFormData((prevState)=>({...prevState,password:e.target.value}))}/><br/>
 
 
                                               
                                                <label htmlFor="phone" className="form-label">Phone:</label>
                                                <input type="tel" className="form-control" id="phone" value={formData.phone} name="phone" onChange={(e)=>setFormData((prevState)=>({...prevState,phone:e.target.value}))} />
                                               
                                            </div>
 
                                            {/* Right side fields */}
                                            <div className="col-md-6">
                                         
                                           
                                                <label htmlFor="email" className="form-label">Email Address:</label>
                                                <input type="email" className="form-control" id="email" value={formData.email} name="email" required onChange={(e)=>setFormData((prevState)=>({...prevState,email:e.target.value}))} /><br/>
                     
                                                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required /><br/>
 
                                                <label htmlFor="personalid" className="form-label">Personal ID</label>
                                                <input type="number" className="form-control" id="personalid" name="personalid" value={formData.personalId} required onChange={(e)=>setFormData((prevState)=>({...prevState,personalId:e.target.value}))} /><br/>
 
                                            </div>
                                        </div>
 
                                        <div className="col-mb-3">
                                           
                                        </div>
 
                                        <div className="mb-3">
                                            <label htmlFor="role" className="form-label">Role:</label>
                                            <select className="form-select" id="role"  value={formData.role} name="role" required onChange={(e)=>setFormData((prevState)=>({...prevState,role:e.target.value}))}>
                                            <option  placeholder="Select Role">-- Please select --</option>
                                                <option value="Student">Student</option>
                                                <option value="Teacher">Teacher</option>
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
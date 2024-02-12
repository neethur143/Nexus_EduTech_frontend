import React, { useState } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useNavigate } from "react-router-dom";
import SignIn from './SignIn';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [personalId, setPersonalId] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = {
                userName: username,
                email: email,
                password: password,
                contactNumber: phone,
                id: personalId,
                role: role,
            };
            axios.post("http://localhost:5011/api/User/AddUser", formData)
                .then(() => {
                    navigate('/signin');
                })
                .catch((error) => console.log(error));
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!username.trim()) {
            errors.username = "Username is required";
            isValid = false;
        }

        if (!email.trim()) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
            isValid = false;
        }

        if (!password) {
            errors.password = "Password is required";
            isValid = false;
        }

        if (!confirmPassword) {
            errors.confirmPassword = "Confirm Password is required";
            isValid = false;
        } else if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
            isValid = false;
        }

        if (!phone) {
            errors.phone = "Phone is required";
            isValid = false;
        }

        if (!personalId) {
            errors.personalId = "Personal ID is required";
            isValid = false;
        }

        if (!role) {
            errors.role = "Role is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
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
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="username" className="form-label">Username:</label>
                                                <input type="text" className="form-control" id="username" value={username} name="username" onChange={(e) => setUsername(e.target.value)} />
                                                {errors.username && <p className="text-danger">{errors.username}</p>}
                                                <label htmlFor="password" className="form-label">Password:</label>
                                                <input type="password" className="form-control" id="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
                                                {errors.password && <p className="text-danger">{errors.password}</p>}
                                                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                                                <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                                                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
                                                <label htmlFor="phone" className="form-label">Phone:</label>
                                                <input type="tel" className="form-control" id="phone" value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} />
                                                {errors.phone && <p className="text-danger">{errors.phone}</p>}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label">Email Address:</label>
                                                <input type="email" className="form-control" id="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                                                {errors.email && <p className="text-danger">{errors.email}</p>}
                                                <label htmlFor="personalid" className="form-label">Personal ID</label>
                                                <input type="number" className="form-control" id="personalid" name="personalid" value={personalId} onChange={(e) => setPersonalId(e.target.value)} />
                                                {errors.personalId && <p className="text-danger">{errors.personalId}</p>}
                                                <label htmlFor="role" className="form-label">Role:</label>
                                                <select className="form-select" id="role" value={role} name="role" onChange={(e) => setRole(e.target.value)}>
                                                    <option value="">-- Please select --</option>
                                                    <option value="Student">Student</option>
                                                    <option value="Teacher">Teacher</option>
                                                </select>
                                                {errors.role && <p className="text-danger">{errors.role}</p>}
                                            </div>
                                        </div>
                                        <div className="form-button mt-3 text-center ">
                                            <button type="submit" className="btn btn-primary ">Submit</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;

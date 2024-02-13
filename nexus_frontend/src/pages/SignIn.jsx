import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { StudentContext } from './StudentContext';
import { StudentContext } from './Dashboard/StudentDashboard/StudentContext'; // Make sure to import the context from the correct path
import { TeacherContext } from './Dashboard/TeacherDashboard/TeacherContext';

function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [invalidCredentials, setInvalidCredentials] = useState(false);
 const {setLoggedInStudentId} = useContext(StudentContext); // Use the context to set the logged-in student ID
  const {setLoggedInTeacherId}  = useContext(TeacherContext); // Use the context to set the logged-in student ID

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!user.username.trim()) {
      newErrors.username = "Please enter your username.";
      isValid = false;
    }

    if (!user.password.trim()) {
      newErrors.password = "Please enter your password.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:5011/api/User/Login", user)
        .then((response) => {
          const validUser = response.data;
          if (validUser.role === "Student") {
            // Fetch user ID from the API
            axios.get("http://localhost:5011/api/User/GetAllUser")
              .then((response) => {
                const student = response.data.find((user) => user.userName === validUser.username);
                if (student) {
                  const { id } = student;
                  
                  sessionStorage.setItem("uid",id);
                  sessionStorage.setItem("token", validUser.token);
                  setLoggedInStudentId(id); // Store the logged-in student ID in the context
                  navigate("/student/viewStudentProfile"); // Redirect to the profile page
                } else {
                  setInvalidCredentials(true);
                  window.alert("User not found.");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
                setInvalidCredentials(true);
                window.alert("Error occurred. Please try again later.");
              });
          }
          else if(validUser.role === "Teacher"){
            // Fetch user ID from the API
            axios.get("http://localhost:5011/api/User/GetAllUser")
              .then((response) => {
                const teacher = response.data.find((user) => user.userName === validUser.username);
                if (teacher) {
                  const { id } = teacher;
                  
                  sessionStorage.setItem("uid",id);
                  sessionStorage.setItem("token", validUser.token);
                  setLoggedInTeacherId(id); 
                  navigate("/teacher/viewProfile"); // Redirect to the profile page
                } else {
                  setInvalidCredentials(true);
                  window.alert("User not found.");
                }
                
              })
              .catch((error) => {
                // console.error("Error:", error);
                setInvalidCredentials(true);
                window.alert("Error occurred. Please try again later.");
              });
          }
          else{
            sessionStorage.setItem("uid", validUser.username);
            sessionStorage.setItem("token", validUser.token);
            if (validUser.role === "Admin") {
              navigate("/admin");
          }
        }
          //  else {
          //   sessionStorage.setItem("uid", validUser.username);
          //   sessionStorage.setItem("token", validUser.token);
          //   if (validUser.role === "Admin") {
          //     navigate("/admin");
          //   } else if (validUser.role === "Teacher") {
              
          //     navigate("/teacher");
          //   }
          // }
        })
        .catch((err) => {
          console.error("Error:", err);
          setInvalidCredentials(true);
        
        });
    }
  };

  return (
    <div className="container my-5 w-50">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="rounded-start w-100" />
          </div>

          <div className="col-md-6">
            <div className="card-body d-flex flex-column">
              <h5 className="fw-normal my-4 pb-3 fs-2 text-center" style={{ letterSpacing: '1px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <i className="fas fa-lock" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></i>
                  <div style={{ backgroundColor: '#ffcccb', width: '20px', height: '10px', borderRadius: '5px' }}></div>
                </div>
                Login
              </h5>

              <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">UserName</label>
                  <input
                    type="text"
                    className={`form-control ${errors.username && 'is-invalid'}`}
                    id="username"
                    value={user.username}
                    onChange={(e) =>
                      setUser((prevstate) => ({
                        ...prevstate,
                        username: e.target.value,
                      }))
                    }
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>

                <div className="mb-4">
  <label htmlFor="password" className="form-label">Password</label>
  <input
    type="password"
    className={`form-control ${errors.password && 'is-invalid'}`}
    id="password"
    value={user.password}
    onChange={(e) =>
      setUser((prevstate) => ({
        ...prevstate,
        password: e.target.value,
      }))
    }
  />
  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
</div>

{invalidCredentials && (
  <div className="alert alert-danger mt-2" role="alert">
    Invalid username or password.
  </div>
)}
                <button className='btn btn-dark btn-lg mb-3' type='submit'>Login</button>
              </form>

              <div className='d-flex justify-content-between'>
              <a href="#!"><Link to='/forgotpassword' className="large text-black" >Forgot password?</Link></a>
                <Link to="/signup" className="large text-black">New User? Sign Up Here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

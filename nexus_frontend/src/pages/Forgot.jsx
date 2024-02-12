import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button, Form } from 'react-bootstrap';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newpass, setNewPass] = useState('');
  const [Confirmpass, setConfirmPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const validatePasswordMatch = (newpass, Confirmpass) => {
    return newpass === Confirmpass;
  };

  const validatePasswordLength = (password) => {
    if (password.length < 8) {
      return false;
    }
    return true;
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Please enter an email address.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate new password
    if (!newpass) {
      setPasswordError('Please enter a new password.');
      isValid = false;
    } else if (!validatePasswordLength(newpass)) {
      setPasswordError('Password must be at least 8 characters long.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Validate confirm password
    if (!Confirmpass) {
      setPasswordError('Please confirm your password.');
      isValid = false;
    } else if (!validatePasswordMatch(newpass, Confirmpass)) {
      setPasswordError('The passwords do not match.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      axios
        .put(`http://localhost:5011/api/PasswordRecovery/Verify/${email}/${newpass}/${Confirmpass}`)
        .then((response) => {
          if (response.status === 200 && response.data === "Password Changed") {
            setSuccessMessage('Password changed successfully');
            setTimeout(() => navigate('/signin'), 3000);
          } else {
            setEmailError('Email not found or an error occurred.');
          }
        })
        .catch((err) => {
          console.error(err);
          setEmailError('An error occurred. Please try again later.');
        });
    }
  };

  return (
    <Container className="my-5 w-50">
      <Card>
        <Card.Body>
        <h4 className="text-center mb-4" style={{ color: '#c02942' }}>Forgot Password</h4>
          {successMessage && <p className="text-success text-center">{successMessage}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" value={newpass} onChange={(e) => setNewPass(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={Confirmpass} onChange={(e) => setConfirmPass(e.target.value)} />
              {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
            </Form.Group>
            <Button variant="dark" type="submit">Update</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ForgotPassword;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [emailError, setEmailError] = useState('Please enter an email address.');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const validatePasswordMatch = (newPass, confirmPass) => {
    return newPass === confirmPass;
  };

  const validatePasswordLength = (password) => {
    return password.length >=   8;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePasswordLength(newPass)) {
      setPasswordError('Password must be at least   8 characters long.');
      isValid = false;
    } else if (!validatePasswordMatch(newPass, confirmPass)) {
      setPasswordError('The passwords do not match.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      axios
        .put(`http://localhost:5011/api/PasswordRecovery/Verify/${email}/${newPass}/${confirmPass}`)
        .then((response) => {
          if (response.data.success) {
            alert('Password changed successfully');
            navigate('/login');
          } else {
            setEmailError('Email not found.');
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
          <h5 className="text-center mb-4">Forgot Password</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}  />
              {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
              {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}  />
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

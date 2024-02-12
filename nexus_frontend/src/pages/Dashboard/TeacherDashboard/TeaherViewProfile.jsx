import React, { useState, useEffect, useContext } from 'react';
import { Table, Spinner, Form } from 'react-bootstrap';
import axios from 'axios';
import { TeacherContext } from './TeacherContext';

const ViewTeacherDetail = () => {
  const [teacher, setTeacher] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInTeacherId } = useContext(TeacherContext);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get(`http://localhost:5011/api/Teacher/GetTeacher/${loggedInTeacherId}`);
        setTeacher(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeacherData();
  }, [loggedInTeacherId]);
  function formatDate(date) {
    return new Intl.DateTimeFormat('en-GB').format(new Date(date));
  }
  return (
    <div>
      <h2>Teacher Details</h2>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Name</td>
              <td><Form.Control type="text" value={teacher?.name || ''} readOnly /></td>
            </tr>
            <tr>
              <td>Gender</td>
              <td><Form.Control type="text" value={teacher?.gender || ''} readOnly /></td>
            </tr>
            <tr>
  <td>DOB</td>
  <td>
    <Form.Control type="text" value={formatDate(teacher?.dob) || ''} readOnly />
  </td>
</tr>
            <tr>
              <td>Address</td>
              <td><Form.Control as="textarea" value={teacher?.address || ''} readOnly /></td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td><Form.Control type="tel" value={teacher?.contactNumber || ''} readOnly /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><Form.Control type="email" value={teacher?.email || ''} readOnly /></td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ViewTeacherDetail;

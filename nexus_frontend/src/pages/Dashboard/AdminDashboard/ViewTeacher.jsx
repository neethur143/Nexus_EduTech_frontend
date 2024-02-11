import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [editableTeacher, setEditableTeacher] = useState(null);
  const [formData, setFormData] = useState({
    teacherId: '',
    name: '',
    gender: '',
    dob: '',
    address: '',
    contactNumber: '',
    email: '',
    classId: ''
  });

  const dummyTable = [
    { standard: '1', section: 'A', classId: '101' },
    { standard: '1', section: 'B', classId: '102' },
    { standard: '1', section: 'C', classId: '103' },
    { standard: '1', section: 'D', classId: '104' },
    { standard: '2', section: 'A', classId: '201' },
    { standard: '2', section: 'B', classId: '202' },
    { standard: '2', section: 'C', classId: '203' },
    { standard: '2', section: 'D', classId: '204' },
    // Add other standards and sections as needed
  ];

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:5011/api/Teacher/GetAll');
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
      alert('An error occurred while fetching teachers');
    }
  };

  const handleDelete = async (teacherId) => {
    try {
      const response = await axios.delete(`http://localhost:5011/api/Teacher/Delete/${teacherId}`);
      if (response.status === 200) {
        setTeachers(teachers.filter(teacher => teacher.teacherId !== teacherId));
        alert('Teacher deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting teacher:', error);
      alert('An error occurred while deleting the teacher');
    }
  };

  const handleEdit = (teacher) => {
    setEditableTeacher(teacher);
    setFormData({
      teacherId: teacher.teacherId,
      name: teacher.name,
      gender: teacher.gender,
      dob: teacher.dob,
      address: teacher.address,
      contactNumber: teacher.contactNumber,
      email: teacher.email,
      classId: teacher.classId
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStandardChange = (selectedStandard) => {
    const { section, classId } = dummyTable.find(item => item.standard === selectedStandard) || {};
    setFormData({ ...formData, standard: selectedStandard, section, classId });
  };

  const handleSectionChange = (selectedSection) => {
    const { standard, classId } = dummyTable.find(item => item.section === selectedSection) || {};
    setFormData({ ...formData, standard, section: selectedSection, classId });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put('http://localhost:5011/api/Teacher/EditTeacher', formData);
      if (response.status === 200) {
        const updatedTeacher = response.data;
        const updatedTeachers = teachers.map(teacher =>
          teacher.teacherId === updatedTeacher.teacherId ? updatedTeacher : teacher
        );
        setTeachers(updatedTeachers);
        setEditableTeacher(null);
        setFormData({
          teacherId: '',
          name: '',
          gender: '',
          dob: '',
          address: '',
          contactNumber: '',
          email: '',
          classId: ''
        });
        alert('Teacher details updated successfully');
      }
    } catch (error) {
      console.error('Error updating teacher:', error);
      alert('Failed to update teacher details');
    }
  };

  return (
    <div className="container">
      <h2>View Teachers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Standard</th>
            <th>Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => {
            const classIdString = teacher.classId.toString();
            const { standard, section } = dummyTable.find(item => item.classId === classIdString) || {};
            const formattedDOB = teacher.dob ? new Date(teacher.dob).toLocaleDateString() : '';
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{editableTeacher && editableTeacher.teacherId === teacher.teacherId ?
                  <input type="text" name="name" value={formData.name} onChange={handleChange} /> : teacher.name}</td>
                <td>{editableTeacher && editableTeacher.teacherId === teacher.teacherId ?
                  <input type="text" name="email" value={formData.email} onChange={handleChange} /> : teacher.email}</td>
                <td>{editableTeacher && editableTeacher.teacherId === teacher.teacherId ?
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} /> : teacher.contactNumber}</td>
                <td>{editableTeacher && editableTeacher.teacherId === teacher.teacherId ?
                  <input type="text" name="dob" value={formData.dob} onChange={handleChange} /> : formattedDOB}</td>
                <td>{editableTeacher && editableTeacher.teacherId === teacher.teacherId ?
                  <input type="text" name="address" value={formData.address} onChange={handleChange} /> : teacher.address}</td>
                <td>{editableTeacher && editableTeacher.teacherId === teacher.teacherId ?
                  <select name="standard" value={formData.standard} onChange={(e) => handleStandardChange(e.target.value)}>
                    <option value="">Select Standard</option>
                    {[...Array(10).keys()].map(number => (
                      <option key={number + 1} value={number + 1}>{number + 1}</option>
                    ))}
                  </select> : standard}</td>
                <td>{editableTeacher && editableTeacher.teacherId === teacher.teacherId ?
                  <select name="section" value={formData.section} onChange={(e) => handleSectionChange(e.target.value)}>
                    <option value="">Select Section</option>
                    {['A', 'B', 'C', 'D'].map(section => (
                      <option key={section} value={section}>{section}</option>
                    ))}
                  </select> : section}</td>
                <td>
                  {editableTeacher && editableTeacher.teacherId === teacher.teacherId ? (
                    <button type="button" className="btn btn-success me-2" onClick={handleSubmit}>Save</button>
                  ) : (
                    <button type="button" className="btn btn-warning me-2" onClick={() => handleEdit(teacher)}>Edit</button>
                  )}
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(teacher.teacherId)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTeacher;

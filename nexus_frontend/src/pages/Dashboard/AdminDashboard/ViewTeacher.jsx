import React, { useState, useEffect } from 'react';

const ViewTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    qualification: '',
    classes: [],
    subjects: []
  });

  // Mock data for demonstration
  useEffect(() => {
    // Fetch teacher data from API or database
    const mockData = [
      { 
        id: 1, 
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'john@example.com', 
        phoneNumber: '1234567890', 
        qualification: 'Ph.D',
        classes: ['Class A', 'Class B'],
        subjects: ['Mathematics', 'Science']
      },
      { 
        id: 2, 
        firstName: 'Jane', 
        lastName: 'Doe', 
        email: 'jane@example.com', 
        phoneNumber: '9876543210', 
        qualification: 'M.Sc',
        classes: ['Class C'],
        subjects: ['English']
      }
    ];
    setTeachers(mockData);
  }, []);

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
    setFormData({ ...teacher });
    setIsEditing(true);
    setEditModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
      alert('Teacher deleted successfully!');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update teacher details in teachers array
    setTeachers(teachers.map(teacher => (teacher.id === formData.id ? formData : teacher)));
    setEditModalOpen(false);
    setSelectedTeacher(null);
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      qualification: '',
      classes: [],
      subjects: []
    });
    setIsEditing(false);
    alert('Teacher details updated successfully!');
  };

  return (
    <div className="container">
      <h2>View Teachers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Qualification</th>
            <th>Classes</th>
            <th>Subjects</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={teacher.id}>
              <td>{index + 1}</td>
              <td>{isEditing && selectedTeacher && selectedTeacher.id === teacher.id ? (
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              ) : teacher.firstName}</td>
              <td>{isEditing && selectedTeacher && selectedTeacher.id === teacher.id ? (
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              ) : teacher.lastName}</td>
              <td>{isEditing && selectedTeacher && selectedTeacher.id === teacher.id ? (
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              ) : teacher.email}</td>
              <td>{isEditing && selectedTeacher && selectedTeacher.id === teacher.id ? (
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              ) : teacher.phoneNumber}</td>
              <td>{isEditing && selectedTeacher && selectedTeacher.id === teacher.id ? (
                <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} />
              ) : teacher.qualification}</td>
              <td>{teacher.classes.join(', ')}</td>
              <td>{teacher.subjects.join(', ')}</td>
              <td>
                {isEditing && selectedTeacher && selectedTeacher.id === teacher.id ? (
                  <button className="btn btn-success me-2" onClick={handleSubmit}>Save</button>
                ) : (
                  <button className="btn btn-primary me-2" onClick={() => handleEdit(teacher)}>Edit</button>
                )}
                <button className="btn btn-danger" onClick={() => handleDelete(teacher.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTeacher;

import React, { useState } from 'react';
import axios from 'axios';

const ViewStandard = () => {
  const [selectedStandard, setSelectedStandard] = useState('');
  const [students, setStudents] = useState([]);

  const handleSelectStandard = async (std) => {
    setSelectedStandard(std);
    try {
      const response = await axios.get(`http://localhost:5011/api/Student/GetByStd/${std}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h2>View Standards</h2>
      <div className="row">
        {[...Array(10).keys()].map(std => (
          <div key={std + 1} className="col-md-3 mb-3">
            <button
              className={`btn btn-primary btn-lg w-100 ${selectedStandard === `${std + 1}` && 'active'}`}
              onClick={() => handleSelectStandard(`${std + 1}`)}
            >
              Standard {std + 1}
            </button>
          </div>
        ))}
      </div>
      {selectedStandard && (
        <>
          <div className="mt-4">
            <h3>Students for Standard {selectedStandard}</h3>
            <ul className="list-group">
              {students.map(student => (
                <li key={student.studentId} className="list-group-item">{student.name} - Section: {student.section}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewStandard;

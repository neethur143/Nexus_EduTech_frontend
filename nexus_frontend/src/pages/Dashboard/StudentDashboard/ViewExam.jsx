import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewExam = () => {
  const [exams, setExams] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const examResponse = await axios.get('http://localhost:5011/api/Exam/GetAll');
        setExams(examResponse.data);

        // Dummy data for classes and subjects
        const classesData = [
          { classId: 101, standard: '1', section: 'A' },
          { classId: 102, standard: '1', section: 'B' },
          { classId: 103, standard: '1', section: 'C' },
          { classId: 104, standard: '1', section: 'D' },
          { classId: 201, standard: '2', section: 'A' },
          { classId: 202, standard: '2', section: 'B' },
          { classId: 203, standard: '2', section: 'C' },
          { classId: 204, standard: '2', section: 'D' },
          { classId: 301, standard: '3', section: 'A' },
          { classId: 302, standard: '3', section: 'B' },
          { classId: 303, standard: '3', section: 'C' },
          { classId: 304, standard: '3', section: 'D' },
          { classId: 401, standard: '4', section: 'A' },
          { classId: 402, standard: '4', section: 'B' },
          { classId: 403, standard: '4', section: 'C' },
          { classId: 404, standard: '4', section: 'D' }
        ];
        setClasses(classesData);

        const subjectsData = [
          { subjectId: 10, name: 'Maths' },
          { subjectId: 11, name: 'English' },
          { subjectId: 12, name: 'Biology' },
          { subjectId: 13, name: 'Evs' }
          // Add more subjects as needed
        ];
        setSubjects(subjectsData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>View Exams</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            
            <th>#</th>
            <th>Exam Name</th>
            <th>Exam Date</th>
            <th>Subject</th>
            <th>Standard</th>
            <th>Section</th>
            <th>Max Mark</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={exam.examId} className={index % 2 === 0 ? 'table-info' : 'table-info'}>
              <td>{index + 1}</td>
              <td>{exam.examName}</td>
              <td>{exam.examDate.split('T')[0]}</td>
              <td>{subjects.find(subject => subject.subjectId === exam.subjectId)?.name}</td>
              <td>{classes.find(cls => cls.classId === exam.classId)?.standard}</td>
              <td>{classes.find(cls => cls.classId === exam.classId)?.section}</td>
              <td>{exam.max_Mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewExam;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Header from "./includes/header";
// import Footer from "../admin/includes/footer";
// import { Variables } from "../Variables";

// // Dummy data to use instead of API calls
// const dummyClassData = {
//   classIdFk: 1,
//   classTeacherIdPk: 1,
//   standardName: "10",
//   divisionName: "A"
// };

// const dummyStudentData = [
//   { studentIdPk: 1, studentRollNo: "001", studentFname: "John", studentMname: "", studentLname: "Doe" },
//   { studentIdPk: 2, studentRollNo: "002", studentFname: "Jane", studentMname: "", studentLname: "Doe" }
// ];

// export class teacherTakeAttendance extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       students: [],
//       classname: "",
//       classid: 0,
//       studid: 0,
//       attendenceIdPk: 0,
//       classtechid: 0,
//       classTeacherIdFk: 0,
//       attendenceDate: "",
//       attendanceStatus: [],
//     };
//   }

//   componentDidMount() {
//     // Simulate fetching class data
//     this.setState({
//       classid: dummyClassData.classIdFk,
//       classtechid: dummyClassData.classTeacherIdPk,
//       classname: `${dummyClassData.standardName}-${dummyClassData.divisionName}`
//     });
//     // Simulate fetching student data
//     this.setState({ students: dummyStudentData });
//     // Initialize attendance status with default values
//     const attendanceStatus = dummyStudentData.map(() => "P");
//     this.setState({ attendanceStatus });
//   }

//   onClick(studid, status, index) {
//     // Update attendance status in the state
//     const updatedAttendanceStatus = [...this.state.attendanceStatus];
//     updatedAttendanceStatus[index] = status;
//     this.setState({ attendanceStatus: updatedAttendanceStatus });
//   }

//   render() {
//     const { students, classname, attendanceStatus } = this.state;

//     return (
//       <div>
//         <Header />
//         <div className="robust-content content container-fluid">
//           <div className="content-wrapper">
//             <div className="content-header row">
//               <div className="content-header-left col-md-6 col-xs-12">
//                 <h2 className="content-header-title mb-0">Student List</h2>
//                 <div className="row breadcrumbs-top">
//                   <div className="breadcrumb-wrapper col-xs-12">
//                     <ol className="breadcrumb">
//                       <li className="breadcrumb-item">
//                         <Link to="/">Home</Link>
//                       </li>
//                       <li className="breadcrumb-item active">Student List</li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="content-body">
//               <section id="file-export">
//                 <div className="row">
//                   <div className="col-xs-12">
//                     <div className="card">
//                       <div className="card-header">
//                         <h4 className="card-title"> Class: {classname} </h4>
//                       </div>
//                       <div className="card-body collapse in">
//                         <div className="card-block card-dashboard">
//                           <table className="table table-striped table-bordered">
//                             <thead>
//                               <tr>
//                                 <th>#</th>
//                                 <th>Student RollNo</th>
//                                 <th>Student Name</th>
//                                 <th>Status</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {students.map((stud, index) => (
//                                 <tr key={index}>
//                                   <td>{index + 1}</td>
//                                   <td>{stud.studentRollNo}</td>
//                                   <td>{stud.studentFname} {stud.studentMname} {stud.studentLname}</td>
//                                   <td>
//                                     {attendanceStatus[index] === "P" ? (
//                                       <button className="btn btn-outline-danger remove-item-btn" onClick={() => this.onClick(stud.studentIdPk, "A", index)}>Absent</button>
//                                     ) : (
//                                       <button className="btn btn-outline-primary edit-item-btn" onClick={() => this.onClick(stud.studentIdPk, "P", index)}>Present</button>
//                                     )}
//                                   </td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                             <tfoot>
//                               <tr>
//                                 <th>#</th>
//                                 <th>Student RollNo</th>
//                                 <th>Student Name</th>
//                                 <th>Status</th>
//                               </tr>
//                             </tfoot>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default teacherTakeAttendance;

import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function StudentDetails() {

    return (
        // <MDBTable align='middle'>
        //   <MDBTableHead>
        //     <tr>
        //     <th scope='col'>Student ID</th>
        //       <th scope='col'>Name</th>
        //       <th scope='col'>Class</th>
        //       <th scope='col'>Division</th>        
        //       <th scope='col'>Actions</th>
        //     </tr>
        //   </MDBTableHead>
        //   <MDBTableBody>
        //     <tr>
        //       <td>
        //        //studentid
        //       </td>
        //       <td>
        //        //name
        //       </td>
        //       <td>
        //        //class
        //       </td>
        //       <td>
        //       //division
        //       </td>
        //       <td>
        //       <MDBBtn className='me-2' color='warning'>Update</MDBBtn>

        //       <MDBBtn className='me-1' color='danger'>Delete</MDBBtn>

        //      </td>
        //     </tr>       
        //   </MDBTableBody>
        <div>
   <table className="table table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Division</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>//studentId</td>
                        <td>//name</td>
                        <td>//class</td>
                        <td>//division</td>
                        <td>
                            <button type="button" className="btn btn-warning me-2">
                                <i className="bi bi-pencil-square" /> Edit
                            </button>
                            <button type="button" className="btn btn-danger">
                                <i className="bi bi-trash" /> Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}
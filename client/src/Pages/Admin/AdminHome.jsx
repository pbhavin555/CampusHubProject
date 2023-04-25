import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AdminHomeHelper from '../../Components/AdminHomeHelper';
import Profile from '../../Style/Images/profile.jpeg';

const AdminHome = () => {
  const store = useSelector((store) => store);
  const history = useHistory();

  return (
    <div className="d-flex flex-column h-100">
      <AdminHomeHelper />

      <div className="container-fluid mt-4">
        <div className="row ">
               <div className="col-md-3">
              {/* Add a CSS class to the sidebar */}
                 </div>

          <div className="col-md-9">
            <div className="container my-5">
              {store.admin.isAuthenticated ? (
                <div className="row">
                  <div className="col-md-5">
                    <div
                      className="card mb-3"
                      style={{ maxWidth: '18rem' }}
                    >
                      <img
                        className="card-img-top"
                        src={Profile}
                        alt="Profile"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {store.admin.admin.name}
                        </h5>
                        <h5 className="card-title">
                          {store.admin.admin.registrationNumber}
                        </h5>
                        {/* <Link to='/faculty/updateProfile'>UPDATE PROFILE</Link> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <table className="table border">
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>{store.admin.admin.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{store.admin.admin.email}</td>
                        </tr>
                        <tr>
                          <td>Registration Number</td>
                          <td>
                            {store.admin.admin.registrationNumber}
                          </td>
                        </tr>
                        <tr>
                          <td>Joining Year</td>
                          <td>{store.admin.admin.joiningYear}</td>
                        </tr>
                        <tr>
                          <td>Department</td>
                          <td>{store.admin.admin.department}</td>
                        </tr>
                        <tr>
                          <td>Contact Number</td>
                          <td>
                            {store.admin.admin.contactNumber
                              ? store.admin.admin.contactNumber
                              : 'NA'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                history.push('/')
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

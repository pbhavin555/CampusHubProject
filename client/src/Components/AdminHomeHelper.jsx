import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { adminLogout } from '../redux/action/adminAction';
import Logo from '../../src/Pages/Images/logo.jpeg';
import { FaUser, FaChalkboardTeacher, FaGraduationCap, FaBook, FaPlusSquare, FaSignOutAlt } from 'react-icons/fa';
import './AdminHomeHelper.css';


 

const Home = () => {

  const store = useSelector((store) => store);
  const [name, setName] = useState('');
  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);

  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(adminLogout());
    history.push('/');
  };

  // Google functionality
  const [searchText, setSearchText] = useState('');
  const onSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = searchText.split(' ').join('+');
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
  };

   const [active, setActive] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 bg-dark text-white position-fixed" style={{ height: "100vh" }}>
          <div className="d-flex flex-column">
            <div className="sidebar-sticky mb-3">
              <ul className="nav flex-column">
                 <li className={`nav-item ${active ? 'active' : ''}`}
                        style={{ display: 'inline-block', padding: '10px', border: '1px solid black' }}
                        onClick={() => setActive(!active)}>
                    <Link className="nav-link" to="/admin">
                        <FaUser size={40} />
                        {name.toUpperCase()}
                   </Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/addFaculty">
                    <FaPlusSquare size={20} style={{ marginRight: '10px' }}/>
                    ADD FACULTY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/addStudent">
                    <FaPlusSquare size={20} style={{ marginRight: '10px' }} />
                    ADD STUDENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/addSubject">
                    <FaPlusSquare size={20} style={{ marginRight: '10px' }}/>
                    ADD SUBJECT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/addAdmin">
                    <FaPlusSquare size={20} style={{ marginRight: '10px' }}/>
                    ADD ADMIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/allFaculties">
                    <FaChalkboardTeacher size={20} style={{ marginRight: '10px' }}/>
                    OUR FACULTIES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/allStudents">
                    <FaGraduationCap size={20} style={{ marginRight: '10px' }}/>
                    OUR STUDENTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/circular">
                    <FaGraduationCap size={20} style={{ marginRight: '10px' }}/>
                    Circular
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/allSubject">
                    <FaBook size={20} style={{ marginRight: '10px' }}/>
                    SUBJECTS
                  </Link>
                </li>
              </ul>
            </div>
           <div className="mt-auto" style={{position: 'fixed', bottom: 30, left: 50}}>
                <button
                    className="btn btn-outline-danger"
                    onClick={logoutHandler}
                    type="button"
                >
                    <FaSignOutAlt size={20} />
                    LOGOUT
                </button>
                </div>

</div>
</nav>
<main className="col-md-10 bg-light ml-auto pt-3 px-4">
<div className="d-flex justify-content-between align-items-center mb-3">
        <a className='navbar-brand' href='/'>
                <img
                  src={Logo}
                  width='45'
                  height='45'
                  className='d-inline-block align-top me-2'
                  alt=''
                  style={{ marginRight: '10px' }}
                />
                <h4 className='d-inline-block align-middle mb-0'>
                  CaMpusHub
                </h4>
              </a>
<form onSubmit={onSearchSubmit} className="d-flex align-items-center">
<input
type="text"
placeholder="Search on Google..."
className="form-control"
value={searchText}
onChange={(e) => setSearchText(e.target.value)}
/>
<button type="submit" className="btn btn-primary ml-2">
Search
</button>
</form>
</div>
</main>
</div>
</div>
);
};

export default Home;

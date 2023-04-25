import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { studentLogout, newerChats, previousChats } from '../redux/action/studentAction';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../../src/Pages/Images/logo.jpeg';

const Home = () => {
  const history = useHistory();
  const store = useSelector((store) => store);
  const [name, setName] = useState('');
  useEffect(() => {
    if (store.student.student.student.name) {
      setName(store.student.student.student.name);
    }
  }, [store.student.student.student.name]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newerChats(store.student.student.student.name));
    dispatch(previousChats(store.student.student.student.name));
  }, [store.student.newerChats.length]);
  const logoutHandler = () => {
    dispatch(studentLogout());
    history.push('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         
            <a className="navbar-brand" href="">
            <img src={Logo} width="45" height="45" className="d-inline-block align-top me-2" alt="" />
            <h4 className="d-inline-block align-middle mb-0">CaMpusHub</h4>
        </a>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/home">{name.toUpperCase()}</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/student/updateProfile">UPDATE PROFILE</Link>
          </Nav.Link>
          <NavDropdown title="ACADEMIC" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/student/testPerformance">Test Performance</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/student/attendence">Attendance</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/student/getAllSubjects">Student Subject List</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <Link to="/studentDetails">STUDENTS</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/studentDetails">
              NEW CONVERSATION ({store.student.newerChats.length})
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/student/updatePassword">UPDATE PASSWORD</Link>
          </Nav.Link>
        </Nav>
        <Button variant="outline-primary" onClick={logoutHandler}>
          LOGOUT
        </Button>
      </Navbar.Collapse>
    </nav>
  );
};

export default Home;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../src/Style/Images/neonbrand-1-aA2Fadydc-unsplash.jpg';



 

const Home = () => {
  
    const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const sidebarClasses = showSidebar ? "col-md-2 bg-purple text-white position-fixed" : "col-md-2 bg-dark text-white position-fixed";
  const navbarClasses = showNavbar ? "navbar navbar-expand-lg navbar-light bg-white shadow-sm" : "navbar navbar-expand-lg navbar-dark bg-dark";


  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 bg-dark text-white position-fixed" style={{ height: "100vh" }}>
          <div className="d-flex flex-column">
            <div className="sidebar-sticky mb-3">
              <ul className="nav flex-column">

               <li className="nav-item">
                    <Link className="nav-link" to="/Pages/" 
                     style={{ textAlign: "center",
                                border: "1px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#FFB6C1"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                        Circular & News 
                    </Link>
              </li>

                 
                <li className="nav-item">
                  <Link className="nav-link" to="/Pages/FacultyStudentLoginPags"
                   style={{ textAlign: "center",
                                border: "1px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#FFB6C1"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                    
                    Faculty
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Pages/FacultyStudentLoginPags"
                   style={{ textAlign: "center",
                                border: "1px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#FFB6C1"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                  
                     STUDENT
                  </Link>
                </li>
            
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/addAdmin"
                   style={{ textAlign: "center",
                                border: "1px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#FFB6C1"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                   
                    ACADEMIC CALENDER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/"
                   style={{ textAlign: "center",
                                border: "1px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#FFB6C1"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                    
                     KANBAN
                  </Link>
                </li>

               <li className="nav-item">
                <Link className="nav-link" to="/Pages/LoginPage"
                        style={{ position: "absolute", bottom: 20, left: 70, 
                                border: "1px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#FFB6C1"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                    ADMIN
                </Link>
                </li>


                
                
              </ul>
               <div id="theme-setting">
                       
                </div>

            </div>
           

</div>
</nav>
    <main className="col-md-10 bg-light ml-auto pt-3 px-4">
          <nav className={navbarClasses}>
            <div className="container-fluid">
              <button onClick={handleToggleNavbar} className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">
                <img
                  src={Logo}
                  width="45"
                  height="45"
                  className="d-inline-block align-top me-2"
                  alt=""
                  style={{ marginRight: "10px" }}
                />
                <h4 className="d-inline-block align-middle mb-0">CaMpusHub</h4>
              </a>
              
            </div>
          </nav>
          
        </main>
</div>
</div>
);
};

export default Home;



style={{
                      textAlign: "center",
                      border: "1px solid #ccc",
                      padding: "5px 10px",
                      transition: "all 0.3s ease-in-out",
                      color: "white",
                    }}



                    // import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CircularPage = () => {
//   const [circulars, setCirculars] = useState([]);

//   useEffect(() => {
//     const fetchCirculars = async () => {
//       try {
//         const res = await axios.get('/api/circulars');
//         setCirculars(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchCirculars();
//   }, []);

//   return (
//     <div>
//       <h1>Circulars</h1>
//       <ul>
//         {circulars.map((circular) => (
//           <li key={circular._id}>
//             <h2>{circular.title}</h2>
//             <p>{circular.content}</p>
//             <p>{circular.date}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CircularPage;
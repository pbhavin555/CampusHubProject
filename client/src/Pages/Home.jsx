import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Logo from '../../src/Pages/Images/logo.jpeg';
import './Images/background.css';
import backgroundImg from './Images/IMG_6161.jpeg'
import backgroundImg1 from './Images/IMG_0581.jpeg'
import backgroundImg2 from './Images/IMG_6169.jpeg'

 

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


  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };




  return (
    
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 bg-dark text-white position-fixed" style={{ height: "100vh" }}>
          <div className="d-flex flex-column">
            <div className="sidebar-sticky mb-3">
              <ul className="nav flex-column">

              <li className="nav-item">
                  <Link className="nav-link" to="/homepage"
                   style={{ textAlign: "center",
                                border: "4px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#00FF00"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                    
                     HOME
                  </Link>
                </li>

               <li className="nav-item" >
                    <Link className="nav-link" to="/Pages/Home/CircularNews" 
                      style={{ 
                        textAlign: "center", 
                        border: "5px solid #ccc", 
                        padding: "5px 10px",
                        transition: "all 0.3s ease-in-out",
                        color: "#fff" 
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = "#0000FF"}
                      onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                      CIRCULAR AND NEWS
                    </Link>
                  </li>


                 
                <li className="nav-item">
                  <Link className="nav-link" to="/Pages/FacultyLoginPags"
                   style={{ textAlign: "center",
                                border: "4px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#00FF00"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                    
                    FACULTY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Pages/StudentLoginPags"
                   style={{ textAlign: "center",  color: "#fff" ,
                                border: "4px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#0000FF"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                  
                     STUDENT
                  </Link>
                </li>
            
                <li className="nav-item">
                  <Link className="nav-link" to="/Pages/Home/calendar"
                   style={{ textAlign: "center", 
                                border: "4px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#00FF00"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                   
                    ACADEMIC CALENDER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/"
                   style={{ textAlign: "center", color: "#fff" ,
                                border: "4px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#0000FF"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                    
                     KANBAN
                  </Link>
                </li>
                 
                 <li className="nav-item">
                  <Link className="nav-link" to="/"
                   style={{ textAlign: "center", 
                                border: "4px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#00FF00"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                    
                     TEXT
                  </Link>
                </li>

               <li className="nav-item">
                <Link className="nav-link" to="/Pages/Admin"
                        style={{ position: "absolute", bottom: 20, left: 70, 
                                border: "4px solid #ccc", padding: "5px 10px",
                                transition: "all 0.3s ease-in-out" }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#00FF00"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
                    ADMIN
                </Link>
                </li>


                
                
              </ul>
                 

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
 <div className='row-2 bg-light  pt-3 px-4' style={{ marginLeft: '230px'  }}>
            
           <div className='col-md-8 bg-light  pt-3 px-4'>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="w-100"
            src={backgroundImg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={backgroundImg1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={backgroundImg}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
   
      <div><h3>WELCOME TO CAMPUSHUB</h3></div>
      <div style={{ position: 'absolute', top: '110px', left: '70%' ,  }}>
                        
      </div>

           
</div>

</div>


);
};

export default Home;
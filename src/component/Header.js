import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg   fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand brand" href="#home">
         <h1 className="text-light">My Portfolio</h1>
        </a>
        <button
          className="navbar-toggler"     type="button"
       data-bs-toggle="collapse"  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="home" smooth={true} duration={100}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="skills" smooth={true} duration={100}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="projects" smooth={true} duration={100}>
                Projects
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <a href="#!" className="nav-icon mx-2">
              <i className="fab fa-linkedin-in i11"></i>
            </a>
            <a href="#!" className="nav-icon mx-2">
              <i className="fab fa-twitter i11"></i>
            </a>
            <a href="#!" className="nav-icon mx-2">
              <i className="fab fa-github i11"></i>
            </a>
            <div className="head-btn"><p>Let's Connect</p></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

    
            
       

export default Header;
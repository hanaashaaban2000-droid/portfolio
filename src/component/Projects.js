import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects=()=>{
    return(
    <div id="projects" className="project">
        <h1 className="pro-title">my projects</h1>
        <p className="pro-para">my name is Hanaa Shaban, i live in Giza,this is my 1st project in react Dev.</p>
        <nav className="nav2">
            <Link  to="sec1" className="col-lg-4  sec1"><h3>1st Section</h3></Link>
            <Link  to="sec2" className="sec2 col-lg-4"><h3>2nd Section</h3></Link>
            <Link to="sec3" className="sec3 col-lg-4"><h3>3rd Section</h3></Link>
        </nav>
        <Outlet/>
    </div>
    )
}
export default Projects;
import React from "react";

const Footer=()=>{
    return(
        <div className="final">
      
        <div className=" foot-container  my-5 ">
            <div className="col-lg-6">
            <h2 className=" mx-5 p-5">See My Projects At Once & leave Here Your E-mail Address.</h2>
            </div>
            <div className="col-lg-5 foot-cont  my-5 ">
          <p className="py-3"> Enter Your E-mail Adress</p>
          <button className="btn-sub">submit</button>
            </div>
      

        </div>
        <div  className="final-sec my-5"> 
        <div className="col-2 col-lg-7 finallogo"> 
            <h1 className="logo-final">LoGo</h1>
            </div>
            <div className="col-lg-5 col-10"> 
            <div className="div-icon2 ">
            <a href="#!" className="nav-icon2 mx-2">
              <i className="fab fa-linkedin-in i111"></i>
            </a>
            <a href="#!" className="nav-icon2 mx-2">
              <i className="fab fa-twitter i111"></i>
            </a>
            <a href="#!" className="nav-icon2 mx-2">
              <i className="fab fa-github i111"></i>
            </a>
            </div>
            <div>
            <p className="copy"> --Copyrights 2025-- All Rights Reserved here By Hanaa Shaban Abdelmoez</p>
            </div>
            </div>
        </div>
          </div>
    )
}
export default Footer;
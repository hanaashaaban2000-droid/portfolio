
// import { start } from "@popperjs/core";
import React from "react";
import { useTypewriter ,Cursor } from "react-simple-typewriter";
const Home = () => {
  const [text]= useTypewriter({
    words: ["Communication Engineer", "Frontend Developer","Fullstack Developer"],
    loop:{},
    typeSpeed: 100,
    deleteSpeed:80,
  })
  return (
    <section id="home" className="hero-section">
      <div className="container text-center text-white">
        <div className="row align-items-center justify-content-between hero-flex">
         
          <div className="col-lg-6 text-start hero-content col-12">
          <h2 className="wel-title">Welcome all to my portfolio</h2>
            <h1 className="mx-5" style={{display: "inline"}}>Hi! I'm Hanaa Shaban Abdelmoez, {" "} </h1>
            <span style={{fontWeight: "bold", color: "white", fontSize: "35px" ,display:"inline-block" }} > {text} </span>
          <span><Cursor cursorStyle="<" /> </span>
          <p className="my-5"> Hello Everyone, i have 6 monthes in course Frontend</p>
          <h2>Let's Connect <i class="fas fa-arrow-alt-circle-right"></i></h2>
          </div>
          <div className="robot-img col-lg-4 text-center col-12">
          <div className=" hero-robot ">
            {/* <img src="Images/perf.jpg " alt="Astronaut" className="robot-img" /> */}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
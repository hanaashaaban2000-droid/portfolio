import React from "react";
import './App.css';
import { Routes, Route  } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Footer from "./component/Footer";
// import Final from "./component/Final";
const  App =()=> {
  return(
 <>
         <Header/>
         <Home/>
     
         <Skills/>
             {/* <Projects/> */}
            
    <Routes>
         
              {/* <Route path="/skills" element={<Skills/>}/> */}
            <Route  path="" element={<Projects/>}>
            <Route path="sec1" element={
          <>
          <Section1/>
          <Section2/>
          </>
          }/> 
         <Route path="sec2" element={<Section2/>}/>
         <Route path="sec3" element={
          <>
          <Section3/>
          <Section2/>
          </>
          }/> 
         
          </Route> 
         
          </Routes>
          <Footer/>
        
       </>
        
      )
  }
  export default App;

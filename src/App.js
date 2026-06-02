import React from "react";
import './App.css';
import { BrowserRouter,Routes, Route  } from "react-router-dom";
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
  <BrowserRouter>
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
        
        </BrowserRouter>
        
      )
  }
  export default App;



// import React from "react";
// import { BrowserRouter,Routes ,Route } from "react-router-dom";
// import Home from "./Home";
// import Teams from "./Teams";
// import Prices from "./Prices";
// import Footer from "./Footer";
// import Header from "./Header";
// import Studata from "./Studata";
// import Allstu from "./Allstu";
// import StuFailure from "./Stufailure";
// import StuSuccess from "./Stusuccess";
// const APP=()=>{
//     return(
//         <BrowserRouter>
//          <Header/>
//         <Routes>
       
//             <Route path="/home" element={<Home/>}/>
//             <Route path="/teams" element={<Teams/>}/>
//             <Route path="/prices" element={<Prices/>}/>
//             <Route path="/footer" element={<Footer/>}/>
//             <Route path="/studata" element={ <Studata/>}/>
//             <Route path="*" element={<h2>page not found</h2>}/>

//             {/* <Route path="/students" element={<Allstu/>}>
//         <Route path=":studenstid" element={<StuSuccess/>}/>
//         <Route path="500" element={<StuFailure/>}/>
//         </Route> */}
//         </Routes>
       
//         </BrowserRouter>
//     )
// }
// export default APP;

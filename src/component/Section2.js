import React from "react";

const Section2=()=>{
    return (
        <div className="section2-container">
           <div className="sec2-div">
            <div className="sec2-div1 "></div>
            <div className="sec2-div2"> <h2 className="my-3">Get in Touch</h2>
            <input type="text" placeholder="First Name" className="fname" />
            <input type="text" placeholder="Last Name" className="lname"/>
            <input type="text" placeholder="Email Address"className="fname" />
            <input type="text" placeholder="Phone No." className="lname"/>
            <textarea cols="30" rows="8" placeholder="Message" className="textarea"/>
            <button className="sec2-btn">send</button>
            </div>
            </div>

            </div>
    )
}
export default Section2;
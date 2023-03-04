import React from "react"
import './landingpage.css'
import image from "./images/logo.png"
import image2 from "./images/photo.jpg"

function Landingpage(){

    return(
        <div className="header">
            <div className="top-nav">
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>OUR WORK</a></li>
                    <li><a>WHAT WE DO</a></li>
                    <li><a>ABOUT US</a></li>
                </ul>
                <button>Contact Us</button>
            </div>

            <div className="side-nav">
                <img src={image} className="logo" />
                <a>LATEST PROJECTS</a>
            </div>
            <div className="text-box">
                <p>WE HELP YOU TO</p>
                <h2>Track Your Projects & Skills</h2>
                <button id="get">Your Journey Begins Here</button>
            </div>
            {/* <img id="image" src={image2}/> */}
        </div>
    )
}


export default Landingpage;

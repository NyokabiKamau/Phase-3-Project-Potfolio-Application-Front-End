import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import './landingpage.css'
import image from "./images/logo.png"
// import { AiOutlineHome } from 'react-icons/ai';
// import Login from "../login/login"

function Landingpage(){

    const [animals, setAnimals] = useState([])
    const[isHome, setIsHome] = useState(true)

    const loadPage = () => {
        fetch('https://api.npoint.io/61de2641c6b0c40684e2')
          .then((response) => response.json())
          .then((data) => {
            setAnimals(data)
            console.log(data)
          })
         
      }
      

    return(
        <div className="head">
            <div className="top-nav">
                <ul>
                    <li><NavLink className="nav-link active-link" to="/" exact="true" activeClassName="active-link" onClick={() => setIsHome(true)}>HOME</NavLink></li>
                    <li><NavLink className="nav-link" to="/projects" exact="true">PROJECTS</NavLink></li>
                    {/* <li><a>OUR WORK</a></li>
                    <li><a>WHAT WE DO</a></li>
                    <li><a>ABOUT US</a></li> */}
                </ul>
                <button>Contact Us</button>
            </div>

            {/* <div className="side-nav">
                <img src={image} className="logo" />
                <a>LATEST PROJECTS</a>
            </div> */}
           
        </div>
    )
}


export default Landingpage;

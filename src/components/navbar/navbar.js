import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';


function Navbar() {
    return (
    <nav id="nav-head">
        <ul className="navbar">
            <li>
                <Link className="nav-link" to="/" exact="true"><AiOutlineHome id="home" /> </Link>
            </li>
            <li>
                <Link className="nav-link" to="/projects" exact="true" id="project"> Projects</Link>
            </li>

            <button className="btn mt-2" id="log-out"> <AiOutlineLogout /> Log Out</button>
        </ul>
    </nav>
    )
}

export default Navbar
import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

import { ImHome3, ImProfile } from 'react-icons/im';


function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="/" exact="true"> Portfolio App</ Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-black">button</i>
        </button>
        
        <div>
        
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <li className="nav-item active">
                    <Link className="nav-link" to="/" exact="true"><ImHome3 /> Home
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/profile" exact="true"><ImProfile/> Profile
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
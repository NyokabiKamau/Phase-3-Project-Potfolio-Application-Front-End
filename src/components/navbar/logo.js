import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from 'react-icons/ci';

function Logo() {
    return (
      <div>
          <div className="logo-wrap">
            <div id="logo" className='logo' alt="Brand logo" >
               <Link className="navbar-brand navbar-logo text-white" to="/" exact="true"> < CiUser id="Ci-user" /></ Link>
            </div>
          </div>
      </div>
    );
  }
export default Logo;
import React from "react";
import Apage from "../apage/apage";
import Home from "../home/home";
import Logo from "./logo";
import Navbar from "./navbar";

function Header() {
    return (
      <header>
        <div className="h-container">
          <Logo />
          <Navbar />
        </div>
      </header>
    );
}

export default Header

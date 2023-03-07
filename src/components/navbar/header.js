import React from "react";
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

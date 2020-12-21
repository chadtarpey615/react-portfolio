import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Navbar() {
    return (
      <header>
        <div>
          <nav>
            <NavLink to="/" exact>
              About
            </NavLink>
            <NavLink to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink to="/contact">
              Contact
            </NavLink>
            
          </nav>
        </div>
      </header>
    )
}

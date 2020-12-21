import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Navbar() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font=bold tracking-widest">
            Chad Tarpey
            </NavLink>
          <NavLink to="/about"
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200">
            About
            </NavLink>
          <NavLink to="/portfolio"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200"
            activeClassName="text-green-100 bg-green-700"
          >

            Portfolio
            </NavLink>
          <NavLink to="/contact"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200"
            activeClassName="text-green-100 bg-green-700"
          >
            Contact
            </NavLink>

        </nav>

        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/chadtarpey615"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
          <SocialIcon
            url="https://www.linkedin.com/in/chad-tarpey-a276511a3/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />


        </div>
      </div>
    </header>
  )
}

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Navbar() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font=bold tracking-widest">
            Chad Tarpey
            </Link>
          <Link 
           activeClass="active"
          to="main"
           spy={true}
           smooth={true}
           offset={-70}
           duration={900}
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200">
            About
            </Link>
          <Link 
           activeClass="active"
           to="portfolio"
           spy={true}
           smooth={true}
           offset={-70}
           duration={900}
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200"
            activeClassName="text-green-100 bg-green-700"
          >

            Portfolio
            </Link>
          <Link 
          to="contact"
           activeClass="active"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1400}
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200"
            activeClassName="text-green-100 bg-green-700"
          >
            Contact
            </Link>

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

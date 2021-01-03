import React from "react";
import { Navbar, Nav, Container, Form, Button, NavDropdown, FormControl } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"
import Resume from "../../images/chadtarpey.pdf"


export default function NavBar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">

        Chad Tarpey
    </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              activeClassName="text-white"
              className="d-inline-block align-top">
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              activeClassName="text-white"
              className="">
              Portfolio
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              activeClassName="text-white"
              className="">
              Contact
            </Link>
          </Nav.Link>


        </Nav>
        <div className="justify-content-between">
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
            url={Resume}
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
        </div>
      </Navbar.Collapse>

    </Navbar>
  )
}

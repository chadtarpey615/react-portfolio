import React from 'react';
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from 'reactstrap';
import { IconContext } from "react-icons"
import { DiJsBadge, DiReact, DiMongodb, DiMysql, DiNodejs, DiCss3, DiJqueryLogo, DiHtml5 } from "react-icons/di";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { FiPaperclip } from "react-icons/fi"
import Resume from "../utils/images/chadtarpey1.pdf"



import image from "../utils//images/IMG_6139.jpeg"

export default function About() {
    return (
        <main id="main">
            <Row className="">


                <Col className="col-md-4 col-12 ">
                    <h1 style={{ fontSize: "40px" }}>Hi, I'm Chad Tarpey</h1>
                    <p style={{ paddingTop: "10px", paddingLeft: "10px" }}>Hello, I'm a full stack developer where main studys in the MERN stack.
                    Love to code and learn everyday. I graduated from Vanderbilt/Trilogy Full Stack Developer Coding Bootcamp in January 2021.
                    Looking for a company to work for so i can grow and learn everyday as full stack developer.
               </p>
                </Col>
                <Col className="col-md-5 col-12">
                    <img className="family-pic" src={image} alt="picture of my family" />
                </Col>


            </Row>
            <Row>
                <hr />
                <Col className="col-lg-6 col-12">

                    <h1 style={{ fontSize: "3rem", textAlign: "center", paddingTop: "5px" }}>My Technologies</h1>
                    <IconContext.Provider value={{ color: "black", size: "7em" }}>
                        <Col className="col-12 col-md-8 d-flex justify-content-start">
                            <ul>
                                <li><DiJsBadge /></li>
                                <li><DiCss3 /></li>
                                <li><DiNodejs /></li>
                                <li><DiMysql /></li>
                            </ul>
                        </Col>
                        <Col className="col-12 d-flex justify-content-start">

                            <ul>
                                <li><DiMongodb /></li>
                                <li><DiReact /></li>
                                <li><DiJqueryLogo /></li>
                                <li><DiHtml5 /></li>
                            </ul>
                        </Col>
                    </IconContext.Provider>

                </Col>
                <hr />
                <Col className="col-lg-6  col-12">

                    <h1 style={{ fontSize: "3rem", textAlign: "center", paddingTop: "10px" }}>Social Links</h1>
                    <IconContext.Provider value={{ color: "black", size: "7em" }}>
                        <Col className="col-8  d-flex justify-content-start px-5">
                            <ul>
                                <a href="https://www.twitter.com/chadtip10" target="_blank" className="mx-3"><li><FaTwitter /></li></a>
                                <a href="https://www.linkedin.com/in/chad-tarpey-a276511a3/" target="_blank"><li><FaLinkedin /></li></a>
                                <a href="https://github.com/chadtarpey615?tab=repositories" target="_blank" className="mx-3"> <li><FaGithub /></li></a>
                                <a href={Resume} target="_blank"><li><FiPaperclip /></li></a>
                            </ul>
                        </Col>

                    </IconContext.Provider>

                </Col>

                <hr />
            </Row>

        </main>
    )

}



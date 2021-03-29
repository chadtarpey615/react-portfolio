import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IconContext } from "react-icons"
import { DiJsBadge, DiReact, DiMongodb, DiMysql, DiNodejs, DiCss3, DiJqueryLogo, DiHtml5 } from "react-icons/di";



import image from "../utils//images/IMG_6139.jpeg"

export default function About() {
    return (
        <main id="main">
            <Row>


                <Col className="col-md-4 col-12 pt-10">
                    <h1 style={{ fontSize: "40px" }}>Hi, I'm Chad Tarpey</h1>
                    <p style={{ paddingTop: "10px" }}>Hello, I'm a full stack developer where main studys in the MERN stack.
                    Love to code and learn everyday. I graduated from Vanderbilt/Trilogy Full Stack Developer Coding Bootcamp in January 2021.
                    Looking for a company to work for so i can grow and learn everyday as full stack developer.
               </p>
                </Col>
                <Col className="col-md-5 col-12">
                    <img className="family-pic" src={image} alt="picture of my family" />
                </Col>

                <Col className="col-lg-3 col-12">

                    <h1 style={{ fontSize: "3rem", textAlign: "center", paddingTop: "10px" }}>My Technologies</h1>
                    <IconContext.Provider value={{ color: "black", size: "7em" }}>
                        <ul>
                            <li><DiJsBadge /></li>
                            <li><DiCss3 /></li>
                            <li><DiNodejs /></li>
                            <li><DiMysql /></li>
                            <li><DiMongodb /></li>
                            <li><DiReact /></li>
                            <li><DiJqueryLogo /></li>
                            <li><DiHtml5 /></li>
                        </ul>
                    </IconContext.Provider>

                </Col>

            </Row>
        </main>
    )

}

   // <IconContext.Provider value={{ color: "blue", size:"1em"}}>

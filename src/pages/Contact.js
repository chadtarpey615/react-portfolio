import React from "react";
import { Container, Row, Col } from 'reactstrap';
import {Card, CardText, CardBody, CardLink,CardTitle, CardHeader, CardFooter, Button} from 'reactstrap';
import { IconContext} from "react-icons"
import {FaLinkedin, FaGithub, FaFileAlt} from "react-icons/fa";
import Resume from "../images/chadtarpey.pdf"
import { Document } from "react-pdf";
//import Navbar from "../components/Navbar/Navbar";




export default function Contact() {
    return (
<>
        <Row id="contact" className="justify-content-center py-5">
            <h1 style={{textAlign: "center"}}>Contact Me</h1>
            </Row>
            <Row className="justify-content-center py-2">
            <h1 style={{textAlign: "center"}}>chadtarpey@gmail.com</h1>
            </Row>
            <Row className="justify-content-between">
            <Col className="col-md-3">
            <Card>
        <CardHeader>LinkedIn</CardHeader>
        <CardBody>
        <IconContext.Provider value={{ color: "blue", size:"10em"}}>
          <FaLinkedin/>
        </IconContext.Provider>

          <CardText>Check out my LinkedIn page</CardText>
          <Button href="https://www.linkedin.com/in/chad-tarpey-a276511a3/" target="_blank">My LinkedIn</Button>
        </CardBody>
      </Card>
      </Col>
      <Col className="col-md-3">

      <Card>
        <CardHeader>GitHub</CardHeader>
        <CardBody>
        <IconContext.Provider value={{ color: "black", size:"10em"}}>
          <FaGithub/>
        </IconContext.Provider>

          <CardText>Check out my repositories</CardText>
          <Button href="https://github.com/chadtarpey615?tab=repositories" target="_blank">My GitHub</Button>
        </CardBody>
      </Card>

            </Col>
            <Col className="col-md-3">

      <Card>
        <CardHeader>My Resume</CardHeader>
        <CardBody>
        <IconContext.Provider value={{ color: "tan", size:"10em"}}>
          <FaFileAlt/>
        </IconContext.Provider>

          <CardText>A link to my Resume.</CardText>
          <Button href={Resume} target="_blank">My Resume</Button>
          
        </CardBody>
      </Card>
            </Col>
        </Row>

    </>
    )
}
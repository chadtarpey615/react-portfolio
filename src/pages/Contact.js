import React from "react";
import { Container, Row, Col } from 'reactstrap';
import {Card, CardText, CardBody, CardLink,CardTitle, CardHeader, CardFooter, Button} from 'reactstrap';
//import Navbar from "../components/Navbar/Navbar";




export default function Contact() {
    return (
<>
        <Row id="contact" className="justify-content-center py-5">
            <h1 style={{textAlign: "center"}}>Contact Me</h1>
            </Row>
            <Row className="justify-content-between">
            <Col className="col-md-3">
            <Card>
        <CardHeader>LinkedIn</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
      </Card>
      </Col>
      <Col className="col-md-3">

      <Card>
        <CardHeader>GitHub</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
      </Card>

            </Col>
            <Col className="col-md-3">

      <Card>
        <CardHeader>My Resume</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
      </Card>

            </Col>
        </Row>
    </>
    )
}
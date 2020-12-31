import React from "react";
import "./portfolio.css"
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { SocialIcon } from "react-social-icons"
import Projects from "../utils/projects.json"
import image from "../images/project1.png"
import image1 from "../images/time-zone-traveler.png"
import image2 from "../images/fitness copy.png"
//import Card from "../components/Card/Card"
import Cards from "../components/Cards/Cards"
import Wrapper from "../components/Wrapper/Wrapper"



export default function Portfolio(props) {
    return (
        <>
                <h1 className="display-3">My Projects</h1>
        <p className="lead">This is a page of my projects.</p>
        <hr className="my-2" />
        <p className="lead"></p>
              <div>
                  <Row className="justify-content-between">
                      <Col className="col-md-3">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Super Hero Search</CardTitle>
                </CardBody>
                <img width="100%" src={image} alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
              </Col>

              <Col className="col-md-3">

              <Card>
                <CardBody>
                  <CardTitle tag="h5">Time Zone Traveler</CardTitle>
                </CardBody>
                <img width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
              </Col>
              <Col className="col-md-3">

              <Card>
                <CardBody>
                  <CardTitle tag="h5">Fitness Tracker</CardTitle>
                </CardBody>
                <img width="100%" src={image2} alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
              </Col>
              </Row>
              <Row className="justify-content-between py-5">

              <Col className="col-md-3">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                </CardBody>
                <img width="100%" src={image} alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
              </Col>

              <Col className="col-md-3">

              <Card>
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                </CardBody>
                <img width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
              </Col>
              <Col className="col-md-3">

              <Card>
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                </CardBody>
                <img width="100%" src={image2} alt="Card image cap" />
                <CardBody>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
              </Col>
              </Row>
             
            </div>
        </>
    )



  
}

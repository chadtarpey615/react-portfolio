import React from "react";
import { Container, Row, Col } from 'reactstrap';
import {Card, CardText, CardBody, CardLink,CardTitle, CardSubtitle} from 'reactstrap';
import { SocialIcon } from "react-social-icons"
import Projects from "../utils/projects.json"
import image from "../images/project1.png"
import image1 from "../images/time-zone-traveler.png"
import image2 from "../images/fitness copy.png"
import image3 from "../images/employee copy.png"
import image4 from "../images/screenshot copy.png"
import image5 from "../images/budget copy.png"





export default function Portfolio(props) {
    return (
        <div className="container portfolio" style={{backgroundColor:"#455456"}}>
            <h1 style={{ textAlign: "center", padding: "10px 10px" }} className="display-3">My Projects</h1>
            <hr className="my-2" />
            <p className="lead"></p>
            <div>
                <Row className="justify-content-between py-5">
                    <Col className="col-md-3 col-12 py-3">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Super Hero Search</CardTitle>
                            </CardBody>
                            <img width="100%" src={image} alt="Card image cap" />
                            <CardBody>
                                <CardText>The subject of this project is wrapped around Marvel
                                & DC superHeroes.Using three api calls to get stats, gifs, and movies onto the screen that is created
                                dynamically
        with JQUERY.</CardText>
                                <SocialIcon
                                    url="https://chadtarpey615.github.io/Super-Heroes/"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    deployed version
                    <SocialIcon
                                    url="https://github.com/chadtarpey615/Super-Heroes"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    repo
                </CardBody>
                        </Card>
                    </Col>

                    <Col className="col-md-3 col-12 py-3">

                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Time Zone Traveler</CardTitle>
                            </CardBody>
                            <img width="100%" src={image1} alt="Card image cap" />
                            <CardBody>
                                <CardText>Time Zone Traveler application that uses three api's. Map Box, Open cage, and Algolia api's.
                                With GSAP animations for the intro loading of the home page. You can add food locations all over the world .
                                When selecting the add food location button it with take you to food form page. From there you fill out all
    the fields to input a new food location into MySql database using sequelize models.</CardText>
                                <SocialIcon
                                    url="https://eatandplay.herokuapp.com"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    deployed version
                    <SocialIcon
                                    url="https://github.com/outoftune266/Time-Zone-Traveler"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    repo
                </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-md-3 col-12 ">

                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Fitness Tracker</CardTitle>
                            </CardBody>
                            <img width="100%" src={image2} alt="Card image cap" />
                            <CardBody>
                                <CardText>A application made with Node.js, Express, and MongoDB. You can add resistance or cardio workouts and then view the combined weight of multiple exercises on the stats page </CardText>
                                <SocialIcon
                                    url="https://workout-fitness.herokuapp.com/"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    deployed version
                    <SocialIcon
                                    url="https://github.com/chadtarpey615/Workout-Tracker"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    repo
                </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-between py-3">

                    <Col className="col-md-3 col-12 py-3">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Employee-Tracker</CardTitle>
                            </CardBody>
                            <img width="100%" src={image3} alt="Card image cap" />
                            <CardBody>
                                <CardText>A React.js application that display a list of employees. You can find employees by their names, date of birth, and email by using state. Can also sort the names of employees alphabetically </CardText>
                                <SocialIcon
                                    url="https://chadtarpey615.github.io/React-Employee-Directory"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    deployed version
                    <SocialIcon
                                    url="https://github.com/chadtarpey615/React-Employee-Directory"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    repo
                </CardBody>
                        </Card>
                    </Col>

                    <Col className="col-md-3 col-12 py-3">

                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Eat-Da-Burger</CardTitle>
                            </CardBody>
                            <img width="100%" src={image4} alt="burger picture" />
                            <CardBody>
                                <CardText>Burger application that use handlebars.js for templating engine. MySql as the database using ORM to save burgers.
                                Can add and devour burgers and using express to get, post, update, and delete burgers
                  </CardText>
                                <SocialIcon
                                    url=" https://pure-taiga-95225.herokuapp.com/"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    deployed version
                    <SocialIcon
                                    url="https://github.com/chadtarpey615/burger"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    repo
                </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-md-3 col-12 py-3">

                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Offline Budget</CardTitle>
                            </CardBody>
                            <img width="100%" src={image5} alt="offline budget picture" />
                            <CardBody>
                                <CardText>Offline Budget is a application that without an internet connection. A user can still withdrawal or deposit funds.When brought back online the transactions will be performed</CardText>
                                <SocialIcon
                                    url="https://peaceful-caverns-58225.herokuapp.com/"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    deployed version
                    <SocialIcon
                                    url="https://peaceful-caverns-58225.herokuapp.com/"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }} />
                    repo
                </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    )




}

import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { SocialIcon } from "react-social-icons"
import { projects } from "../utils/projects.js"
import Project from "../components/Projects.js"






export default function Portfolio(props) {
    return (
        <>
            <h1>My Projects</h1>

            <div className="projects-center" id="portfolio">

                {
                    projects.map((projects) => {
                        return <Project key={projects.id} {...projects} />
                    })
                }
            </div >
        </>
    )




}

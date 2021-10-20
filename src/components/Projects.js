import React from "react";
import { SocialIcon } from "react-social-icons"
import { Container, Row, Col } from 'reactstrap';


const Projects = ({ title, image, text, url, repo }) => {
    return (
        <article className="projects">
            <div className="img-container">
                <img src={image.default} alt={title} />
            </div>
            <div className="projects-footer">
                <h3>{title}</h3>
                <p>{text}</p>
                <SocialIcon
                    url={url}
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                />
                 Deployed version
                <SocialIcon
                    url={repo}
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                />
                 See repository
            </div>
        </article>
    )
}

export default Projects;
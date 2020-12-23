import React from "react";
import "./portfolio.css"
import { SocialIcon } from "react-social-icons"
import Projects from "../utils/projects.json"
import image from "../images/project1.png"
import image1 from "../images/time-zone-traveler.png"
import image2 from "../images/weather.png"
import MediaCard from "../components/Card/Card"


export default function Portfolio() {
    return (
        <div id="portfolio"className="container">
                <h1 className="text-5xl text-center py-2">My Projects</h1>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <h1 className="text-3xl">Super Hero Search</h1>
                        <p>My first group project in class. The subject of this project is wrapped around Marvel
                        & DC superHeroes.Using three api calls to get stats, gifs, and movies onto the screen that is created
                        dynamically
                        with JQUERY
                        </p>
                        <SocialIcon c
                            url="https://eatandplay.herokuapp.com"
                            className="mr-4"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }} />
            click here to see deployed app
            <br />
                        <SocialIcon
                            url="https://github.com/chadtarpey615/Time-Zone-Traveler"
                            className="mr-4"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }} />
            click here to see github repo
                    </div>
                    <div className="flex-1">
                        <img className="float-left" src={image} />
                    </div>

                </div>
                <div className="flex space-y-4">
                    <div className="flex-1">
                        <h1 className="text-3xl">Time Zone Traveler</h1>
                        <p>Time Zone Traveler application that uses three api's. Map Box, Open cage, and Algolia api's.
                        With GSAP animations for the intro loading of the home page. You can add food locations all over the world .
                        When selecting the add food location button it with take you to food form page. From there you fill out all
                        the fields to input a new food location into MySql database using sequelize models. Then a food icon will appear on
  the map that you can click on that with display information for that restaurant including a link to that restaurant website.</p>
                        <SocialIcon c
                            url="https://eatandplay.herokuapp.com"
                            className="mr-4"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }} />
            click here to see deployed app
            <br />
                        <SocialIcon
                            url="https://github.com/chadtarpey615/Time-Zone-Traveler"
                            className="mr-4"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }} />
            click here to see github repo
                    </div>
                    <div className="flex-1">
                        <img className="grid-cols-2" src={image1} />
                    </div>
                </div>
                <div className="flex space-y-4">
                    <div className="flex-1">
                        <h1 className="text-3xl">Super Hero Search</h1>
                        <p>First project into class</p>
                        
                    </div>
                    <div className="flex-1">
                        <img className="grid-cols-2" src={image2} />
                    </div>
                </div>

                <MediaCard 
                    title={Projects[0].title}
                    image={Projects[0].image}
                    text={Projects[0].text}
                    url={Projects[0].url}
                    repo={Projects[0].repo}
                />
            </div> 
    )
        



    
}


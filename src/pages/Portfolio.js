import React from "react";
import "./portfolio.css"
import { SocialIcon } from "react-social-icons"
import Projects from "../utils/projects.json"
import image from "../images/project1.png"
import image1 from "../images/time-zone-traveler.png"
import image2 from "../images/weather.png"
import Card from "../components/Card/Card"
import Cards from "../components/Cards/Cards"
import Wrapper from "../components/Wrapper/Wrapper"



export default function Portfolio(props) {
    return (
          <div className="row" style={{ backgroundColor: "#17141d"}}>  
          <h1 style={{ textAlign: "center", fontSize: "100px"}}>My Projects</h1>
        <section id="portfolio" className="card-list col-3-sm px-5 py-5">
            <Card 
            title={Projects[0].title}
            image={Projects[0].image}
            text={Projects[0].text}
            url={Projects[0].url}
            repo= {Projects[0].repo}
            />
            <Card 
            title={Projects[1].title}
            image={Projects[1].image} 
            text={Projects[1].text}
            url={Projects[1].url}
            repo= {Projects[1].repo}
            />
            <Card
            title={Projects[2].title}
            image={Projects[2].image}
            text={Projects[2].text}
            url={Projects[2].url}
            repo= {Projects[2].repo}
            />
        </section>
        <section id="portfolio" className="card-list">
            <Card 
            title={Projects[3].title}
            image={Projects[3].image}
            text={Projects[3].text}
            url={Projects[3].url}
            repo= {Projects[3].repo}
            />
            <Card 
            title={Projects[4].title}
            image={Projects[4].image}
            text={Projects[4].text}
            url={Projects[4].url}
            repo= {Projects[4].repo}
            />
            <Card 
            title={Projects[5].title}
            image={Projects[5].image}
            text={Projects[5].text}
            url={Projects[5].url}
            repo= {Projects[5].repo}
            />
        </section>
        
        

        </div>
    )



  
}

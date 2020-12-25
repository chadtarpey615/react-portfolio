import React from "react";
import "./portfolio.css"
import { SocialIcon } from "react-social-icons"
import Projects from "../utils/projects.json"
import image from "../images/project1.png"
import image1 from "../images/time-zone-traveler.png"
import image2 from "../images/weather.png"
//import Cards from "../components/Card/Card"
import Cards from "../components/Cards/Cards"



export default function Portfolio(props) {
    return (
          <div style={{ backgroundColor: "#17141d"}}>  
          <h1 style={{ textAlign: "center", fontSize: "100px"}}>My Projects</h1>
        <section id="portfolio" className="card-list">
            <Cards 
            title={Projects[0].title}
            image={Projects[0].image}
            text={Projects[0].text}
            url={Projects[0].url}
            url= {Projects[0].repo}
            />
            <Cards 
            title={Projects[1].title}
            image={Projects[1].image} 
            text={Projects[1].text}
            />
            <Cards 
            title={Projects[2].title}
            image={Projects[2].image}
            text={Projects[2].text}
            />
        </section>
        <section id="portfolio" className="card-list">
            <Cards 
            title={Projects[3].title}
            image={Projects[3].image}
            text={Projects[3].text}
            />
            <Cards 
            title={Projects[4].title}
            image={Projects[4].image}
            text={Projects[4].text}
            />
            <Cards 
            title={Projects[5].title}
            image={Projects[5].image}
            text={Projects[5].text}
            />
        </section>
        
        

        </div>
    )



    
}

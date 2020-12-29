import React from "react";
import image from "../images/IMG_6139.jpeg"

export default function About() {
    return (
        <main id="main">
            <div className="container">
                <div className="row">
                    <div className="col col-3-sm">
                        <img src={image} alt="picture of my family" />
                    </div>
                    <div className="col-4 pt-10">
                        <h1 style={{ fontSize:"40px"}}>Hi, I'm Chad Tarpey</h1>
                        <p style={{ paddingTop:"10px"}}>Hello, I'm a full stack developer where main studys in the MERN stack.
                        Love to code and learn everyday.
               </p>
                        <h1 style={{ fontSize:"30px", textAlign:"center", paddingTop:"10px"}}>Technologies</h1>
                        <ul className="ul-check primary list-unstyled mt-5">
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>Node.js</li>
                            <li>MySQL</li>
                            <li>MongoDb</li>
                            <li>React</li>
                            <li>Express.js</li>
                            <li>JQuery</li>
                        </ul>
                       
                    </div>
                </div>
            </div>

        </main>
    )

    }

import React from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
import image from "../images/sky.jpeg"

export default function Home() {
    return (
        <main id="home">
            <div className=" hero container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <img src={image} alt="sky" className="img-responsive" style={{width:"100vw", height:"100vh"}}/>
                            <div style={heroText} className="carousel-caption">
                                <h1 style={{fontSize:"45px", fontWeight:"bold"}}>Hello. I'm Chad, a Full Stack Developer</h1>
                            </div>
      </div>
                    </div>
                </div>

        </main>
    )
}

const heroText = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "large",
    translate: "translate(-50%, -50%)"
}


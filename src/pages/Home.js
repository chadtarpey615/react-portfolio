import React from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
import image from "../utils//images/sky.jpeg"

export default function Home() {
    return (
        <>
            <main id="home">

                <img src={image} alt="sky" className="img-responsive" />
                <div className="hero-text">
                    <h1 style={{ fontSize: "45px", fontWeight: "bold", color: "white" }}>Hello. I'm Chad, a Full Stack Developer</h1>
                </div>


            </main>
            <hr />
        </>
    )
}



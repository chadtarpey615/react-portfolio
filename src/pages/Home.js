import React from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
import image from "../utils//images/sky.jpeg"

export default function Home() {
    return (
        <>
            <main id="home">
                <div>
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <img src={image} alt="sky" className="img-responsive" style={{ width: "100vw", height: "100vh" }} />
                            <div style={heroText}>
                                <h1 style={{ fontSize: "45px", fontWeight: "bold", color: "white" }}>Hello. I'm Chad, a Full Stack Developer</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <hr />
        </>
    )
}

const heroText = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "45%",
    fontSize: "large",
    translate: "translate(-50%, -50%)"

}


import React from "react";
import image from "../images/sky.jpeg"

export default function Home() {
    return (
        <main id="home">
            <img src={image} alt="Sky" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text 6xl text-red-100 font-bold leading-none lg: leading-snug home-name">Hello. I'm Chad a Full Stack Developer</h1>
            </section>
        </main>
    )
}


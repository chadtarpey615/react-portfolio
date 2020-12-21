import React from "react";
import image from "../images/IMG_6139.jpeg"

export default function About() {
    return (
        <main>
            <div className="box-border h-22 w-22 p-4 flex flex-row ">
            <img src={image} alt="Sky" className="absolute justify-center object-contain w-full h-full"/>
            </div>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text 6xl text-red-100 font-bold leading-none lg: leading-snug home-name"></h1>
            </section>
        </main>
    )
}


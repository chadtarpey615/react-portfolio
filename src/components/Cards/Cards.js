import React from "react";
import { SocialIcon } from "react-social-icons"
import Image from "../../images/time-zone-traveler.png"
import "./cards.css"


export default function Cards(props) {
    return (
        <>
        <section id="portfolio" className="card-list">
            <article className="card">
                <header className="card-header">
                <h2>{props.title}</h2>
                <img src={props.image} />
                <p>{props.text}</p>
                </header>
                <SocialIcon
            url={props.url}
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
            <SocialIcon 
            url={props.repo}
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
            
            
            </article>
            
        </section>
        </>
    )
}
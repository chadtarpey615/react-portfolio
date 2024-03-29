import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { SocialIcon } from "react-social-icons"
import { projects } from "../utils/projects.js"
import Project from "../components/Projects.js"






export default function Portfolio(props) {
    const [mobileIndex, setMobileIndex] = useState(3)
    const loadMore = window.innerWidth <= 833

    const mobileView =
        projects.filter((projects, index) => index < mobileIndex).map((item) => {
            return (

                <>
                    <Project key={item.id} {...item} />
                </>
            )
        }

        )

    const desktopView = projects.map((projects) => {

        return <Project key={projects.id} {...projects} />
    })

    const handleMobile = () => {
        setMobileIndex(6)
        const mobileButton = document.getElementById("mobile-projects")
        mobileButton.classList.add("hidden")
    }


    return (
        <>

            <h1>My Projects</h1>

            <div className="projects-center" id="portfolio">
                {!loadMore ? desktopView : mobileView}
                {loadMore && <button id="mobile-projects" onClick={handleMobile}>load more</button>}

            </div >
            <hr />
        </>
    )




}


// {
//     window.innerWidth <= 833 && loadMore === false ? (

//         <>
//             <h1>My Projects</h1>

//             <div className="projects-center" id="portfolio">
//                 {
//                     projects.filter((projects, index) => index < 3).map((item) => (
//                         <Project key={item.id} {...item} />
//                     ))
//                 }
//                 <button onClick={() => setLoadMore(true)}>Load More</button>
//             </div>
//         </>
//     ) :
//         <>
//             <h1>My Projects</h1>

//             <div className="projects-center" id="portfolio">
//                 {
//                     projects.map((projects, index) => (
//                         <Project key={projects.id} {...projects} />
//                     ))
//                 }
//                 <button onClick={() => setLoadMore(true)}>Load More</button>
//             </div>
//         </>



// }

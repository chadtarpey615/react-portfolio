import React from "react";
import { SocialIcon } from "react-social-icons"
import Image from "../../images/time-zone-traveler.png"
import "./cards.css"


export default function Cards(props) {
    return (
        <>
        <div className="card mb-3">
        <h3 className="card-header">Card header</h3>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: "1.125rem",textAanchor:"middle"}}>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
        </svg>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      </>
    )
}

{/* <div className="container-sm">
<section id="portfolio" className="card-list row">
    <article className="card col col-sm-12">
        <header className="card-header">
        <h2>{props.title}</h2>
        <img src={props.image} />
        <p>{props.text}</p>
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
        </header>
       
    
    
    </article>
    
</section> */}
// </div>

// <header className="bg-green-600">
//       <div className="container mx-auto flex justify-between">
//         <nav className="flex">
//           <Link
//             activeClass="active"
//             to="home"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={800}
//             activeClassName="text-white"
//             className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font=bold tracking-widest">
//             Chad Tarpey
//             </Link>
//           <Link 
//            activeClass="active"
//           to="main"
//            spy={true}
//            smooth={true}
//            offset={-70}
//            duration={800}
//             activeClassName="text-white"
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200">
//             About
//             </Link>
//           <Link 
//            activeClass="active"
//            to="portfolio"
//            spy={true}
//            smooth={true}
//            offset={-70}
//            duration={1200}
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200"
//             activeClassName="text-green-100 bg-green-700"
//           >

//             Portfolio
//             </Link>
//           <Link 
//           to="contact"
//            activeClass="active"
//            spy={true}
//            smooth={true}
//            offset={-70}
//            duration={700}
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200"
//             activeClassName="text-green-100 bg-green-700"
//           >
//             Contact
//             </Link>

//         </nav>

//         <div className="inline-flex py-3 px-3 my-6">
//           <SocialIcon
//             url="https://github.com/chadtarpey615"
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }} />
//           <SocialIcon
//             url="https://www.linkedin.com/in/chad-tarpey-a276511a3/"
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }} />
//           <SocialIcon
//             url=""
//             className="mr-4"
//             target="_blank"
//             fgColor="#fff"
//             style={{ height: 35, width: 35 }} />


//         </div>
//       </div>
//     </header>
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import Wrapper from "./components/Wrapper/Wrapper"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "../src/pages/Contact";
import Navbar from "./components/Navbar/Navbar"

import './App.css';




function App() {
  return (
      <div>
        <Navbar />
            
           <Home />
          <About/>
          <Portfolio />
          <Contact />
      </div>
  );
}

export default App;

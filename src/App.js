import React from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "../src/pages/Contact";
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "../src/components/Wrapper/Wrapper"

import './App.css';




function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      </Wrapper>
    </div>
  );
}

export default App;

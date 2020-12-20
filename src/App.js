import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components//Navbar/Navbar"
import Wrapper from "./components/Wrapper/Wrapper"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

import './App.css';




function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
         </Wrapper>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;

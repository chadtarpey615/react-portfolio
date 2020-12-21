import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "../src/pages/Contact";
import Navbar from "./components/Navbar/Navbar"

import './App.css';




function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={About} path="/about"/>
            <Route component={Portfolio} path="/portfolio" />
            <Route  component={Contact} path="/contact"/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

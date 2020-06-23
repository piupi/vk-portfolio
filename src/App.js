import React, { Component } from 'react';
import './App.css';
// import { render } from '@testing-library/react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Link and Redirect 

//Pages
import Contact from "./pages/Contact";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
    )
  };
}

export default App;

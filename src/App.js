import React from 'react';
import './App.css';
import './static/custom.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import List from './component/List';
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Works from './pages/Works';
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <Router>     
        <div className="menuWrapper shadow">
          <div className="logo-text">
            <h1>R</h1>
            <div></div>
          </div>
          <Link to="/">
            <Redirect to="/home" />
          </Link>
          <Link to="/home">
            <List icon = "fas fa-home" title="Home"></List>
          </Link>
          <Link to="/about" >
            <List icon = "far fa-user" title="About"></List>
          </Link>
          <Link to="/resume">
            <List icon = "fas fa-leaf" title="Resume"></List>
          </Link>
          <Link to="/works">
            <List icon = "fas fa-th-large" title="Works"></List>
          </Link>
          <Link to="/contact">
            <List icon = "fas fa-phone" title="Contact"></List>
          </Link>
        </div>
        <div className="contentWrapper">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

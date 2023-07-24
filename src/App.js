import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";
export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar m-2 navbar-expand-lg navbar-light bg-light border-bottom">
          <Link to="/" className="navbar-brand mx-5" href="#">
            Naitik.dev
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/services" className="nav-link" href="#">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/about" className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/contact" className="nav-link" href="#">
                  Contact Me
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

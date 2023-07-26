import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  let liCollection = [
    {
      id: 1,
      to: "/",
      name: "Home",
    },
    {
      id: 2,
      to: "/services",
      name: "Services",
    },
    {
      id: 3,
      to: "/about",
      name: "About",
    },

    {
      id: 4,
      to: "/contact",
      name: "Contact",
    },
  ];
  //   const LinksToMap = () => {
  //     const link = liCollection.map((liItem) => {
  //       return (
  //         <Fragment key={liItem.id}>
  //           <li className="nav-item mx-3">
  //             <Link to={liItem.to} className="nav-link">
  //               {liItem.name}
  //             </Link>
  //           </li>
  //         </Fragment>
  //       );
  //     });

  //     return <ul className="navbar-nav m-auto">{link}</ul>;
  //   };

  // use this function we need to use this component more than once
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-3">
          <Link to="/" className="navbar-brand mx-5">
            Naitik.dev
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              {liCollection.map((liItem) => {
                return (
                  <Fragment key={liItem.id}>
                    <li className="nav-item mx-3">
                      <Link to={liItem.to} className="nav-link">
                        {liItem.name}
                      </Link>
                    </li>
                  </Fragment>
                );
              })}
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
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
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

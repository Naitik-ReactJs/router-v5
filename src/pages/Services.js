import React from "react";
import "../App.css";
// import {
//   BrowserRouter as Link,
//   Route,
//   Switch,
//   useRouteMatch,
//   useParams,
//   Router,
// } from "react-router-dom";

const service = [
  {
    id: 1,
    to: "/service1",
    name: "Designing Services",
  },
  {
    id: 1,
    to: "/service1",
    name: "Development Services",
  },
];

const Service1 = () => <div>Product1</div>;

const Service2 = () => <div>Product2</div>;

const Services = () => {
  return <h1 className="container">Services</h1>;
};

export default Services;

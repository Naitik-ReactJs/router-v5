import React from "react";
import { Link, Switch, Route, useParams } from "react-router-dom";

const Services = () => {
  return (
    <div className="container">
      <h1>Services</h1>
      <ul>
        <li>
          <Link to="/services/design">Option 1</Link>
        </li>
        <li>
          <Link to="/services/development">Option 2</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/services">
          <h3>Please select a service</h3>
        </Route>
        <Route path="/services/:serviceId">
          <ServiceName />
        </Route>
      </Switch>
    </div>
  );
};

const ServiceName = () => {
  const { serviceId } = useParams();

  console.log("Service ID:", serviceId); // Add this line to check the value

  return (
    <div >
      <h3>Service ID: {serviceId}</h3>
    </div>
  );
};

export default Services;
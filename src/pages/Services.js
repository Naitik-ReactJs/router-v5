import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Services() {
  const { path, url } = useRouteMatch();

  return (
    <Router>
      <div className="container">
        <h1>Services </h1>
        <ul>
          <li>
            <Link to={`${url}/design`}>Option 1 </Link>
          </li>
          <li>
            <Link to={`${url}/development`}>Option 2</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${path}/:serviceId`}>
            <ServiceName />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
const ServiceName = () => {
  let { serviceId } = useParams();

  return (
    <div>
      <h3>{serviceId.toUpperCase()}</h3>
    </div>
  );
};
export default Services;

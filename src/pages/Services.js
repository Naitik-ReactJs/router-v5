import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function Services() {
  const { path, url } = useRouteMatch();

  return (
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
        <Route exact path={path}>
          <h3>Please select a service</h3>
        </Route>
        <Route path={`${path}/:serviceId`}>
          <ServiceName />
        </Route>
      </Switch>
    </div>
  );
}
const ServiceName = () => {
  let { serviceId } = useParams();

  return (
    <div className="container">
      <h3>{serviceId}</h3>
    </div>
  );
};
export default Services;

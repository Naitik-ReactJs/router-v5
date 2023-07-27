import React from "react";
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Services = () => {
  const { url, path } = useRouteMatch();
  // console.log(useRouteMatch());
  //console.log(url, path);
  return (
    <Container className="my-5 custom-container">
      <Row>
        <Col md={12}>
          <div className="service-list">
            <h1 className="lead fs-1 text-uppercase">
              Serv<span className="text-primary">i</span>ces
            </h1>
            <ul>
              <li>
                <Link className="text-dark" to={`${url}/design`}>
                  Option 1
                </Link>
              </li>
              <li>
                <Link className="text-dark" to={`${url}/development`}>
                  Option 2
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={12}>
          <div className="service-details">
            <Switch>
              <Route path={`${path}/:serviceId`}>
                <ServiceName />
              </Route>
            </Switch>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const ServiceName = () => {
  const { serviceId } = useParams();
  //console.log(serviceId);
  let serviceText;
  if (serviceId === "design") {
    serviceText =
      "Our design service provides stunning and user-friendly website designs.";
  } else if (serviceId === "development") {
    serviceText =
      "Our development service brings your ideas to life with custom web applications.";
  }

  return (
    <div className="service-card">
      <h3>What we offer: {serviceId.toUpperCase()}</h3>
      <p>{serviceText}</p>
    </div>
  );
};

export default Services;

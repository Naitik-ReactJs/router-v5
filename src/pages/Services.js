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
import NotFound from "./NotFound";
const Services = () => {
  const { url, path } = useRouteMatch();

  return (
    <Container className="my-5 mb-5 custom-container">
      <Row>
        <Col md={12}>
          <div className="service-list ">
            <h1 className="mb-4 fw-light fs-1 text-uppercase">
              Serv<span className="text-primary">i</span>ces
            </h1>
            <ul>
              <li className="mb-3">
                <Link className="text-dark" to={`${url}/design`}>
                  <h3 className="fw-light"> Option 1 </h3>
                </Link>
              </li>
              <li>
                <Link className="text-dark" to={`${url}/development`}>
                  <h3 className="fw-light"> Option 2 </h3>
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
  let { serviceId } = useParams();
  let serviceText;
  if (serviceId === "design") {
    serviceText =
      "Our design service provides stunning and user-friendly website designs.";
  } else if (serviceId === "development") {
    serviceText =
      "Our development service brings your ideas to life with custom web applications.";
  } else {
    return <NotFound />;
  }
  return (
    <>
      <div className="service-card m-2 p-5 ">
        <h3 className="mb-2">What we offer: {serviceId.toUpperCase()}</h3>
        <p>{serviceText}</p>
      </div>
    </>
  );
};

export default Services;
// else block should render the notfound component

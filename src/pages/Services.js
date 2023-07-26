import React from "react";
import { Link, Switch, Route, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css"; // Create a new CSS file for custom styles (Services.css)

const Services = () => {
  return (
    <Container className="my-5 contact-container">
      <Row>
        <Col md={4}>
          <div className="service-list">
            <h1>Services</h1>
            <ul>
              <li>
                <Link to="/services/design">Option 1</Link>
              </li>
              <li>
                <Link to="/services/development">Option 2</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={12}>
          <div className="service-details">
            <Switch>
              <Route exact path="/services">
                <h3>Please select a service</h3>
              </Route>
              <Route path="/services/:serviceId">
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

  // You can customize the text based on the serviceId
  let serviceText;
  if (serviceId === "design") {
    serviceText = "Our design service provides stunning and user-friendly website designs.";
  } else if (serviceId === "development") {
    serviceText = "Our development service brings your ideas to life with custom web applications.";
  } else {
    serviceText = "Service details for " + serviceId;
  }

  return (
    <div className="service-card">
      <h3>Service ID: {serviceId}</h3>
      <p>{serviceText}</p>
    </div>
  );
};

export default Services;

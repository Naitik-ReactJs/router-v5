import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const Contact = () => {
  return (
    <Container className="my-5 text-center  custom-container">
      <h1 className="lead fs-1 text-uppercase mb-5">
        Contact <span className="text-primary">Us</span>
      </h1>
      <div className="contact-info d-flex align-items-start flex-column">
        <p className="mb-3">For any inquiries, please contact us at:</p>
        <p>
          <span className="fw-bold">Phone : </span>{" "}
          <a href="tel:+1234567890">+91 95456 96969</a>
        </p>
        <p>
          <span className="fw-bold">Email : </span>
          <a href="mailto:naitikb.tagline@gmail.com">
            naitikb.tagline@gmail.com
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Contact;

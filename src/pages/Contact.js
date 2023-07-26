import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const Contact = () => {
  return (
    <Container className="m-5 text-center contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>For any inquiries, please contact us at:</p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
      </div>
    </Container>
  );
};

export default Contact;

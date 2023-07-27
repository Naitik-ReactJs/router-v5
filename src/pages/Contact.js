import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const Contact = () => {
  return (
    <Container className="my-5 text-center  custom-container">
      <h1 className="lead fs-1 text-uppercase">
        Contact <span className="text-primary">Us</span>
      </h1>
      <div className="contact-info">
        <p>For any inquiries, please contact us at:</p>
        <p>
          Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
        <p>
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </p>
      </div>
    </Container>
  );
};

export default Contact;
// const history = useHistory();
// ------------------------     useHistory hook        ----------------------------------------

// console.log(history);
//  <button className="btn btn-primary" onClick={() => history.goBack()}>
//           Previous
//         </button>
//         <button
//           className="btn btn-primary"
//           onClick={() => history.push("/services")}
//         >
//           Next
//         </button>

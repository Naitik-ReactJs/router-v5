import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
const Home = () => {
  return (
    <Container className="my-5 text-center  contact-container">
      <div className="contact-info">
        <p className="lead">
          I love turning design ideas into real things,
          <span className="d-block lh-5">making imagination come to life.</span>
        </p>
      </div>
    </Container>
  );
};

export default Home;

// <Container className="my-5 text-center  contact-container">
//   <h1>Contact Us</h1>
//   <div className="contact-info">
//     <p className="lead">
//       I love turning design ideas into real things,
//       <span className="d-block lh-5">
//         making imagination come to life.
//       </span>
//     </p>
//   </div>
// </Container>;

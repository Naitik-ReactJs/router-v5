import React from "react";

import "../App.css";
import { Container } from "react-bootstrap";

const About = () => {
  return (
<Container className="contact-container m-5 text-center">
  <div className="row">
    <div className="col text-center">
      <h3
        className="lead fs-1 text-uppercase  custom-letter-spacing"
  
      >
        About <span className="custom-color">me</span>
      </h3>
    </div>
  </div>
  <div className="row">
    <div
      className="col-md p-5 p-md-0 me-auto d-flex flex-column align-items-center justify-content-center"

    >
      <img
        src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=996&t=st=1690390787~exp=1690391387~hmac=0020d10fd0305bfd59e307b2820e210f09739db6dcb165dc2406f151043d87e1"
        className="img-fluid w-75"
        alt="My profile pic"
      />
    </div>
    <div className="col-md  mt-5">
      <div className="row">
        <div className="col">
          <h1 className="text-uppercase fw-bold mb-3">front end developer</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <p className=" mb-5 mt-3 justify-content-evenly custom-line-height ">
            {" "}
            I'm <span classname="fw-bold">Naitik Bhavsar </span>
            passionate about cutting-edge technologies and creating visually
            stunning interfaces. I believe in the power of exceptional user
            experiences and I strive to make every interface I create both
            beautiful and intuitive. I'm always up for a challenge and eager to
            push the boundaries of what's possible.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <button type="button" className="btn">
            <a
              href="Naitik_resume.pdf"
              download=""
              className="btn btn-outline-secondary custom-background text-dark p-3"
            >
              DOWNLOAD RESUME{" "}
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  </div>
</Container>

  );
};

export default About;

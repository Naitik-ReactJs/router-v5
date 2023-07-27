import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <h1> :(</h1>
        <br />
        <h2>
          A <span>404</span> error occured, Page not found, check the URL and
          try again.
        </h2>
        <br />
        <button
          onClick={() => history.push("/")}
          className="btn px-4 py-2 btn-danger"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import { useHistory, useLocation } from "react-router-dom";
const NotFound = () => {
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  return (
    <div className="container my-5 bg-light">
      <div className="container">
        <h1> :(</h1>
        <br />
        <h2>
          A 404 error occured, Page not found, check the URL{" "}
          <span className="text-danger"> {location.pathname}</span> and try
          again.
        </h2>
        <br />
        <button
          onClick={() => history.push("/")}
          className="btn fs-4 px-4 py-2 btn-danger"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

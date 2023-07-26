import React from "react";
import "../App.css";

import { BrowserRouter as Link, Switch, Router } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
// const service = [
//   {
//     id: 1,
//     to: "/service1",
//     name: "Designing Services",
//   },
//   {
//     id: 1,
//     to: "/service1",
//     name: "Development Services",
//   },
// ];

// const LinksToMap = () => {
//   const serviceLink = service.map((liItem) => {
//     return (
//       <Fragment key={liItem.id}>
//         <li>
//           <Link to={liItem.to}>{liItem.name}</Link>
//         </li>
//       </Fragment>
//     );
//   });
//   return <ul>{serviceLink}</ul>;
// };
const Service1 = () => <div>Designing</div>;

const Service2 = () => <div>Development</div>;

const Services = () => {
  return (
    <div>
      <div className="container">
        <h1>Services</h1>

        <Link to="/services/service1">Service1</Link>
        <br />
        <Link to="/services/service2">Service2</Link>
      </div>
      <Switch>
        <Route exact path="/services/service1" component={Service1} />
        <Route exact path="/services/service2" component={Service2} />
      </Switch>
    </div>
  );
};

export default Services;

import React from "react";
import "../App.css";
// import {
//   BrowserRouter as Link,
//   Route,
//   Switch,
//   useRouteMatch,
//   useParams,
//   Router,
// } from "react-router-dom";

const Services = () => {
  return <h1 className="container">Services</h1>;
};
//   let { path, url } = useRouteMatch();

//   return (
//     <Router>
//       <div>
//         <h2>Services</h2>
//         <ul>
//           <li>
//             <Link to={`${url}/web-design`}>Desgining</Link>
//           </li>
//           <li>
//             <Link to={`${url}/testing`}>Testing</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route exact path={path}>
//             <h3>Please select a topic.</h3>
//           </Route>
//           <Route exact path={`${path}/:serviceId`}>
//             <Service />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Service() {
//   let { serviceId } = useParams();
//   return (
//     <div>
//       <h3>{serviceId}</h3>
//     </div>
//   );
export default Services;

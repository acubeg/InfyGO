import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Routes } from "react-router";

import Home from "./component/Home";
import Login from "./component/Login";
import AddPassenger from "./component/AddPasenger";
import TicketDetails from "./component/TicketDetails";
import PageNotFound from "./component/PageNotFound";
import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";

function App() {
  return (
    <Router>
      <Home/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route component={PageNotFound} />
        </Routes>
    </Router>
  );
}

export default App;

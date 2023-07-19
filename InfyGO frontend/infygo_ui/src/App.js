import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import { useParams } from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/Login";
import AddPassenger from "./component/AddPasenger";
import TicketDetails from "./component/TicketDetails";
import PageNotFound from "./component/PageNotFound";
import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";
import FlightSearch from "./component/FlightSearch";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Registration from './component/Registration';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <body data-spy="scroll" data-target="#footer" style={{ marginTop: "80px" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/flight-search" element={<FlightSearch />} />
            <Route path="/ticket-details" element={<TicketDetails />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>{" "}
        </body>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;

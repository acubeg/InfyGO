import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import { useParams } from "react-router-dom";
import store from "./redux/store"; // Import the Redux store

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
import Registration from "./component/Registration";
import Spinner from "./component/Spinner";
import { useState, useEffect } from "react";
import Modal from "./component/Modal";
import Logout from "./component/Logout";
import { Provider } from 'react-redux';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect with useEffect
  useEffect(() => {
    // Some async task or API call here
    setTimeout(() => {
      setLoading(false); // Set loading to false after the task is done
    }, 2000); // Simulate 2 seconds of loading time
  }, []);

  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Header />
          <div data-spy="scroll" data-target="#footer" style={{ marginTop: "80px" }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/flight-search" element={<FlightSearch />} />
              <Route path="/ticket-details" element={<TicketDetails />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>{" "}
          </div>
        </Router>
        <Footer />
        <Spinner loading={loading} />
      </Provider>
    </React.Fragment>
  );
}

export default App;

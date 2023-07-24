import React, { useState, useEffect } from "react";
import logo from "./../images/infygonew.PNG";
import { Link, Router } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for user session and set isLoggedIn accordingly
    if (sessionStorage?.getItem("userId") && sessionStorage?.getItem("accessToken")) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <header id="header">
      <nav className="navbar st-navbar navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#st-navbar-collapse">
              <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>
            </button>
            <a className="logo1" href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="st-navbar-collapse">
            <div className="">
              <ul className="nav navbar-nav nav-links">
                <li>
                  {/* <a href="#header">Home</a> */}
                  <Link to="/home" className="home">
                    Home
                  </Link>
                </li>
                <li>
                  {/* <a href="/about-us">About Us</a> */}
                  <Link to="/about-us" className="about-us">
                    About Us
                  </Link>
                </li>
                <li>
                  {/* <a href="#contact">Contact Us</a> */}
                  <Link to="/contact-us" className="contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              {!isLoggedIn && (
                <ul className="nav navbar-nav navbar-right margintop-5">
                  <li>
                    <Link to="/register" className="btn btn-xs  nav-links-right">
                      {" "}
                      <span className="glyphicon glyphicon-user"></span>&nbsp;Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="btn btn-xs .nav-links-right">
                      <span className="glyphicon glyphicon-log-in"></span>&nbsp;Login
                    </Link>
                  </li>
                </ul>
              )}
              {isLoggedIn && (
                <ul className="nav navbar-nav navbar-right margintop-5">
                  <li>
                    <Link to="/logout" className="btn btn-xs .nav-links-right">
                      <span className="glyphicon glyphicon-log-in"></span>&nbsp;logout
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

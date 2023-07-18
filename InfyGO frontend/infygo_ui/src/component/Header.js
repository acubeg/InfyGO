import React from "react";
import logo from "./../images/infygonew.PNG";


const Header = () => {
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
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right margintop-5">
                <li>
                  <a className="btn btn-xs  nav-links-right" href="/register">
                    {" "}
                    <span className="glyphicon glyphicon-user"></span>&nbsp;Sign Up
                  </a>
                </li>
                <li>
                  <a className="btn btn-xs .nav-links-right" href="/login">
                    <span className="glyphicon glyphicon-log-in"></span>&nbsp;Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

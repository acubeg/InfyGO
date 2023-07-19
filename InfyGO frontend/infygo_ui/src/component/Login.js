import React from "react";
import { useEffect, useRef } from "react";
import HomeCarousel from "./HomeCarousel";

const Login = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Scroll to the element when the component mounts
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <body>
      <HomeCarousel />

      <div className="row marginbottom-150">
        <div className="container col-sm-offset-1 col-sm-5 col-left ">
          <h1 className="capital">
            <strong>About Us</strong>
          </h1>
          <span className="st-border"></span>
          <div className="about-us ">
            <br />
            <p>
              <b>
                Why InfyGo?
                <br />
              </b>{" "}
              The leading player in online flight bookings in India, InfyGo provides great offers, some of the lowest airfares, exclusive discounts and a
              seamless online booking experience. Flight bookings through our website is a user friendly experience, and with just a few clicks you can complete
              your booking.
            </p>
            <br />

            <p>
              <b>
                Booking Flights with InfyGo
                <br />
              </b>{" "}
              While booking flights with InfyGo, you can expect the ultimate online booking experience. With premium customer service, 24/7 dedicated helpline
              for support, and over 5 million delighted users, InfyGo takes great pride in enabling customer satisfaction.
            </p>
            <br />

            <p>
              <b>
                Domestic Flights with InfyGo
                <br />
              </b>{" "}
              InfyGo is India's leading player for flight bookings, and have a dominant position in the domestic flights sector. With the cheapest fare
              guarantee, experience great value at the lowest price.
            </p>
          </div>
        </div>

        <div ref={scrollRef} className="container  col-sm-5 col-right " style={{ width: "40%" }}>
          <br /> <br /> <br />
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="capital">Login</h4>
            </div>
            <div className="panel-body">
              <h3 className="red" id="msg2"></h3>

              <form id="login" action="${pageContext.servletContext.contextPath}/login" method="POST">
                <div className="form-group">
                  <label htmlFor="user" className="control-label col-sm-offset-1 col-sm-3 text-right">
                    User Id*
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" id="user" name="username" required />
                  </div>
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd" className="control-label col-sm-offset-1 col-sm-3 text-right">
                    Password*
                  </label>
                  <div className="col-sm-7">
                    <input type="password" className="form-control" id="pwd" name="password" required />
                  </div>
                  <br />
                </div>
                <br />
                <div className="col-sm-offset-4 col-sm-10 text-left">
                  <button type="submit" id="loginbtn" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <br />
                <br />
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />

                <div className="col-md-12 text-center">
                  <div className="text-center text-danger">Invalid credentials!</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import HomeCarousel from "./HomeCarousel";
import axios from "axios";
import Spinner from './Spinner';
import Modal from "./Modal";
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ userId: "", password: "" });
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the element when the component mounts
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const loginHandler = (e) => {
    if (validateDetails(loginDetails)) {
      setLoading(true);
      e.preventDefault();

      axios.post("http://localhost:8080/infy-go/login", loginDetails).then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem("accessToken", res?.data?.accessToken);
          sessionStorage.setItem("userId", res?.data?.userId);
          setTimeout(()=>{
            setLoading(false);
            setIsModalOpen(true);
          },2000);
        }else{
          sessionStorage.clear();
          setErrorMessage("Invalid Credentials!")
        }
        console.log(res);
      });
    }
  };

  const validateDetails = (details)=>{

    if(details.userId.length > 3 && details.password.length > 8){

      return true;
    }
    return false;

  }

  return (
    <div>
            {isModalOpen && <Modal message={"Successfully Loged In!"} />}

          <Spinner loading={loading} />
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

              <form id="login">
                <div className="form-group">
                  <label htmlFor="user" className="control-label col-sm-offset-1 col-sm-3 text-right">
                    User Id*
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" id="user" name="userId" required onChange={(e) => handleChange(e)} />
                  </div>
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd" className="control-label col-sm-offset-1 col-sm-3 text-right">
                    Password*
                  </label>
                  <div className="col-sm-7">
                    <input type="password" className="form-control" id="pwd" name="password" required onChange={(e) => handleChange(e)} />
                  </div>
                  <br />
                </div>
                <br />
                <div className="col-sm-offset-4 col-sm-10 text-left">
                  <button type="submit" id="loginbtn" 
                    className="btn btn-primary" onClick={loginHandler}
                    disabled={!validateDetails(loginDetails)}>
                    Login
                  </button>
                </div>
                <br />
                <br />
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />

                <div className="col-md-12 text-center">
                  <div className="text-center text-danger">{errorMessage}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useState } from "react";
import AboutUs from "./AboutUs";

const Registration = () => {
  const [formData, setFormData] = useState({
    userId: "testAccount2",
    name: "Seth Rolin",
    email: "rolin123@test.com",
    phone: "9890936101",
    password: "rolin@kaka101",
    city: "Pune",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };
  return (
    <div>
      {/* Import CSS here */}
      {/* Define header component (if needed) */}

      {/* SIGNUP SECTION */}
      <section id="slider" className="margintop-10">
        {/* ... Carousel code here ... */}
      </section>
      {/* /SLIDER */}

      <div className="row marginbottom-150">
        <div className="container col-sm-offset-1 col-sm-5 col-left">
          <h1 className="capital">
            <strong>About Us</strong>
          </h1>
          <span className="st-border"></span>
          <div className="about-us">{/* ... About Us content ... */}</div>
        </div>

        <div className="container col-sm-5 col-right signup" style={{ width: "40%" }}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="capital">Register</h4>
            </div>
            <div className="panel-body">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center">Sign Up</h5>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="userId">User ID</label>
                          <input type="text" className="form-control" id="userId" name="userId" value={formData.userId} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="city">City</label>
                          <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                          Sign Up
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Display success message and login link */}
            </div>
          </div>
        </div>
      </div>
      {/* /ABOUT US SECTION */}

      {/* Footer component (if needed) */}
    </div>
  );
};

export default Registration;

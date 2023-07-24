import React from "react";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate ();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!(formData.userId.length > 8)) {
      newErrors.userId = "User ID is required";
    }

    if (!(formData.name.length > 5)) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validator.isEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!validator.isMobilePhone(formData.phone, "any", { strictMode: false })) {
      newErrors.phone = "Invalid phone number format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios.post("http://localhost:8080/infy-go/register", formData).then((res) => {
        console.log(res);

        if (res.status === 200) {
          setSuccessMessage(res.data);

          setTimeout(5000, () => {
            navigate("/login");
          });
        }
      });
      // Add your form submission logic here
      console.log(formData);
    }
  };

  return (
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
                        <input
                          type="text"
                          className={`form-control ${errors.userId ? "is-invalid" : ""}`}
                          id="userId"
                          name="userId"
                          value={formData.userId}
                          onChange={handleChange}
                        />
                        {errors.userId && <div className="invalid-feedback text-danger">{errors.userId}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback text-danger">{errors.name}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback text-danger">{errors.email}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="text"
                          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && <div className="invalid-feedback text-danger">{errors.phone}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className={`form-control ${errors.password ? "is-invalid" : ""}`}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        {errors.password && <div className="invalid-feedback text-danger">{errors.password}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          className={`form-control ${errors.city ? "is-invalid" : ""}`}
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                        {errors.city && <div className="invalid-feedback text-danger">{errors.city}</div>}
                      </div>
                      <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block">
                        Sign Up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-success">{successMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

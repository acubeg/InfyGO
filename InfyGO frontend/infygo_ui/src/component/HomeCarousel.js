import React from "react";



import image1 from "./../imgs/382266112.jpg";
import image2 from "./../imgs/586266182.jpg";
import image3 from "./../imgs/346909778.jpg";

const HomeCarousel = () => {
  return (
    <section id="slider" className="margintop-10">
      <div id="home-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active" style={{ backgroundImage: `url(${image1})` }}>
            <br />
            <br />
            <div className="container">
              <div className="col-sm-6">
                <p className="head " style={{ color: "white" }}>
                  Connecting flight
                </p>
                <p className="carousel-content  " style={{ color: "white" }}>
                  Taking more than one flight to get to your final destination? At InfyGo, we make connecting flights much easier!
                </p>
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${image2})` }}>
            <br />
            <br />
            <div className="container">
              <div className="col-sm-6">
                <p className="head " style={{ color: "white" }}>
                  InfyGo Meals onboard
                </p>
                <p className="carousel-content " style={{ color: "white" }}>
                  Tickle your taste buds and enjoy sumptuous meals onboard!
                </p>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: `url(${image3})` }}>
            <br />
            <br />
            <div className="container">
              <div className="col-sm-6">
                <p className="head " style={{ color: "white" }}>
                  Hospitality
                </p>
                <p className="carousel-content " style={{ color: "white" }}>
                  More convenience and comfort with our hospitality and services!
                </p>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#home-carousel" data-slide-to="0" className="active"></li>
          <li data-target="#home-carousel" data-slide-to="1"></li>
          <li data-target="#home-carousel" data-slide-to="2"></li>
        </ol>
      </div>{" "}
    </section>
  );
};
export default HomeCarousel;

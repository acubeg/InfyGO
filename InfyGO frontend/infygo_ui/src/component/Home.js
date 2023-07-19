import React from "react";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <React.Fragment>
      <HomeCarousel />

      <AboutUs />
      <ContactUs />
    </React.Fragment>
  );
};

export default Home;

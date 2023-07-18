import React from "react";
import socialImage1 from "./../images/fb.png";
import socialImage2 from "./../images/gp.png";
import socialImage3 from "./../images/yt.png";
import socialImage4 from "./../images/t.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-push-6 footer-social-icons padding-15">
            <span>Follow us:</span>{" "}
            <a href="">
              <img src={socialImage1}></img>
            </a>{" "}
            <a href="">
              <img src={socialImage2}></img>
            </a>{" "}
            <a href="">
              <img src={socialImage3}></img>
            </a>{" "}
            <a href="">
              <img src={socialImage4}></img>
            </a>
          </div>
          {/* <!-- /SOCIAL ICONS --> */}
          <div className="col-sm-6 col-sm-pull-6 padding-15">
            <p>
              &copy; 2017 <a href="${pageContext.servletContext.contextPath}">InfyGo</a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

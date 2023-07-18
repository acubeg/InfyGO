import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h1 className="capital">
                <strong>Contact us</strong>
              </h1>
              <span className="st-border"></span>
            </div>
          </div>
          <div className="col-sm-4 contact-info">
            {/* <!-- <p className="contact-content">MService.</p>--> */}
            <br />
            <p className="st-address">
              <i className="fa fa-map-marker"></i> Airport Sales Counter No-01, Bengaluru International Airport,Devanhalli, Bengaluru 560300
            </p>
            <p className="st-phone">
              <i className="fa fa-mobile"></i> 09949596999
            </p>
            <p className="st-email">
              <i className="fa fa-envelope-o"></i> InfyGo@infosys.com
            </p>
            <p className="st-website">
              <i className="fa fa-globe"></i> www.InfyGo.com
            </p>
          </div>
          <div className="col-sm-7 col-sm-offset-1">
            <form id="contactForm" className="contact-form" name="contact-form" method="post">
              <div className="row">
                <div className="col-sm-6">
                  <input type="text" name="name" required="required" placeholder="Name*" />
                </div>
                <div className="col-sm-6">
                  <input type="email" name="email" required="required" placeholder="Email*" />
                </div>
                <div className="col-sm-6">
                  <input type="text" name="mobile" required="required" placeholder="Mobile*" pattern="[789][0-9]{9}" />
                </div>
                <div className="col-sm-6">
                  <datalist id="fdlist">
                    <option>Feedback</option>
                    <option>Complaint</option>
                  </datalist>
                  <input type="text" list="fdlist" name="casestype" placeholder="feedback/complaint*" required />
                </div>
                <div className="col-sm-12">
                  <textarea name="message" required="required" cols="30" rows="7" placeholder="Message*"></textarea>
                </div>
                <div className="col-sm-12">
                  <input type="submit" name="submit" value="Send Message" className="btn btn-send" />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

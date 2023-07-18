import React from 'react';
import { useState } from 'react';

const TicketDetails = () => {
  const [paymentMessage, setPaymentMessage] = useState(null);
  const [pnrMessage, setPnrMessage] = useState(null);
  const [booking, setBooking] = useState({ pnr: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="panel-group ticketDetails" style={{ width: '70%', marginLeft: '200px' }}>
      <br />
      <div className="panel-body text-center">
        <form onSubmit={handleFormSubmit}>
          <br />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h4>Ticket Details</h4>
            </div>
            <div className="panel-body">
              <div className="row text-center fontstyle">
                {paymentMessage !== null && <h3 className="text-center text-success">{paymentMessage}</h3>}
                {pnrMessage !== null && (
                  <h3 className="text-center text-success">
                    {pnrMessage}
                    <span>
                      <font size="6">{booking.pnr}</font>
                    </span>
                  </h3>
                )}
                <br />
                Click <a href="login">&nbsp;here</a> to login.
              </div>

              <a href="downloadTicket.pdf">Click to download ticket</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const FeedbackDetails = () => {
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback form submission logic here
  };

  return (
    <div className="panel-group feedbackDetails" style={{ width: '70%', marginLeft: '200px' }}>
      <br />
      <div className="panel-body">
        <br />
        <div className="panel panel-primary">
          <div className="panel-heading text-center">
            <h4>Feedback</h4>
          </div>
          <div className="panel-body">
            <section id="feedback" className="feedback">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-title">
                      <h4 className="capital">Submit your valuable feedback</h4>
                      <span className="st-border"></span>
                    </div>
                  </div>

                  <div className="col-sm-7 col-sm-offset-1">
                    <form className="feedback-form" name="feedback-form" onSubmit={handleFeedbackSubmit}>
                      <div className="row">
                        <br />
                        For what reasons do you fly? <br />
                        <input type="radio" name="business" value="business" checked /> Business <br />
                        <input type="radio" name="personalReasons" value="personalReasons" /> Personal Reasons <br />
                        <br />
                        How will you book your plane tickets? <br />
                        <input type="radio" name="direct" value="direct" checked /> Directly from the airline <br />
                        <input type="radio" name="online" value="online" /> Through an online travel discount site <br />
                        <br />
                        <br />
                        How frequently will you fly with our airline? <br />
                        <input type="radio" name="always1" value="always1" checked /> Always <br />
                        <input type="radio" name="most1" value="most1" /> Most of the time <br />
                        <input type="radio" name="half1" value="half1" /> About half the time <br />
                        <input type="radio" name="once1" value="once1" /> Once in a while <br />
                        <input type="radio" name="never1" value="never1" /> Never <br />
                        <br />
                        <br />
                        How frequently an additional fee is required to choose your own seat on the plane when you fly with our airline? <br />
                        <input type="radio" name="always2" value="always2" checked /> Always <br />
                        <input type="radio" name="most2" value="most2" /> Most of the time <br />
                        <input type="radio" name="half2" value="half2" /> About half the time <br />
                        <input type="radio" name="once2" value="once2" /> Once in a while <br />
                        <input type="radio" name="never2" value="never2" /> Never <br />
                        <br />
                        <br />
                        Do you feel that InfyGO airlines is your most favorite? <br />
                        <input type="radio" name="yes" value="yes" checked /> Yes <br />
                        <input type="radio" name="no" value="no" /> No <br />
                        <br />
                        <div className="col-sm-12">
                          <input type="submit" name="submit" value="Submit Feedback" className="btn btn-send" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Include your header component */}
      {/* ... */}
      <br />
      <br />
      <TicketDetails />
      <FeedbackDetails />
      {/* Include your footer component */}
      {/* ... */}
    </div>
  );
};

export default App;

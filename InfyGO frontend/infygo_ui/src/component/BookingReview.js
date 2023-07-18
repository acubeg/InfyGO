import React from "react";

function BookingReview() {
  const booking = {
    departureDate: "2023-07-20", // Sample date
    // Other booking properties
  };
  return (
    <div>
      {/* Header */}
      {/* Include your React component for the header here */}

      <div className="panel-group flightDetails" id="accordion">
        <br />
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4>
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                <span className="glyphicon glyphicon-minus"></span> Booking Details
              </a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse in">
            <div className="panel-body">
              {/* Booking Details Form */}
              <form>
                <div className="row margintop-10">
                  <div className="col-sm-3 fontstyle text-right">Journey Date:</div>
                  <div className="col-sm-3 fontstyle text-left">
                    <b>
                      <span id="jdate">{booking.departureDate}</span>
                    </b>
                  </div>
                  {/* Other form fields */}
                </div>
                {/* Other form fields */}
              </form>
            </div>
          </div>
        </div>

        {/* ADD PASSENGER */}
        <div className="panel panel-info">
          <div className="panel-heading">
            <form>
              <h4>
                <a data-toggle="collapse" data-parent="#accordion" href="#">
                  <span className="glyphicon glyphicon-plus"></span>
                  <a href="addPassengerDetails">ADD PASSENGER</a>
                </a>
              </h4>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* Include your React component for the footer here */}
    </div>
  );
}
export default BookingReview;

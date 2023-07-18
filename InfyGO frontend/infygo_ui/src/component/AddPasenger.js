import React from 'react';

function AddPassenger() {

    const booking = {
        departureDate: '2023-07-20', // Sample date
        // Other booking properties
      };

    const passengerListContainer = {
        passengerList: [
          { passengerName: 'John Doe', age: 25, gender: 'M' },
          { passengerName: 'Jane Smith', age: 30, gender: 'F' },
          // Add more dummy passengers as needed
        ],
      }
  return (
    <div>
      {/* Header */}
      {/* Include your React component for the header here */}

      {/* Booking Details */}
      <div className="panel-group flightDetails" id="accordion">
        <br />
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4>
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse1"
              >
                <h4>
                  {' '}
                  <span className="glyphicon glyphicon-plus"></span> Booking
                  Details{' '}
                </h4>
              </a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse">
            <div className="panel-body">
              {/* Booking Details Form */}
              <form>
                <div className="row margintop-10">
                  <div className="col-sm-3 fontstyle text-right">
                    Journey Date:
                  </div>
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

        {/* PASSENGER DETAILS */}
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4>
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse2"
              >
                <h4>
                  <span className="glyphicon glyphicon-minus"></span>PASSENGER
                  DETAILS
                </h4>
              </a>
            </h4>
          </div>
          <div id="collapse2" className="panel-collapse collapse in">
            <div className="panel-body">
              <h3 className="red" id="msg2"></h3>
              {/* Passenger Details Form */}
              <form action="/editPassengerListContainer" id="personListForm">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        Name<span className="red">*</span>
                      </th>
                      <th>
                        Age<span className="red">*</span>
                      </th>
                      <th>
                        Gender<span className="red">*</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="personListContainer">
                    {/* Passenger List */}
                    {passengerListContainer.passengerList.map((passenger, index) => (
                      <tr className="person margintop-15 padding-3" key={index}>
                        {/* Passenger input fields */}

                        <td>
                <input
                  type="text"
                  name={`passengerList[${index}].passengerName`}
                  value={passenger.passengerName}
                  className="form-control"
                  required="true"
                  title="Name must contain 2 to 15 characters"
                  pattern=".{2,15}"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`passengerList[${index}].age`}
                  value={passenger.age}
                  className="form-control"
                  pattern="^\d{1,3}$"
                  title="Age should be in 1 to 3 digits"
                  size="4"
                />
              </td>
              <td>
                <select
                  name={`passengerList[${index}].gender`}
                  id={`gender${index}`}
                  className="form-control"
                  required="true"
                  value={passenger.gender}
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Form buttons */}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* Include your React component for the footer here */}
    </div>
  );
}

export default AddPassenger;

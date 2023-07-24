import axios from "axios";
import flightReducer from "../reducer/flightReducer";

export const getDestinationList = async () => {
  await axios
    .get("api/infy-go/flight-details/destination", {
      mode: "cors",
      headers: { userId: sessionStorage?.getItem("userId"), 
                  Authorization: "Bearer "+ sessionStorage?.getItem("accessToken"),
                  "Content-Type":"application/json"
    },
    })
    .then((res) => {
      flightReducer({ type: "UPDATE_DESTINATION_LIST", action: res?.data });
    });
};

export const getSourceList = async () => {
    await axios
      .get("http://localhost:8080/infy-go/flight-details/source", {
        headers: { userId: sessionStorage?.getItem("userId"), accessToken: sessionStorage?.getItem("accessToken") },
      })
      .then((res) => {
        flightReducer({ type: "UPDATE_SOURCE_LIST", action: res?.data });
      });
  };

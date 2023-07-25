import axios from "axios";
const Axios = axios.create({
  headers: {
    Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    UserId: sessionStorage.getItem("UserId"),
    "Content-Type": "application/json",
  },

  timeout: 3 * 60 * 1000,
});

export default Axios;

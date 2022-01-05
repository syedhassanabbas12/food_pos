import Axios from "axios";
import HTTP_STATUS from "../constants/app-constants";

const axios = Axios.create();

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // LOGOUT IN CASE OF UNAUTHORIZE
    if (error?.response?.data?.code === HTTP_STATUS.UNAUTHORIZE) {
      location.reload();
    }

    // CONNECTION UNAVAILABLE
    if (!error.response) {
      console.log("Please check your internet connection");

      return error;
    }

    console.log("An error occurred");

    return error?.response;
  }
);

export default axios;

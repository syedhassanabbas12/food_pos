import axios from "./api-client";
import API from "../constants/apis";
import { BASE_URL } from "../config/environment";

export const signin = (data) => axios.post(`${BASE_URL}${API.LOGIN}`, data);

export const register = (data) =>
  axios.post(`${BASE_URL}${API.REGISTER}`, data);

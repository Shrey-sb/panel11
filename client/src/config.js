import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://panel12.herokuapp.com/api",
});

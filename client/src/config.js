import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://panel11.herokuapp.com/api",
});

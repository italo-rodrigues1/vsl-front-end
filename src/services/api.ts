import axios from "axios";
// import { useEffect } from "react";
const token = localStorage.getItem("Token");

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  //baseURL: ''
  headers: token ? token : (null as any),
});

api.interceptors.request.use(
  (config) => {
    console.log("config", config);

    // if (token) {
    //   config.headers.authorization = `Bearer ${token}`;
    //   console.log(
    //     "config?.headers?.authorization",
    //     config.headers
    //   );
    // }
    // return config;
    console.log("token > > dentro", token);

    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      axios.defaults.headers.common["Authorization"] = null as any;
      /*if setting null does not remove `Authorization` header then try     
           delete axios.defaults.headers.common['Authorization'];
         */
    }
    return config;
  },
  (error) => {
    console.log("error", error);
    if (
      error.response.data.message === "No token provided." ||
      error.response.data.message === "Failed to authenticate token."
    ) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return new Promise(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("response", response);
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return response;
  },
  (error) => {
    console.log("error", error);
    if (
      error.response.data.message === "No token provided." ||
      error.response.data.message === "Failed to authenticate token."
    ) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return new Promise(error);
  }
);

export default api;

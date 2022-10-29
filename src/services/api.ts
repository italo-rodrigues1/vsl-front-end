import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  //baseURL: ''
});

api.interceptors.request.use(
  (config) => {
    console.log("config", config);
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
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
  }
);

export default api;

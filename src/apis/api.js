import axios from "axios";

// create BASE API
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

// API TOKEN Intercepters
api.interceptors.request.use((config) => {
  console.log(config);
  const access_token = localStorage.getItem("accesstoken");

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  console.log(config);
  return config;
});

export default api;

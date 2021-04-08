import axios from "axios";

export function request(config) {
  const intense = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  intense.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      throw err;
    }
  );

  intense.interceptors.response.use(
    res => {
      return res.data.data;
    },
    err => {
      throw err;
    }
  );

  const result = intense(config);

  return result;
}

import axios from "axios";

export function request(config) {
  const intense = axios.create({
    baseURL: "http://106.54.54.237:8000/api/mn",
    timeout: 5000
  });

  intense.interceptors.request.use(
    config => {
      // console.log(config);
      return config;
    },
    err => {
      throw err;
    }
  );

  intense.interceptors.response.use(
    res => {
      const data = res.data.data || res.data;
      return data;
    },
    err => {
      throw err;
    }
  );

  const result = intense(config);

  return result;
}

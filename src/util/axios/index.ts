import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === '401') {
      console.log('21391');
    }
    return Promise.reject(error);
  },
);
export default instance;

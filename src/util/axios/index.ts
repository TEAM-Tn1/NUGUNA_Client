import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useHistory } from 'react-router';

const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL,
  timeout: 100000,
});

instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const { config, response } = error;
    if (response.status === 401) {
      try {
        const res = await axios({
          method: 'put',
          url: `${baseURL}/users/auth`,
          data: {
            refresh_token: localStorage.getItem('refresh_token'),
          },
        });
        const { access_token, refresh_token, email } = res.data;

        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('email', email);
        config.headers.Authorization = `Bearer ${access_token}`;

        return config;
      } catch (err: any) {
        if (err.response.status) {
          window.location.href = '/auth';
        }
      }
    }
    return Promise.reject(error);
  },
);

export default instance;

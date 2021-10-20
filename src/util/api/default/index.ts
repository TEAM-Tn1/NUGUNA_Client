import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://13.125.161.204:8080',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://13.125.161.204:8080',
    responseType: type,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request;
};

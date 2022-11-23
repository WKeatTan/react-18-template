import axios from 'axios';

import { API_TIMEOUT, API_URL, AUTH_API_URL } from 'Constants/ApiConfig';

export const axiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: API_TIMEOUT,
  });

  axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('ctoken')}`;
  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};

export const axiosInstanceAuth = () => {
  const axiosInstance = axios.create({
    baseURL: AUTH_API_URL,
    timeout: API_TIMEOUT,
  });

  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Create an instance of Axios with default settings
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to handle configurations
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    console.error('Request Error:', error.message);
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle responses and errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server-side errors
      console.error(`Error Response [${error.response.status}]:`, error.response.data);
      
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized access - 401');
          break;
        case 403:
          console.error('Forbidden - 403');
          break;
        case 500:
          console.error('Internal Server Error - 500');
          break;
        default:
          console.error(`Unexpected error occurred with status code ${error.response.status}`);
          break;
      }
    } else if (error.request) {
      // Client-side or network errors
      console.error('Network Error:', error.message);
      console.error('Request Config:', error.config);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export const axiosHandler = {
  get: (url: string, config?: AxiosRequestConfig) => axiosInstance.get(url, config),
  post: (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.post(url, data, config),
  put: (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.put(url, data, config),
  delete: (url: string, config?: AxiosRequestConfig) => axiosInstance.delete(url, config),
};

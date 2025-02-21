import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const updateAuthHeader = (header: string | null) => {
  // if (header) {
  //   axiosInstance.defaults.headers = {
  //     ...axiosInstance.defaults.headers,
  //     common: {
  //       ...axiosInstance.defaults.headers.common,
  //       authorization: `bearer ${header}`,
  //     },
  //   };
  // } else {
    delete axiosInstance.defaults.headers.common.authorization;
  }
// };
// Add header on app initialization
updateAuthHeader(localStorage.getItem('token'));

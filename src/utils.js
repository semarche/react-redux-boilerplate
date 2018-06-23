import axios from 'axios';

const HTTP = axios.create({
    baseURL: process.env.API_URL || '',
});

HTTP.interceptors.request.use(
  config => {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'patch'
    ) {
      config.headers['Content-Type'] = 'application/json';
      config.data = JSON.stringify(config.data)
    }
    return config;
  },
  (error) => console.log(error)
);

export default HTTP;

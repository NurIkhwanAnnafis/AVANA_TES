//interceptor network

/* eslint-disable no-param-reassign */
import Axios from 'axios';
import { Cookies } from 'react-cookie';
import { URL_API } from '../configs/keys';
import Swal from 'sweetalert2';

const cookies = new Cookies();

const httpService = Axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0',
  timeout: 20000,
  headers: {
    'content-type': 'application/json'
  }
});

httpService.interceptors.request.use(
  config => {
    const token = cookies.get('id_token') || null;

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  error => Promise.reject(error)
);

httpService.interceptors.response.use(
  async res => {
    return res;
  },
  async error => {
    if (error.response.status === 401) {
      Swal.fire('Error!', 'Unauthorized', 'error');
      return false;
    }
    if (error.response.status >= 500) {
      Swal.fire('Error!', 'something error with server', 'error');
    } else {
      Swal.fire('Error!', error.response.data.messages.toString(), 'error');
    }
    Promise.reject(error);
  }
);

export default httpService;

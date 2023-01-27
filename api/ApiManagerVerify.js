/* eslint-disable prettier/prettier */
import axios from 'axios';

const ApiManagerVerify = axios.create({
  baseURL: 'https://hiousapp.com/api/',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManagerVerify;

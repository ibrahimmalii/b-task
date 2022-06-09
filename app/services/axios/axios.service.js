require('dotenv').config();
import Axios from 'axios';
const instance = Axios.create({
  baseURL: process.env.baseURL,
  responseType: 'json',
  timeout: 20000,
});
const axios = instance;
export { axios };

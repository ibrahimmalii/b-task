import Axios from 'axios';
const instance = Axios.create({
  baseURL: 'https://fe-task.getsandbox.com/',
  responseType: 'json',
  timeout: 20000,
});
const axios = instance;
export { axios };

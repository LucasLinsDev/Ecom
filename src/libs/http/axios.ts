import $axios from 'axios';

export const axios = $axios.create();

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.baseURL ='http://localhost:8000/';
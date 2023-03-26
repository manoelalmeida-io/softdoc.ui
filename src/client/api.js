import axios from 'axios';
import qs from 'qs';

export const baseURL = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL,
  paramsSerializer: {
    encode: qs.parse,
    serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  },
});

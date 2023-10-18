/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL + 'auth/login';
const Axios = axios.create({ baseURL: baseURL });

const userLogin = async (prop: { data: any }) => {
  const body = prop.data;
  const response = await Axios.post('', body);
  const Data = {
    reslt: response.data,
    data: prop.data,
  };
  return Data;
};

const AuthHub = {
  userLogin,
};

export default AuthHub;

/* eslint-disable no-undef */
import axios from 'axios';
import { LoginProps } from '../Types/Redux/Auth';

const baseURL = import.meta.env.VITE_API_URL + 'auth/login';
const Axios = axios.create({ baseURL: baseURL });

const userLogin = async ({ data }) => {
  const body = data;
  const response = await Axios.post('', body);
  return response.data;
};

const AuthHub = {
  userLogin,
};

export default AuthHub;

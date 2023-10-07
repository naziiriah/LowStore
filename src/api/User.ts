/* eslint-disable no-undef */
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL + 'users/';
const Axios = axios.create({ baseURL: baseURL });

const getUser = async ({ id }) => {
  const response = await Axios.get(`${id}`);
  return response.data;
};

const createUser = async ({ data }) => {
  const body = data;
  const response = await Axios.post('', body);
  return response.data;
};

const editUser = async (props: unknown) => {
  const body = {};
  const response = await Axios.put(`${props}`, body);
  return response.data;
};

const deleteUser = async (props: unknown) => {
  const response = await Axios.delete(`${props}`);
  return response.data;
};
const UserHub = {
  getUser,
  createUser,
  editUser,
  deleteUser,
};

export default UserHub;

/* eslint-disable no-undef */
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL + 'users/';
const Axios = axios.create({ baseURL: baseURL });

const getUser = async (prop: { id: number; }) => {
  const response = await Axios.get(`${prop.id}`);
  return response.data;
};

const createUser = async (prop: { data: { username: string; }; }) => {
  const body = prop.data;
  const response = await Axios.post('', body);
  const Data = {
    id: response.data.id,
    user: prop.data.username,
  };
  return Data;
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

/* eslint-disable no-undef */
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL + 'carts/';
const Axios = axios.create({ baseURL: baseURL });

const getCartList = async () => {
  const response = await Axios.get('');
  return response.data;
};

const addToCart = async (props: unknown) => {
  const body = props;
  const response = await Axios.post(`${props}`, body);
  return response.data;
};

const editCartItem = async (props: unknown) => {
  const body = props;
  const response = await Axios.put(`${props}`, body);
  return response.data;
};

const deleteCartItem = async (props: unknown) => {
  const response = await Axios.delete(`${props}`);
  return response.data;
};

const CartHub = {
  getCartList,
  addToCart,
  editCartItem,
  deleteCartItem,
};

export default CartHub;

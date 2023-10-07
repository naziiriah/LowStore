/* eslint-disable no-undef */
import axios from 'axios';

const Axios = axios.create({ baseURL: import.meta.env.VITE_API_URL });
const getAllProducts = async () => {
  const subURL = 'products';
  const response = await Axios.get(`${subURL}`);
  return await response.data;
};

const getRandomProducts = async (params: number) => {
  const subURL = `products/${params}`;
  const response = await Axios.get(`${subURL}`);
  return await response.data;
};

const ProductHub = {
  getAllProducts,
  getRandomProducts,
};

export default ProductHub;

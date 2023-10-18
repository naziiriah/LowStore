/* eslint-disable no-undef */
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL + 'products/';
const Axios = axios.create({ baseURL });
const getAllProducts = async () => {
  const subURL = '';
  const response = await Axios.get(`${subURL}`);
  return await response.data;
};

const getRandomProducts = async (params: number) => {
  const subURL = `${params}`;
  const response = await Axios.get(`${subURL}`);
  return await response.data;
};

const getProductByCategory = async (prop: { category: string }) => {
  const subURL = `category/${prop.category}`;
  const response = await Axios.get(`${subURL}`);
  return await response.data;
};

const getCategories = async () => {
  const subURL = `products/categories`;
  const response = await Axios.get(`${subURL}`);
  return await response.data;
};

const ProductHub = {
  getAllProducts,
  getRandomProducts,
  getCategories,
  getProductByCategory,
};

export default ProductHub;

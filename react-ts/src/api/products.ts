import axios from "axios";
type Product = {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
};

const API_BASE_URL = "http://localhost:5000";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const fetchProductById = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

import type { Product } from "../typeScript/interface/product.interface";
import axiosInstance from "./axiosInstance";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axiosInstance.get("/products");
  console.log("API DATA:", res.data); 
  return res.data;
};
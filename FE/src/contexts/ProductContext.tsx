import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Products } from "../type/Product"; // Đảm bảo đường dẫn đúng
import axios from "axios";
import { instance } from "../apis";
import { useNavigate } from "react-router-dom";

export interface ProductContextType {
  products: Products[];
  selectedProduct: Products | null;
  fetchProductDetail: (_id: string) => void;
  handleDelete: (_id: string | number) => void,
onSubmitProduct: (data: Products ) => void
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

const ProductProvider = ({ children }: { children: ReactNode }) => {
    const nav = useNavigate()
  const [products, setProducts] = useState<Products[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  const fetchAPI = async () => {
    try {
      const { data } = await instance.get('/products');
      setProducts(data.data); // Điều chỉnh theo cấu trúc phản hồi thực tế
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchProductDetail = async (id: string) => {
    try {
      const { data } = await instance.get(`/products/${id}`);
      setSelectedProduct(data.data); // Điều chỉnh theo cấu trúc phản hồi thực tế
    } catch (error) {
      console.error('Error fetching product details:', error);
      setSelectedProduct(null); // Đảm bảo selectedProduct được reset về null nếu có lỗi
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  const handleDelete = async (_id: string | number) => {
    if (confirm("Bạn chắc chắn muốn xóa?")) {
        await instance.delete(`/products/${_id}`);
        setProducts(products.filter((item) => item._id !== _id));
    }
    fetchAPI();
};

const onSubmitProduct = async (data: Products) => {
    if (data._id) {
        await instance.patch(`/products/${data._id}`, data);
        
    } else {
        await instance.post("/products", data);
    }
    nav("/admin");
    fetchAPI();
};

  return (
    <ProductContext.Provider value={{ products, selectedProduct, fetchProductDetail, onSubmitProduct ,handleDelete}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

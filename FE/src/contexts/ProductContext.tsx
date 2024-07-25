import React, { createContext, useEffect, useReducer } from "react";
import { IProduct } from "../interfaces/Product";
import ProductReducer from "../reducers/ProductReducer";
import { useNavigate } from "react-router-dom";
import { instance } from "../apis";

type ProductContextType = {
  state: { products: IProduct[] };
  onSubmitProduct: (data: IProduct) => void;
  onRemove: (id: string) => void;
};
export const ProductContext = createContext({} as ProductContextType);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ProductReducer, { products: [] });
  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      dispatch({ type: "SET_PRODUCTS", payload: data.data });
    })();
  }, []);

  const onRemove = async (id: string) => {
    if (confirm("Ban chac chua?")) {
      await instance.delete(`/products/${id}`);
      dispatch({ type: "DELETE_PRODUCT", payload: id });
    }
  };
  const onSubmitProduct = async (data: IProduct) => {
    try {
      if (data._id) {
        await instance.patch(`/products/${data._id}`, data);
        dispatch({ type: "UPDATE_PRODUCT", payload: data });
      } else {
        await instance.post(`/products`, data);
        dispatch({ type: "ADD_PRODUCT", payload: data });
      }
      nav("/admin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ProductContext.Provider value={{ state, onRemove, onSubmitProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

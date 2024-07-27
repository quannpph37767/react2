import React, { useContext, useEffect } from "react";
import { ProductContext, ProductContextType } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Products } from "../../type/Product";
import { ProductSchema } from "../../utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { instance } from "../../apis";


const ProductForm = () => {
  const { onSubmitProduct } = useContext<ProductContextType>(ProductContext);
  const { id } = useParams<{_id: string}>(); // Đảm bảo _id được truy xuất đúng cách

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Products>({
    resolver: zodResolver(ProductSchema),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await instance.get(`/products/${id}`);
        reset(data.data);
      })();
    }
  }, [id, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => onSubmitProduct({ ...data,  }))}
        className="max-w-lg mx-auto p-6 bg-white rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6">
          {id ? "Update Product" : "Add Product"}
        </h1>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="mt-1 p-2 w-full border rounded"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name?.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            {...register("price",{valueAsNumber : true})}
            className="mt-1 p-2 w-full border rounded"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">
              {errors.price?.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="text"
            {...register("image")}
            className="mt-1 p-2 w-full border rounded"
          />
          {errors.image && (
            <span className="text-red-500 text-sm">
              {errors.image?.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            {...register("description")}
            className="mt-1 p-2 w-full border rounded"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description?.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;

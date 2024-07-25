import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/Product";

const ListProduct = () => {
  const { state, onRemove } = useContext(ProductContext);
  return (
    <>
      <Link to="/admin/product-add">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add New Product
        </button>
      </Link>
      <div className="container mx-auto mt-4 col-span-9">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Image</th>
              <th className="py-2">Name</th>
              <th className="py-2">Price</th>
              <th className="py-2">Description</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.products.map((item: IProduct, index) => (
              <tr
                key={item._id}
                className="text-center border-t border-gray-300"
              >
                <td className="py-2">{index + 1}</td>
                <td className="py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover mx-auto"
                  />
                </td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">${item.price}</td>
                <td className="py-2 truncate max-w-xs">{item.description}</td>

                <td className="py-2">
                  <button
                    onClick={() => onRemove(String(item._id))}
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/admin/product/edit/${item._id}`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListProduct;

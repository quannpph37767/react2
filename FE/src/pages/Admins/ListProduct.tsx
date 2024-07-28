import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ProductContextType,
  ProductContext,
} from "../../contexts/ProductContext";

const ListProduct = () => {
  const { products, handleDelete } =
    useContext<ProductContextType>(ProductContext);
  return (
    <div>
      <h2 className="text-[30px] font-bold m-6">Admin Dashboard</h2>

      <Link to={`/add`}>
        <button className="m-[20px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Add Product
        </button>
      </Link>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">
              ID
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">
              Price
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">
              Image
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">
              Des
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">{item._id}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                {item.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ${item.price}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                <img src={item.image} alt="" className="w-[80px] h-[80px]" />
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {item.description}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                <button
                  className="btn bg-red-500 text-white py-1 px-2 rounded mr-2"
                  onClick={() => handleDelete(String(item._id))}
                >
                  Delete
                </button>
                <Link
                  to={`/edit/${item._id}`}
                  className="btn bg-blue-500 text-white py-1 px-2 rounded"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;

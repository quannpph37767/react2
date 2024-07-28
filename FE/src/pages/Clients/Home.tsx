import { useContext } from "react";
import {
  ProductContext,
  ProductContextType,
} from "../../contexts/ProductContext";

const Home = () => {
  const { products } = useContext<ProductContextType>(ProductContext);
  // if (!products) {
  //     return <div>Loading...</div>; // Hoặc thông báo khác nếu bạn muốn
  // }
  return (
    
    <div className="container mx-auto my-12 mb-[50px]">
      <div className="text-3xl font-bold mb-6">Product</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((item) => (
    <div
      key={item._id}
      className="block rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-500 hover:scale-105"
    >
      <a href={`/products/${item._id}`} className="w-full h-48 block">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt={item.name}
        />
      </a>
      <div className="p-6">
        <h1 className="font-bold text-xl mb-2 text-center text-gray-800">
          {item.name}
        </h1>
        <p className="text-gray-700 text-base text-center mb-4">
          ${item.price}
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Home;

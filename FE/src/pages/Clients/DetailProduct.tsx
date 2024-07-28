import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ProductContext,
  ProductContextType,
} from "../../contexts/ProductContext"; // Đảm bảo đường dẫn chính xác

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // Lấy ID sản phẩm từ URL
  const { selectedProduct, fetchProductDetail } =
    useContext<ProductContextType>(ProductContext);

  useEffect(() => {
    if (id) {
      fetchProductDetail(id); // Lấy chi tiết sản phẩm khi component mount
    }
  }, [id, fetchProductDetail]);

  if (!selectedProduct) {
    return <div>Loading...</div>; // Hoặc tạo một trang loading
  }

  return (
    <div className="container mx-auto px-4 py-8 mb-[150px]">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex">
        <div className="w-1/2">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            {selectedProduct.name}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            {selectedProduct.description}
          </p>
          <p className="text-xl font-semibold text-green-600 mb-4">
            ${selectedProduct.price}
          </p>
          <button className=" w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

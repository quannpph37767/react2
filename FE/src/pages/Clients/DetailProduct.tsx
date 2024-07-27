import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext, ProductContextType } from '../../contexts/ProductContext'; // Đảm bảo đường dẫn chính xác

const ProductDetail = () => {
    const { _id } = useParams<{ _id: string }>(); // Lấy ID sản phẩm từ URL
    const { selectedProduct, fetchProductDetail } = useContext<ProductContextType>(ProductContext);

    useEffect(() => {
        if (_id) {
            fetchProductDetail(_id); // Lấy chi tiết sản phẩm khi component mount
        }
    }, [_id, fetchProductDetail]);

    if (!selectedProduct) {
        return <div>Loading...</div>; // Hoặc tạo một trang loading
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                </div>
                <h1 className="text-3xl font-bold mb-2">{selectedProduct.name}</h1>
                <p className="text-lg text-gray-700 mb-4">{selectedProduct.description}</p>
                <p className="text-xl font-semibold">${selectedProduct.price}</p>
            </div>
        </div>
    );
};

export default ProductDetail;

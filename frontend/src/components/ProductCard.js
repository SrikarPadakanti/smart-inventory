
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 m-2 max-w-xs">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      {product.discount && (
        <p className="text-red-500">Discount: {product.discount}%</p>
      )}
    </div>
  );
};

export default ProductCard;

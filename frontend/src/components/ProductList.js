
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your actual API call
    const dummyProducts = [
      {
        id: 1,
        name: "Product 1",
        price: 19.99,
        discount: 10,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Product 2",
        price: 29.99,
        discount: 0,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Product 3",
        price: 39.99,
        discount: 5,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Product 4",
        price: 49.99,
        discount: 0,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "Product 5",
        price: 59.99,
        discount: 15,
        imageUrl: "https://via.placeholder.com/150",
      },
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="flex overflow-x-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;


import React from "react";
import ProductList from "./ProductList";
import CategorySidebar from "./CategorySidebar";

const Dashboard = () => {
  return (
    <div className="p-4 flex">
      <CategorySidebar />
      <div>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default Dashboard;


import React, { useState, useEffect } from "react";

const CategorySidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Replace with your actual API call
    const dummyCategories = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
      { id: 3, name: "Category 3" },
      { id: 4, name: "Category 4" },
      { id: 5, name: "Category 5" },
    ];
    setCategories(dummyCategories);
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <a href="#" className="hover:text-blue-500">{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;

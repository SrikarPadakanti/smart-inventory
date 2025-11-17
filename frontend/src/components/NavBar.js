
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-200 text-gray-800 p-4">
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:text-blue-500">Home</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-blue-500">Products</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-blue-500">Categories</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

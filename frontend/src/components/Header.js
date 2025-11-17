
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">My App</div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-4">Cart</button>
        <button className="ml-4">User</button>
      </div>
    </header>
  );
};

export default Header;

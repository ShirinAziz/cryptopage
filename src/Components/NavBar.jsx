import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <div className="flex items-center justify-center px-4 mt-4">
        <FaCoins size={30} className="text-[#6900ff]" />
        <h1 className="text-4xl">
          Coin<span className="text-[#6900ff] text-4xl">Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default NavBar;

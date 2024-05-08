import React from "react";
import { FaCoins } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <div className="mx-auto w-full h-[60px] flex justify-center mt-4">
        <div className="flex items-center px-4">
          <FaCoins size={30} className="text-[#6900ff]" />
          <h1 className="text-2xl">
            Coin<span className="text-[#6900ff] text-2xl">Search</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

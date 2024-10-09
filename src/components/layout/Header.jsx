import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faSquarePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="w-[100%] bg-white flex justify-center items-center px-4 py-2 fixed top-0 left-0 z-50">
      <div className="relative w-[596px] h-[40px] mt-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full pl-14 pr-10 py-2 bg-gray-100 rounded-full focus:outline-none"
        />
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#c0c0c0" }}
            className="w-[22px] h-[22px] opacity-100"
          />
        </div>
      </div>
      <div className="absolute right-10 top-[10px] flex items-center gap-[16px] opacity-100 ">
        <button className="w-[40px] h-[40px] px-[11px] py-[11px] gap-[4px] rounded-[50%] bg-[#2400FF] opacity-100 text-gray-600 hover:text-purple-600 flex items-center">
          <FontAwesomeIcon
            icon={faSnowflake}
            style={{ color: "#ffff" }}
            className="w-5 h-5"
          />
        </button>
        <button className="w-[40px] h-[40px] px-[11px] py-[15px] gap-[4px] bg-[#F0F1F5] rounded-[50%] text-gray-600 hover:text-purple-600 flex items-center">
          <FontAwesomeIcon
            icon={faSquarePlus}
            className="w-[20px] h-[20px] opacity-100"
            style={{ color: "#000000" }}
          />
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-200 ">
          <img
            src="/public/images/Frame 1171276131(1).png"
            alt="User Avatar"
            className="w-full h-full rounded-full object-cover "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

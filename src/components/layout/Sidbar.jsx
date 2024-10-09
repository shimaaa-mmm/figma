import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesomeIcon for settings icon
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-white h-screen p-4 pl-[31px] flex flex-col items-start mt-[90px]">
      <div className="flex items-center space-x-2 mb-8 -mt-[82px] z-[63]">
        <FontAwesomeIcon icon={faCog} className="w-5 h-5 text-gray-500" />
        <img
          src="/public/images/SH WROOM.png"
          className="w-[98px] h-[16px] opacity-100"
          alt="Logo"
        />
      </div>

      <Link
        to={"/"}
        className="text-xl font-bold mb-8 flex items-center gap-2 cursor-pointer z-20 mt-[32px] "
      >
        <img
          src="/public/images/home.png"
          alt="Home Icon"
          className="w-[17px] h-[17px]"
        />
        <img
          src="/public/images/Frame 1171276177.jpg"
          className="w-[70px] h-auto opacity-100"
          alt="Sidebar Logo"
        />
      </Link>

      <ul className="flex flex-col gap-4 -mt-2">
        <li className="text-gray-600 flex items-center">
          <Link
            to={"/page2"}
            className=" cursor-pointer z-10 flex items-center w-full"
          >
            <img
              src="/public/images/discover.png"
              className="w-[17px] h-[17px] mr-2"
              alt="Discover"
            />
            <span>Discover</span>
          </Link>
        </li>
        <li className="text-gray-600 flex items-center">
          <Link
            to={"/page3"}
            className=" cursor-pointer z-10 flex items-center w-full"
          >
            <img
              src="/public/images/circle.png"
              className="w-[17px] h-[17px] mr-2"
              alt="Directs"
            />
            <span>Directs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

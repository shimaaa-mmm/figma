import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircle,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const ChatApp = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Jyane",
      message: "😎😎❤️",
      time: "2m",
      img: "/public/images/Ellipse 13.png",
    },
    {
      id: 2,
      name: "leafgames",
      message: "This year, we gave Almond...",
      img: "/public/images/Ellipse 13(1).png",
    },
    {
      id: 3,
      name: "MatthewG",
      message: "Send 2h ago",
      img: "/public/images/Ellipse 13(2).png",
    },
    {
      id: 4,
      name: "Jyane",
      message: "3 New Message",
      time: "3h",
      img: "/public/images/Ellipse 13(3).png",
    },
    {
      id: 5,
      name: "farhad",
      message: "Send 2h ago",
      img: "/public/images/Ellipse 13(4).png",
    },
    {
      id: 6,
      name: "sama",
      message: "ok",
      time: "5h",
      img: "/public/images/Ellipse 13(5).png",
    },
    {
      id: 7,
      name: "Aida🎈",
      message: "🫠🫠🫠🫠",
      time: "12d",
      img: "/public/images/Ellipse 13(6).png",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (id, field, value) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === id ? { ...chat, [field]: value } : chat
      )
    );
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex w-[1108px] -mt-[18px] h-[772px] rounded-[20px] p-[16px] gap-[3px] mx-auto">
      {/* Sidebar */}
      <div className="w-[365px] h-[772px] p-[16px] gap-[10px] rounded-[20px] border-t border-l border-r border-b border-[#F0F1F5]">
        <div className="flex items-center mb-4 mt-[27px]">
          <img
            src="/public/images/Frame 1171276131(1).png"
            alt="User profile picture"
            className="rounded-full w-10 h-10 mr-2"
          />
          <span className="w-[53px] h-[17px] gap-0 font-montserrat text-[14px] font-semibold leading-[17.07px] text-left text-[#0A0C0F]">
            INegarI
          </span>
        </div>
        <div className="relative mb-4 w-[333px] h-[40px] gap-[8px]">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="w-full p-2 pl-10 bg-gray-100 rounded-full focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-400"
          />
        </div>
        <div className="overflow-y-auto h-full">
          {filteredChats.length > 0 ? ( 
            filteredChats.map((chat) => ( 
              <div
                key={chat.id}
                className="flex items-center justify-between p-2 mb-2 rounded-lg cursor-pointer w-[333px] h-[48px] gap-[4px]"
              >
                <div className="flex items-center">
                  <img
                    src={chat.img}
                    alt={`${chat.name} profile picture`}
                    className="rounded-full w-10 h-10 mr-2"
                  />
                  <div className="flex flex-col">
                    <div
                      onClick={() =>
                        handleChange(
                          chat.id,
                          "name",
                          prompt("Enter new name:", chat.name)
                        )
                      }
                      className="text-[#8590AD] text-[12px] font-[600] leading-[19.2px] text-left cursor-pointer"
                    >
                      {chat.name}
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`text-[12px] font-semibold leading-[19.2px] text-left w-[188px] h-[19px] font-montserrat cursor-pointer ${
                          chat.message === "This year, we gave Almond..." ||
                          chat.message === "ok" ||
                          chat.message === "3 New Message"
                            ? "text-black"
                            : "text-gray-500"
                        }`}
                      >
                        {chat.message}
                      </div>
                      <div className="text-xs text-gray-400 ml-[-112px]">
                        {chat.time}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-2 flex items-center">
                  {chat.id !== 3 &&
                    chat.id !== 5 && ( 
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-blue-500 text-xs" 
                      />
                  )}

                  <FontAwesomeIcon
                    icon={faAngleRight} 
                    className="text-gray-500 text-xs ml-1" 
                  />
                </div>
              </div>
            ))
          ) : ( 
            <div className="text-gray-500 text-center mt-4">
              No results found
            </div>
          )}
        </div>
      </div>
      <div className="w-[713px] h-[772px] px-[227px] py-0 gap-[10px] rounded-[20px] border border-[#F0F1F5] bg-white flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <img
            src="/public/images/circle.png"
            alt="Chat logo"
            className="w-[68px] h-[67px] p-[8.38px] mx-auto mb-4"
          />
          <h1 className="w-[109px] h-[18px] font-montserrat text-[14px] font-semibold leading-[18.2px] text-center text-[#0A0C0F]">
            Your messages
          </h1>
          <p className="w-[359px] h-[16px] font-montserrat text-[12px] font-medium leading-[15.6px] text-center text-[#8590AD] mb-4">
            Chat and video call with your friends and send your photos
          </p>
          <button className="bg-black text-white font-montserrat text-[12px] font-bold leading-[10.63px] text-left w-[131px] h-[32px] px-[32px] py-[6px] rounded-[20px]">
            Start chat !
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;

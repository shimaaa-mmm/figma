import React from "react";
import {
  FaTshirt,
  FaPalette,
  FaMusic,
  FaGamepad,
  FaFutbol,
} from "react-icons/fa";

const HomePage = () => {
  const categories = [
    { name: "Dress", icon: <FaTshirt /> },
    { name: "Art", icon: <FaPalette /> },
    { name: "Music", icon: <FaMusic /> },
    { name: "Gaming", icon: <FaGamepad /> },
    { name: "Sport", icon: <FaFutbol /> },
  ];

  const hotItems = [
    {
      img: "/public/images/216a6e6b82aba08dad9e9beea4a336d1.jpg",
      label: "Live",
      title: "EDITORIAL - TÉKNE",
      tags: ["editorial photography", "Fashion", "12+"],
    },
    {
      img: "/public/images/74b318abcc7e46e6278993e8862cb1f5.jpg",
      label: "300k",
      title: "Fabric",
      tags: ["branding", "brand identity"],
    },
    {
      img: "/public/images/62e4bf530d6a5c23d42b4310dd30717a.png",
      label: "2.3K",
      title: "Merch line design for Bezodnya Music (YouTube)",
      tags: ["model", "Fashion", "Nike"],
    },
    {
      img: "/public/images/e847f55942c1d83866ea73084022c497.jpg",
      label: "2.3K",
      title: "DYLAN",
      tags: ["Photography", "portrait"],
    },
  ];

  const newItems = [
    {
      img: "/public/images/pa.jpg",
      label: "2026",
      title: "Sketches & Illustrations 2023 (Pt. 5)",
      tags: ["New", "Exciting", "Trend"],
    },
    {
      img: "/public/images/se.jpg",
      label: "2.3K",
      title: "WILD FASHION",
      tags: ["Latest", "Popular"],
    },
    {
      img: "/public/images/do.jpg",
      label: "2.3K",
      title: "TORSTEN KLINKOW // Porsche",
      tags: ["Trending", "Featured"],
    },
    {
      img: "/public/images/aa.jpg",
      label: "2.3K",
      title: "Blue Elephant Official Poster",
      tags: ["Hot", "Exclusive"],
    },
  ];

  const mostVisitedItems = [
    {
      img: "/public/images/1.png",
      title: "Hanieh on Film",
      tags: ["Popular", "Top Rated"],
      label: "2.3k",
    },
    {
      img: "/public/images/2.jpg",
      title: "Out of Time",
      tags: ["Trending", "Highly Rated"],
      label: "16k", 
    },
    {
      img: "/public/images/3.png",
      title: "BLACK MAJLIS",
      tags: ["Must See", "Recommended"],
      label: "300k", 
    },
    {
      img: "/public/images/4.jpg",
      title: "Chhath Puja",
      tags: ["Best Seller", "In Demand"],
      label: "2.5k", 
    },
  ];

  return (
    <div className="p-4 mt-24 ">
      <div className="relative">
        <img
          src="/public/images/28c239e12c3889577cc6b1202320b8b0.jpg"
          alt="Main banner"
          className="w-full h-[406px] object-cover rounded-[20px]"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded">
          Live
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">
            Bronze To Radiant In One Stream!{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
          </h2>
          <div className="flex items-center mt-2">
            <img src="/public/images/Profile(5).png" alt="Profile" />
          </div>
        </div>
        <div className="absolute bottom-4 right-[31.25rem] flex space-x-2">
          <button className="bg-white text-gray-800 p-1 rounded-full hover:bg-gray-200">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="bg-white text-gray-800 p-1 rounded-full hover:bg-gray-200">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="bg-white text-gray-800 p-1 rounded-full hover:bg-gray-200">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="bg-white text-gray-800 p-1 rounded-full hover:bg-gray-200">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex space-x-2 mt-4 -ml-[14px]">
          {categories.map((category) => (
            <button
              key={category.name}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full flex items-center"
            >
              {category.icon}
              <span className="ml-1">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-[14px] font-bold leading-[18.2px] text-[#1F1D2B] font-[Montserrat]">
          What's Hot{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {hotItems.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.img}
                alt={`Hot item ${index + 1}`}
                className="w-full h-40 object-cover object-top rounded-lg"
              />
              <div
                className={`absolute top-2 left-2 ${
                  item.label === "Live" ? "bg-red-600" : "bg-gray-800"
                } text-white p-[4px_8px] rounded-[20px] font-[Montserrat] text-[14px] font-bold leading-[18.2px] text-left w-[45px]`}
              >
                {item.label}
              </div>
              <div className="mt-2">
                <div className="flex items-center">
                  <img
                    src="/public/images/Profile.png"
                    alt="Icon"
                    className="w-[36px] h-[36px] mr-2"
                  />
                  <h4 className="text-[14px] font-bold leading-[18.2px] text-left w-[248px] h-[36px] gap-0 font-[Montserrat]">
                    {item.title}
                  </h4>
                </div>
                <div className="flex space-x-4 mt-1 w-[247px] h-[27px]">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-200 text-gray-600 mt-[14px] rounded-full text-[9px] font-[500] leading-[19.2px] text-left h-[27px] p-[4px_10px_24px_14px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="flex text-[14px] font-bold leading-[18.2px] text-left w-[48px] h-[18px] gap-0 font-[Montserrat]">
          New🚀
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {newItems.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.img}
                alt={`New Item ${index + 1}`}
                className="w-full h-40 object-cover object-top rounded-lg hover-opacity" 
              />
              <div className="absolute top-2 left-2 bg-gray-800 text-white p-[4px_8px] rounded-[20px] font-[Montserrat] text-[14px] font-bold leading-[18.2px] text-left">
                {item.label}
              </div>
              <h4 className="mt-2 text-[14px] font-bold leading-[18.2px] text-left w-full h-[36px] gap-0 font-[Montserrat]">
                {item.title}
              </h4>
              <div className="flex space-x-4 mt-1">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 text-gray-600 rounded-full text-[9px] font-[500] leading-[19.2px] text-left h-[27px] p-[4px_10px_24px_14px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="flex text-[14px] font-bold leading-[18.2px] text-left min-w-[48px] min-h-[18px] gap-0 font-[Montserrat] whitespace-nowrap">
          Most Visited
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {mostVisitedItems.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.img}
                alt={`Most Visited Item ${index + 1}`}
                className="w-full h-40 object-cover object-top rounded-lg hover-opacity" 
              />
              <div className="absolute top-2 left-2 bg-gray-800 text-white p-[4px_8px] rounded-[20px] font-[Montserrat] text-[14px] font-bold leading-[18.2px] text-left">
                {item.label} 
              </div>
              <h4 className="mt-2 text-[14px] font-bold leading-[18.2px] text-left w-full h-[36px] gap-0 font-[Montserrat]">
                {item.title}
              </h4>
              <div className="flex space-x-4 mt-1">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 text-gray-600 rounded-full text-[9px] font-[500] leading-[19.2px] text-left h-[27px] p-[4px_10px_24px_14px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

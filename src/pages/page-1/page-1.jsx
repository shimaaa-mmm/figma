import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFilm } from "@fortawesome/free-solid-svg-icons";

const Card = ({ image, live, viewers, title, tags, brand }) => (
  <div className="bg-white rounded-lg overflow-hidden">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-[166px] object-fill" />
      <div className="absolute top-[9px] left-[14px] flex items-center space-x-[8px] bg-[#1F1D2BC2] backdrop-blur-[10px] text-white w-[106px] h-[28px] px-[8px] py-[2px] rounded-[24px]">
        {live ? (
          <>
            <div className="w-[42px] h-[24px] bg-red-500 text-white text-[12px] font-[700] leading-[15.6px] text-left px-[8px] py-[4px] rounded-[20px]">
              Live
            </div>
            <div className="flex items-center w-[37px] h-[16px] gap-0 font-[Montserrat] text-[12px] font-[600] leading-[15.6px] text-left">
              <FontAwesomeIcon
                icon={faEye}
                style={{ color: "#c0c0c0" }}
                className="mr-1 w-[11px] h-[11px]"
              />
              {viewers}
            </div>
          </>
        ) : (
          <div className="flex items-center w-[80px] h-[28px] gap-1 bg-gray-500 rounded-[20px] px-2">
            <FontAwesomeIcon icon={faFilm} className="w-[16px] h-[16px]" />
            <FontAwesomeIcon
              icon={faEye}
              style={{ color: "#c0c0c0" }}
              className="w-[11px] h-[11px]"
            />
            <span className="text-white text-[12px]">{viewers}</span>
          </div>
        )}
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-[14px] font-[700] leading-[18.2px] text-left font-[Montserrat]">
        {title}
      </h3>
      <div className="text-sm text-gray-500 mb-2">🔥</div>
      <div className="flex space-x-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="w-[59px] h-[30px] bg-gray-200 text-[#8590AD] text-[14px] font-[500] leading-[22.4px] text-left px-[10px] py-[4px] rounded-[30px] gap-[10px] opacity-100"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center mt-[19px]">
        <img
          src="/public/images/bdbe24c88f794972ae01dd56bf015ff7.jpg"
          className="w-[20px] h-[20px] gap-0 rounded-[50%] opacity-100"
          alt="Brand logo"
        />
        <span className="font-[Montserrat] text-[14px] font-[500] leading-[22.4px] text-left ml-[10px] text-[#1F1D2B]">
          {brand}
        </span>
      </div>
    </div>
  </div>
);

const CardList = () => {
  const cards = [
    {
      image: "/public/images/9a501cde268e23874da4e00869a60585.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/e998a6c9013aaa4de9d3abd37b2b09fe.png",
      live: false, // No Live label, will show icons
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/79bf82b548243f2f9634c0d42034d577.png",
      live: false, // No Live label, will show icons
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/97f3ce120f3031c2cae2f0f61bb4a972.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/90da2bb1f34f136549734271f6ff30bc.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/89d4ee0150d232a2d727abac82ca8ef2.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/3b7e754697b047a5bf78286b196f58cd.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/c634d8577787bb4c30fbefdbabe9120d.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/90da2bb1f34f136549734271f6ff30bc.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/89d4ee0150d232a2d727abac82ca8ef2.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/3b7e754697b047a5bf78286b196f58cd.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/c634d8577787bb4c30fbefdbabe9120d.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/8e202f39b1fea98b7d75240b279348fe.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/89d4ee0150d232a2d727abac82ca8ef2.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/3b7e754697b047a5bf78286b196f58cd.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },
    {
      image: "/public/images/c634d8577787bb4c30fbefdbabe9120d.png",
      live: true,
      viewers: "2.3K",
      title: "Bronze To Radiant In One Stream!",
      tags: ["Sport", "Dress", "Nike"],
      brand: "NIKE",
    },

  ];

  return (
    <div className="grid grid-cols-4 gap-2 ml-[3px] mt-[107px]">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

const CombinedComponent = () => (
  <div>
    <CardList />
  </div>
);

export default CombinedComponent;

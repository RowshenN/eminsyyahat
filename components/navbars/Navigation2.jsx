import React from "react";

import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg";
import globe from "../../images/globe.svg";
import vector from "../../images/Vector.svg";

const Navigation2 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] absolute top-0 left-0 right-0 mx-auto mt-[20px]">
      <div className="w-full flex items-center justify-between">
        <div onClick={() => navigate("/")} className="w-[75px] cursor-pointer">
          <img src={logo} className="w-full object-contain" alt="logo" />
        </div>

        <div className="flex items-center text-[14px] font-[poppins-medium] justify-center gap-4">
          <div className="bg-[#F9F9F9] py-[10px] px-5 rounded-[29px] w-full flex items-center justify-center gap-9">
            <p onClick={() => navigate("/about")} className="cursor-pointer">
              About us
            </p>
            <p
              onClick={() => navigate("/turkmenistan")}
              className="cursor-pointer"
            >
              Turkmenistan
            </p>
            <p
              onClick={() => navigate("/tours")}
              className="flex cursor-pointer items-center justify-center gap-2"
            >
              Tours <img src={vector} alt="vector" />
            </p>
            <p onClick={() => navigate("/hotels")} className="cursor-pointer">
              Hotels
            </p>
            <p onClick={() => navigate("/visa")} className="cursor-pointer">
              Visa
            </p>
            <p onClick={() => navigate("/blog")} className="cursor-pointer">
              Blog
            </p>
          </div>

          <div className="bg-[#F9F9F9] cursor-pointer py-[10px] px-5 gap-2 rounded-[29px] flex items-center justify-center">
            <img src={globe} alt="globe" />
            <p>EN</p>
          </div>
        </div>

        <div
          onClick={() => navigate("/contact")}
          className="bg-[#009833] cursor-pointer py-[10px] px-5 text-[14px] font-[poppins-medium] text-white rounded-[29px]"
        >
          <button className="w-full outline-none">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation2;

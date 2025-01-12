import React from "react";
import { useNavigate } from "react-router-dom";

import surat from "../images/experience-img.png";
import arrow from "../images/experi-arrow.svg";
import mesage from "../images/mesage.svg";
import line from "../images/line.svg";
import safe from "../images/safe.svg";
import price from "../images/price.svg";

const Experience = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex items-center justify-between gap-[65px] mb-[100px]">
      <div className="w-[45%]">
        <div className="mb-[55px]">
          <h1 className="text-[50px] font-[poppins-semibold] ">
            Experience The New Adventure with <br /> Emin Hyzmat
          </h1>
          <img className="mt-[-17px]" src={line} alt="line" />
        </div>

        <p className="text-[#878787] text-[16px] font-[poppins-medium] mb-[33px] ">
          Lorem ipsum dolor sit amet consectetur. Dolor vitae ut sit ut mauris
          sociis tortor vel dignissim. Ullamcorper auctor non arcu proin
          urna.Lorem ipsum dolor sit amet consectetur. Dolor vitae ut sit ut
          mauris sociis tortor vel dignissim. non arcu proin urna.
        </p>

        <div className="flex items-center justify-start gap-6 mb-[35px]">
          <img src={safe} alt="safe" />
          <div>
            <p className="text-[22px] font-[poppins-semibold]">
              Safe Travelling
            </p>
            <p className="text-[#878787] text-[16px] font-[poppins-medium]">
              Lorem ipsum dolor sit amet consectetur. Dolor vitae ut sit ut
              mauris sociis tortor vel dignissim.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-6">
          <img src={price} alt="safe" />
          <div>
            <p className="text-[22px] font-[poppins-semibold]">
              Affordable Price
            </p>
            <p className="text-[#878787] text-[16px] font-[poppins-medium]">
              Lorem ipsum dolor sit amet consectetur. Dolor vitae ut sit ut
              mauris sociis tortor vel dignissim.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[55%] relative">
        <img src={surat} className="w-full object-contain -z-10" alt="surat" />
        <div className="absolute top-1 right-1 rounded-full flex items-center justify-center cursor-pointer p-[17px] bg-[#009833] z-10">
          <img src={mesage} alt="mesage" />
        </div>

        <div onClick={() => navigate('/about')} className="absolute bottom-[30px] left-[35px] backdrop-blur-[4px] cursor-pointer bg-white/50 rounded-[50px] px-5 py-[10px] flex items-center justify-center gap-[10px] ">
          <p className="text-white text-[18px] font-[poppins-medium] ">
            About us
          </p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Experience;

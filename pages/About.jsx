import React from "react";

import Navigation from "../components/navbars/Navigation";

import surat from "../images/aboutmain.png";
import line from "../images/line.svg";
import big from "../images/aboutbigsvg.svg";
import AreYouReady from "../components/AreYouReady";

const About = () => {
  return (
    <>
      <Navigation />

      <div className="w-full relative mt-6">
        <div className="w-[90%] mx-auto mb-[385px]">
          <div className="w-full relative rounded-[23px] mb-[64px] ">
            <img src={surat} alt="surat" className=" w-full object-cover" />
            <p className="absolute top-[35%] left-[43%] text-white text-[50px] font-[poppins-semibold] ">
              About us
            </p>
          </div>

          <div className="w-full">
            <div className="w-full flex items-center justify-center flex-col mb-[65px] ">
              <p className=" text-[46px] font-[poppins-semibold] ">
                Emin Hyzmat
              </p>
              <img
                className="mt-[-10px] object-contain"
                src={line}
                alt="line"
              />
            </div>

            <p className="text-[#878787] text-[16px] font-[poppins-medium] mb-5 w-[97%] ">
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
              volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
              posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
              tempor quam neque elementum a nisl.
            </p>
            <p className="text-[#878787] text-[16px] font-[poppins-medium] mb-5 w-[97%] ">
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet.{" "}
            </p>
            <p className="text-[#878787] text-[16px] font-[poppins-medium] w-[97%] ">
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
              volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
              posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
              tempor quam neque elementum a nisl.
            </p>
          </div>
        </div>

        <img src={big} alt="big" className="top-0 object-contain w-[85%] -z-10 left-0 right-0 absolute" />

        <AreYouReady />
      </div>
    </>
  );
};

export default About;

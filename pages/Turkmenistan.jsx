import React from "react";

import Navigation2 from "../components/navbars/Navigation2";
import AreYouReady from "../components/AreYouReady";

import surat from "../images/turkmenistan.png";
import bulut_top from "../images/Bulut yokarky.png";
import bulut_down from "../images/asaky bulut.png";
import history from "../images/history-text.svg";
import history_images from "../images/history images.png";
import culture_main from "../images/culture main.png";
import culture_text from "../images/culture-text.svg";
import tradition_images from "../images/tradition_images.png";
import tradition_text from "../images/tradition-text.svg";
import meals_text from "../images/meals-text.svg";
import meals_bottom from "../images/meal-asaky-bulut.png";
import meals_main from "../images/meal_main.png";

const Turkmenistan = () => {
  return (
    <>
      <div className="w-full">
        <Navigation2 />

        <div
          style={{ backgroundImage: `url(${surat})` }}
          className="w-full flex items-end justify-center -z-20 relative bg-image bg-cover bg-no-repeat h-[100vh]"
        >
          <img
            className="w-full h-[210px] object-cover"
            src={bulut_top}
            alt="cloud"
          />
        </div>

        {/* history */}
        <div className="w-[90%] mb-[69px] pt-[40px] flex items-center justify-center gap-[100px] mx-auto ">
          <div className="w-[50%] ">
            <div className="mb-10">
              <img src={history} alt="history" />
            </div>

            <p className="text-[#878787] text-[16px] mb-[13px] font-[poppins-medium] ">
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

            <p className="text-[#878787] text-[16px] font-[poppins-medium]">
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet.{" "}
            </p>
          </div>

          <div className="w-[50%] ">
            <img src={history_images} className="object-cover" alt="images" />
          </div>
        </div>
      </div>

      {/* culture */}
      <div
        style={{ backgroundImage: `url(${meals_main})` }}
        className="w-full bg-image flex items-center justify-center bg-cover bg-no-repeat relative h-[100vh]"
      >
        <img
          src={bulut_down}
          alt="cloud-down"
          className="absolute object-cover w-full h-[170px] top-0 left-0 "
        />
        
        <div className="w-[66%] mx-auto ">
          <div className="w-full flex items-center justify-center">
            <img src={culture_text} alt="culture_text" />
          </div>

          <div className="w-full text-left py-[25px] px-[35px] text-white bg-black/50">
            <p>
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
              volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
              posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
              tempor quam neque elementum a nisl.Lorem ipsum dolor sit amet
              consectetur. Metus accumsan malesuada tortor a mauris nam eleifend
              vitae at. Et vitae sollicitudin ultricies viverra pulvinar
              commodo. Tristique diam eu quis non dolor elementum mauris at.
              Vivamus iaculis duis amet nam at tempus tristique. Cursus nec
              augue sit sed amet sed rhoncus sit massa. In pulvinar vivamus
              pulvinar est neque mi et quam. Ullamcorper sed nec lobortis eu
              amet. Ultrices vitae amet sed ac malesuada egestas volutpat.
              Faucibus risus morbi nisl sed.{" "}
            </p>
          </div>
        </div>
        <img
          src={bulut_top}
          alt="cloud-top"
          className="absolute object-cover bottom-0 left-0 h-[170px] w-full"
        />
      </div>

      {/* tradition */}
      <div className="w-[90%] mb-[69px] pt-[40px] flex items-center justify-center gap-[100px] mx-auto ">
        <div className="w-[50%] ">
          <div className="mb-10">
            <img src={tradition_text} alt="history" />
          </div>

          <p className="text-[#878787] text-[16px] mb-[13px] font-[poppins-medium] ">
            Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
            tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
            ultricies viverra pulvinar commodo. Tristique diam eu quis non dolor
            elementum mauris at. Vivamus iaculis duis amet nam at tempus
            tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
            pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed nec
            lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
            volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
            posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
            tempor quam neque elementum a nisl.Lorem ipsum dolor sit amet
            consectetur. Metus accumsan malesuada tortor a mauris nam eleifend
            vitae at. Et vitae sollicitudin ultricies viverra pulvinar commodo.
            Tristique diam eu quis non dolor elementum mauris at. Vivamus
            iaculis duis amet nam at tempus tristique. Cursus nec augue sit sed
            amet sed rhoncus sit massa. In pulvinar vivamus pulvinar est neque
            mi et quam. Ullamcorper sed nec lobortis eu amet. Ultrices vitae
            amet sed ac malesuada egestas volutpat. Faucibus risus morbi nisl
            sed.
          </p>
        </div>

        <div className="w-[50%] ">
          <img src={tradition_images} alt="images" />
        </div>
      </div>

      {/* meals */}
      <div
        style={{ backgroundImage: `url(${meals_main})` }}
        className="w-full bg-image flex items-center justify-center bg-cover bg-no-repeat relative h-[100vh]"
      >
        <img
          src={bulut_down}
          alt="cloud-down"
          className="absolute w-full h-[170px] top-0 object-cover left-0 "
        />
        <div className="w-[66%] mx-auto ">
          <div className="w-full flex items-center justify-center">
            <img src={meals_text} alt="culture_text" />
          </div>

          <div className="w-full text-left py-[25px] px-[35px] text-white bg-black/50">
            <p>
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo. Tristique diam eu quis non
              dolor elementum mauris at. Vivamus iaculis duis amet nam at tempus
              tristique. Cursus nec augue sit sed amet sed rhoncus sit massa. In
              pulvinar vivamus pulvinar est neque mi et quam. Ullamcorper sed
              nec lobortis eu amet. Ultrices vitae amet sed ac malesuada egestas
              volutpat. Faucibus risus morbi nisl sed. Mauris mattis semper
              posuere sed laoreet sed nibh ultricies. Morbi fringilla nibh diam
              tempor quam neque elementum a nisl.Lorem ipsum dolor sit amet
              consectetur. Metus accumsan malesuada tortor a mauris nam eleifend
              vitae at. Et vitae sollicitudin ultricies viverra pulvinar
              commodo. Tristique diam eu quis non dolor elementum mauris at.
              Vivamus iaculis duis amet nam at tempus tristique. Cursus nec
              augue sit sed amet sed rhoncus sit massa. In pulvinar vivamus
              pulvinar est neque mi et quam. Ullamcorper sed nec lobortis eu
              amet. Ultrices vitae amet sed ac malesuada egestas volutpat.
              Faucibus risus morbi nisl sed.
            </p>
          </div>
        </div>
        <img
          src={meals_bottom}
          alt="cloud-top"
          className="absolute bottom-0 object-cover left-0 h-[170px] w-full"
        />
      </div>

      <AreYouReady />
    </>
  );
};

export default Turkmenistan;

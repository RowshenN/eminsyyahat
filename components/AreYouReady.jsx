import React from 'react'
import { useNavigate } from 'react-router-dom'

import travel from '../images/readytravel.svg' 
import plane from '../images/plane.svg' 

const AreYouReady = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full mb-[104px] flex items-center justify-center relative">
        <div className="z-10 flex flex-col items-center justify-center gap-[14px]">
          <h1 className="text-[35px] font-[poppins-semibold] ">
            Are you ready to travel?
          </h1>
          <p className="text-[18px] w-[80%] text-center font-[poppins-regular] ">
            Then contact us, we are ready to provide you with the best service.
          </p>
          <button onClick={() => navigate("/contact")} className="text-white flex items-center justify-center bg-[#009833] outline-none border-none rounded-[15px] px-5 py-[10px] ">
            Contact us
          </button>
        </div>

        <div className="absolute w-full bottom-[-25px] -z-10 left-0">
          <img
            src={travel}
            alt="travel"
            className="w-full"
          />
        </div>

        <img src={plane} alt="plane" className="absolute bottom-[25%] left-[18%]" />
      </div>
  )
}

export default AreYouReady
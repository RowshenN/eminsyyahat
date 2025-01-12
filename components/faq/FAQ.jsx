import React, { useEffect, useState } from "react";

import FAQblocks from "./FAQblocks";
import faq from "../../images/vector-faq.svg";
import { axiosInstance } from "../../utils/axiosInstance";

const FAQ = () => {
  const [faques, setFaques] = useState([]);
  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    await axiosInstance
      .get("/faq")
      .then((res) => {
        setFaques(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full mb-[183px] relative">
      <div className="w-[80%] z-10 mx-auto flex flex-col items-center justify-center">
        <div className="w-full mb-[86px] flex items-center justify-center">
          <p className="text-[50px] font-[poppins-semibold] ">FAQ's</p>
        </div>

        <div className="w-[50%] flex flex-col items-baseline justify-start gap-4">
          {faques.map((item) => {
            return (
              <FAQblocks
                key={item.id}
                head={item?.question}
                def={item?.answer}
              />
            );
          })}
        </div>
      </div>

      <img
        src={faq}
        alt="faq"
        className="absolute w-full top-0 right-0 -z-10"
      />
    </div>
  );
};

export default FAQ;

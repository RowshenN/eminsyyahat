import React, { useEffect, useState } from "react";

import Navigation2 from "../components/navbars/Navigation2";

import surat from "../images/contact-img.png";
import letter from "../images/contact-letter-icon.svg";
import map from "../images/contact-map-point.svg";
import phone from "../images/contact-phone-icon.svg";
import social from "../images/contact-ocial Icons.svg";
import social2 from "../images/contact-ocial Icons2.svg";
import social3 from "../images/contact-ocial Icons3.svg";
import social4 from "../images/contact-ocial Icons4.svg";
import line from "../images/contact-line.svg";
import send_line from "../images/contact-send-line.svg";
import { axiosInstance } from "../utils/axiosInstance";
import { message } from "antd";

const Contact = () => {
  const [emailInput, setEmailInput] = useState([]);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const getEmail = async () => {
    if (emailInput) {
      const formData = new FormData();
      formData.append("email", emailInput);
      await axiosInstance
        .post("/subscribe", formData)
        .then((res) => {
          message.success("Subscription successful!");
          setEmailInput("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      message.warning("Please fill the input!");
    }
  };

  const postMessage = async () => {
    if (
      form.name &&
      form.surname &&
      form.email &&
      form.subject &&
      form.message
    ) {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("surname", form.surname);
      formData.append("subject", form.subject);
      formData.append("email", form.email);
      formData.append("message", form.message);
      await axiosInstance
        .post("/contact", formData)
        .then((res) => {
          message.success("Your message has been sent successfully!");
          setForm({
            name: "",
            surname: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      message.warning("Please fill the input!");
    }
  };

  return (
    <div className="w-full mb-[140px] ">
      <Navigation2 />
      <div className="w-[87%] relative flex items-start gap-[150px] justify-between mx-auto mt-[100px] ">
        <div className="w-[90%] flex items-start gap-[100px] justify-between mt-[151px] ">
          <div>
            <p className="text-[50px] font-[poppins-semibold] ">Contact us</p>
            <p className="text-[#878787] text-[16px] font-[poppins-medium] mt-[22px] mb-[55px] ">
              Lorem ipsum dolor sit amet consectetur. Metus accumsan malesuada
              tortor a mauris nam eleifend vitae at. Et vitae sollicitudin
              ultricies viverra pulvinar commodo
            </p>

            <div className="w-[90%] border-b border-[#D6D6D6] pb-4 mb-8 ">
              <div className="flex items-center mb-[10px] justify-start gap-2">
                <img src={map} alt="map" />
                <p className="text-[#009833] text-[16px] font-[poppins-medium]">
                  Office
                </p>
              </div>
              <p className="text-[20px] pl-[29px] font-[poppins-regular]">
                Turkmenistan , Ashgabat Bitaraplyk shayoly No21
              </p>
            </div>

            <div className="w-[90%] border-b border-[#D6D6D6] pb-4 mb-8 ">
              <div className="flex items-center mb-[10px] justify-start gap-2">
                <img src={phone} alt="map" />
                <p className="text-[#009833] text-[16px] font-[poppins-medium]">
                  Phone
                </p>
              </div>
              <p className="text-[20px] pl-[29px] font-[poppins-regular]">
                +993 65 010101
              </p>
            </div>

            <div className="w-[90%] border-b border-[#D6D6D6] pb-4 mb-[48px] ">
              <div className="flex items-center mb-[10px] justify-start gap-2">
                <img src={letter} alt="map" />
                <p className="text-[#009833] text-[16px] font-[poppins-medium]">
                  Email
                </p>
              </div>
              <p className="text-[20px] pl-[29px] font-[poppins-regular]">
                emin.hyzmat@info
              </p>
            </div>

            <div>
              <p className="text-[16px] font-[poppins-semibold] mb-[15px] ">
                Follow us
              </p>
              <div className="flex items-center justify-start gap-[31px] ">
                <img src={social} alt="social" />
                <img src={social2} alt="social" />
                <img src={social3} alt="social" />
                <img src={social4} alt="social" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl rounded-[23px] z-10 py-[55px] px-[50px] ">
            <div className="w-[498px]">
              <h1 className="text-[28px] font-[poppins-semibold] mb-[45px] ">
                Send a message
              </h1>

              <form className="w-full flex flex-col items-baseline justify-start gap-[33px]">
                <div className="flex gap-4 items-center justify-between w-full">
                  <div className="flex flex-col w-full justify-start items-baseline gap-2">
                    <label
                      className="text-[16px] font-[poppins-medium]"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      type="text"
                      className="bg-[#FAFAFA] py-2 px-3 text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                    />
                  </div>

                  <div className="flex w-full flex-col justify-start items-baseline gap-2">
                    <label
                      className="text-[16px] font-[poppins-medium]"
                      htmlFor="surname"
                    >
                      Surname
                    </label>
                    <input
                      value={form.surname}
                      onChange={(e) =>
                        setForm({ ...form, surname: e.target.value })
                      }
                      className="bg-[#FAFAFA] py-2 px-3 text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col justify-start items-baseline gap-2">
                  <label
                    className="text-[16px] font-[poppins-medium]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="bg-[#FAFAFA] py-2 px-3 text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                    type="email"
                  />
                </div>

                <div className="flex w-full flex-col justify-start items-baseline gap-2">
                  <label
                    className="text-[16px] font-[poppins-medium]"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="bg-[#FAFAFA] py-2 px-3 text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                    type="text"
                  />
                </div>

                <div className="flex w-full flex-col justify-start items-baseline gap-2">
                  <label
                    className="text-[16px] font-[poppins-medium]"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="bg-[#FAFAFA] min-h-[141px] py-2 px-3 text-[16px] font-[poppins-medium] rounded-[6px] w-full outline-none border border-[#DADADA] "
                    name="message"
                    id=""
                  ></textarea>
                </div>

                <div
                  onClick={() => postMessage()}
                  className="flex flex-col cursor-pointer items-baseline justify-start gap-2"
                >
                  <p className="text-[16px] font-[poppins-medium] ">
                    Send Message
                  </p>
                  <img src={send_line} alt="line" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-[40%] absolute top-0 right-0 -z-20 rounded-[23px] h-[70%]">
          <img
            src={surat}
            alt="surat"
            className="w-[483px] h-[981px] object-cover"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-[196px] ">
        <div className="w-[442px] flex items-center justify-center flex-col gap-9 ">
          <p className="text-[28px] text-center font-[poppins-medium]">
            Get all the latest news and info sent to your inbox.
          </p>
          <input
            className="bg-[#FAFAFA] outline-none text-[16px] font-[poppins-regular] border-[#DADADA] border-[1px] rounded-[6px] w-full py-[13px] px-[22px]  "
            type="email"
            placeholder="Email address"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <div onClick={() => getEmail()} className="cursor-pointer">
            <p className="text-[16px] font-[poppins-medium] mb-2 ">Subscribe</p>
            <img src={line} alt="line" className="w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

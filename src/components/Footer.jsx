/* eslint-disable react/no-unescaped-entities */

import { useAppContext } from "../contexts/AppContext";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { scrollToTimeline } = useAppContext();

  // const address = " 27,Alara Street Yaba 100012 Lagos State";

  // // Create a function to generate the Google Maps URL
  // const getGoogleMapsUrl = () => {
  //   const encodedAddress = encodeURIComponent(address);
  //   return `https://www.google.com/maps?q=${encodedAddress}`;
  // };
  return (
    <footer className="w-full bg-[#100B20] pt-[100px] px-10 lg:px-[150px] text-[.95rem] text-white relative">
      <div className="w-full mb-[60px] px-4 sm:px-[30px] lg:px-[80px] flex flex-col md:flex-row gap-8 justify-between">
        <ul className="w-[fit-content] md:w-[35%]">
          <li className="mb-4">
            <img alt="" src="/images/logo.png" className="w-[150px] h-auto" />
          </li>
          <li className="">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </li>
          <li className="mt-12 md:mt-24 flex gap-3 items-center">
            <p
              onClick={() => scrollToTimeline("privacy")}
              className="cursor-pointer hover:gradient-text transition-all duration-300"
            >
              Terms od Use
            </p>
            <div className="w-[3px] h-6 rounded-full bg-[#D434FE]"></div>
            <p
              onClick={() => scrollToTimeline("privacy")}
              className="cursor-pointer hover:gradient-text transition-all duration-300"
            >
              Privacy Policy
            </p>
          </li>
        </ul>

        <ul className="w-full md:w-[200px] flex flex-col gap-3">
          <li className="w-[fit-content] font-bold text-[#D434FE] text-[1.15rem]">
            Useful Links
          </li>

          <li
            onClick={() => scrollToTimeline("overview")}
            className={`w-fit cursor-pointer hover:gradient-text transition-all duration-300 }`}
          >
            Overview
          </li>
          <li
            onClick={() => scrollToTimeline("timeline")}
            className={`w-fit cursor-pointer hover:gradient-text transition-all duration-300`}
          >
            Timeline
          </li>
          <li
            onClick={() => scrollToTimeline("faqs")}
            className={`w-fit cursor-pointer hover:gradient-text transition-all duration-300`}
          >
            FAQs
          </li>
          <li
            onClick={() => navigate("/register")}
            className={`w-fit cursor-pointer hover:gradient-text transition-all duration-300`}
          >
            Register
          </li>
          <li>
            <div className="flex gap-3 items-center">
              <h2 className="font-bold text-[#D434FE] text-[.9rem]">
                Follow us
              </h2>
              <div className="flex gap-4 items-center">
                <img
                  className="w-5 h-5 hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/instagram.png"
                />
                <img
                  className="w-5 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/twitter.png"
                />
                <img
                  className="w-3 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/facebook.png"
                />
                <img
                  className="w-5 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/linkedin.png"
                />
              </div>
            </div>
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex flex-col gap-4">
          <li className="w-[fit-content] font-bold text-[#D434FE] text-[1.15rem]">
            Contact us
          </li>{" "}
          <li className="cursor-pointer hover:gradient-text transition-all duration-300 flex gap-3 items-start">
            <img className="w-5 h-auto" alt="" src="/images/tel.png" />
            <a href="tel:+2346707653444">Tel: +2346707653444</a>
          </li>
          <a href="#" target="_blank" rel="noReferrer">
            <li className="cursor-pointer hover:gradient-text transition-all duration-300 flex gap-3 items-start">
              <img className="w-5 h-auto" alt="" src="/images/location.png" />

              <p>
                27,Alara Street
                <br /> Yaba 100012
                <br /> Lagos State
              </p>
            </li>
          </a>
        </ul>
      </div>
      <div className="w-full h-[100px] pt-5 text-center">
        All rights reserved. © getlinked Ltd.
      </div>

      <img
        className="w-5 h-5 md:w-6 md:h-6 absolute top-[200px] md:top-[120px] left-[6%] md:left-[120px] blink1"
        alt=""
        src="/images/star3.png"
      />
      <img
        className="w-3 h-3 md:w-6 md:h-6 absolute top-[87%] md:top-[75%] left-[35%] md:left-[48%] blink2"
        alt=""
        src="/images/star1.png"
      />
      <img
        className="w-5 h-5 md:w-6 md:h-6 absolute bottom-[50%] md:bottom-[70%] left-[50%] md:left-[60%] blink4"
        alt=""
        src="/images/star4.png"
      />
      <img
        className="w-5 h-5 md:w-6 md:h-6 absolute bottom-[160px] md:bottom-[100px] left-[80%] md:left-[80%] blink4"
        alt=""
        src="/images/star3.png"
      />
    </footer>
  );
};

export default Footer;

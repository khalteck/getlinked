/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Typewriter from "typewriter-effect";

const Section1 = ({ countdown }) => {
  const navigate = useNavigate();

  return (
    <section className="min-h-fit pt-14 md:pt-[100px] bg-transparent font-medium relative bg-flare3mob md:bg-flare3 bg-[length:400px_auto] md:bg-[length:600px_auto] lg:bg-[length:800px_auto] md:bg-left-top bg-no-repeat">
      <section className="w-full h-fit z-10 md:pl-10 lg:pl-[150px] pt-8 border-white/10 border-b md:bg-metrix bg-contain bg-right bg-no-repeat bg-[#150E28]/10">
        <div className="text-[.9rem] md:text-[1.5rem] lg:text-[2rem] font-bold md:text-end relative w-full md:w-full text-center md:pr-[100px]">
          <i className="">
            <Typewriter
              options={{
                strings: ["Igniting a Revolution in HR Innovation"],
                autoStart: true,
                loop: true,
              }}
            />
          </i>
          <img
            className="w-[100px] md:w-[180px] lg:w-[230px] h-auto absolute bottom-[-10px] right-[13%] md:right-[100px]"
            alt=""
            src="/images/line1.png"
          />
        </div>

        <div className="w-full flex md:flex-row flex-col items-center mt-[60px] md:mt-10 z-10">
          <div className="w-full h-fit flex flex-col gap-4 text-center md:text-start px-10 md:px-0">
            <h1 className="w-full sm:w-fit sm:mx-auto md:mx-0 md:w-fit text-[1.75rem] md:text-[2rem] lg:text-[3.5rem] text-center md:text-start font-[800] leading-tight relative">
              <p>getlinked Tech</p>
              <p className="flex gap-1 items-center justify-center md:justify-start">
                Hackathon <span className="text-[#D434FE]">1.0</span>{" "}
                <img
                  className="lg:w-14 lg:h-14 md:w-10 md:h-10 w-8 h-8"
                  alt=""
                  src="/images/chain.png"
                />
                <img
                  className="lg:w-12 lg:h-12 md:w-8 md:h-8 w-6 h-6"
                  alt=""
                  src="/images/fire.png"
                />
              </p>
              <img
                className="w-4 md:w-6 lg:w-10 h-auto absolute top-[-20px] md:top-[-30px] lg:top-[-45px] right-16 md:right-20 lg:right-24"
                alt=""
                src="/images/creative.png"
              />
            </h1>
            <p className="hidden md:block">
              Participate in getlinked tech Hackathon 2023 stand
              <br /> a chance to win a Big prize
            </p>
            <p className="block md:hidden">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div onClick={() => navigate("/register")} className={`mt-2`}>
              <Button type="normal" title="Register" />
            </div>
            <div className="text-[2.75rem] lg:text-[4rem] font-medium text-center flex gap-7 md:mt-12 font-unica mx-auto md:mx-0">
              <p>
                {countdown.hours}
                <span className="text-[.85rem]">H</span>
              </p>
              <p>
                {countdown.minutes}
                <span className="text-[.85rem]">M</span>
              </p>
              <p>
                {countdown.seconds}
                <span className="text-[.85rem]">S</span>
              </p>
            </div>
          </div>

          <div className="w-full relative mt-7 md:mt-0">
            <img
              className="w-full h-auto relative md:top-2 top-1"
              alt=""
              src="/images/man1.png"
            />
            <img
              className="w-[90%] h-auto absolute top-[-20px] left-[5%]"
              alt=""
              src="/images/hero.png"
            />
          </div>
        </div>
      </section>

      {/* flare decors */}
      <div className="w-full h-fit absolute top-0 left-0 z-0">
        <img
          className="w-5 h-5 md:w-6 md:h-6 absolute top-[140px] md:top-[160px] left-[120px] md:left-[200px] blink1"
          alt=""
          src="/images/star3.png"
        />
        <img
          className="w-3 h-3 md:w-6 md:h-6 absolute top-[130px] md:top-[420px] lg:top-[600px] md:left-[35%] left-[75%] blink2"
          alt=""
          src="/images/star4.png"
        />
        <img
          className="w-3 h-3 md:w-6 md:h-6 absolute top-[370px] md:top-[220px] left-[79%] md:left-[50%] blink4"
          alt=""
          src="/images/star4.png"
        />
        <img
          className="w-[400px] lg:w-[1000px] h-auto absolute md:top-[150px] lg:top-[-50px] right-[0px] opacity-50 hidden md:block"
          alt=""
          src="/images/flare4.png"
        />
      </div>
    </section>
  );
};

export default Section1;

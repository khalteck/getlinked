/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  const [countdown, setCountdown] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("September 26, 2023");

      // Calculate the time difference between today and the target date
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        setCountdown({
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(interval);
      } else {
        const hours = String(
          Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((timeDiff / 1000 / 60) % 60)
        ).padStart(2, "0");
        const seconds = String(Math.floor((timeDiff / 1000) % 60)).padStart(
          2,
          "0"
        );

        setCountdown({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-[#150E28] text-white font-mont">
        {/* section 1*/}

        <section className="min-h-fit pt-14 md:pt-[100px] bg-transparent font-medium relative bg-flare3mob md:bg-flare3 bg-[length:400px_auto] md:bg-[length:600px_auto] lg:bg-[length:800px_auto] md:bg-left-top bg-no-repeat">
          <section className="w-full h-fit z-10 md:pl-10 lg:pl-[150px] pt-8 border-white/10 border-b md:bg-metrix bg-contain bg-right bg-no-repeat bg-[#150E28]/10">
            <div className="text-[.9rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-end relative w-fit md:w-full mx-auto md:pr-[100px]">
              <i>Igniting a Revolution in HR Innovation</i>
              <img
                className="w-[100px] md:w-[180px] lg:w-[230px] h-auto absolute bottom-[-10px] right-0 md:right-[100px]"
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
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize
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

        {/* section 2 */}
        <section className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-10 md:py-16 bg-transparent border-white/10 border-b font-medium bg-red-500 relative">
          <div className="w-full flex md:flex-row flex-col justify-center items-center gap-[10%]">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-[90%] sm:w-[70%] mx-auto md:mx-0 md:w-[45%] h-auto"
              alt=""
              src="/images/Thebigidea.png"
            />

            <div className="w-full flex flex-col gap-5 mt-14 md:mt-0">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center md:text-start"
              >
                <p>Introduction to getlinked</p>
                <p className="text-[#D434FE]">techHackathon 1.0</p>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>

          <img
            className="w-5 h-5 md:w-6 md:h-6 absolute top-[120px] md:top-[200px] left-[50px] md:left-[120px] blink1"
            alt=""
            src="/images/star1.png"
          />
          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute top-[50%] md:top-[170px] md:right-[10%] right-[7%] blink2"
            alt=""
            src="/images/star2.png"
          />
          <img
            className="w-7 h-7 md:w-14 md:h-14 absolute bottom-[54%] md:bottom-[60px] left-[50%] md:left-[45%] rotate"
            alt=""
            src="/images/spiral.png"
          />
        </section>

        {/* section 3 */}
        <section className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-2 md:py-5 bg-transparent border-white/10 border-b font-medium bg-red-500 relative">
          <div className="w-full flex md:flex-row-reverse flex-col justify-center items-center gap-[10%]">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full sm:w-[80%] md:mx-0 md:w-[50%] h-auto"
              alt=""
              src="/images/hero3.png"
            />

            <div className="w-full flex flex-col gap-5">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center md:text-start"
              >
                <p>Rules and</p>
                <p className="text-[#D434FE]">Guidelines</p>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>

          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute bottom-[30px] md:bottom-[170px] md:right-[50%] right-[75%] blink4"
            alt=""
            src="/images/star3.png"
          />
          <img
            className="w-5 h-5 md:w-6 md:h-6 absolute top-[50%] md:top-[100px] left-[90%] md:left-[30%] blink1"
            alt=""
            src="/images/star4.png"
          />
          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute top-[150px] left-[40px] block md:hidden blink4"
            alt=""
            src="/images/star3.png"
          />

          <img
            className="w-[300px] h-auto absolute bottom-[-150px] right-0 hidden md:block"
            alt=""
            src="/images/flare-s3-1.png"
          />
          <img
            className="md:w-[400px] lg:w-[800px] h-auto absolute top-[-150px] left-[50px] opacity-50 hidden md:block"
            alt=""
            src="/images/flare-s3-2.png"
          />
          <img
            className="w-[200px] h-auto absolute bottom-[100px] right-0 block md:hidden opacity-50"
            alt=""
            src="/images/flare-s3-mob-1.png"
          />
          <img
            className="w-[300px] h-auto absolute top-[-80px] left-0 block md:hidden opacity-50"
            alt=""
            src="/images/flare-s3-mob-2.png"
          />
        </section>

        <section className="min-h-[300px] px-10 lg:px-[150px] pt-8 bg-transparent border-white/10 border-b font-medium"></section>
      </main>
    </>
  );
};

export default Homepage;

/* eslint-disable react/no-unescaped-entities */
import Header from "../components/Header";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Section1 from "../components/Section1";
import ButtonSmall from "../components/ButtonSmall";
import Button from "../components/Button";
import AccordionFaq from "../components/Accordion";
import Footer from "../components/Footer";
import Section9 from "../components/Section9";
import Section8 from "../components/Section8";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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

        <Section1 countdown={countdown} />

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

        {/* section 4 */}
        <section className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-10 md:py-20 lg:py-[120px] bg-transparent border-white/10 border-b font-medium bg-red-500 relative">
          <div className="w-full flex md:flex-row flex-col justify-center items-center gap-[10%]">
            <div className="w-full h-fit relative">
              <img
                className="w-[20%] h-auto hidden md:block absolute left-[12%] top-[-7%]"
                alt=""
                src="/images/pie.png"
              />
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-[90%] sm:w-[70%] mx-auto md:mx-0 md:w-full h-auto mt-7 md:mt-0"
                alt=""
                src="/images/hero4.png"
              />
            </div>

            <div className="w-full flex flex-col gap-5">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center md:text-start"
              >
                <p>Judging Criteria</p>
                <p className="text-[#D434FE]">Key attributes</p>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                <span className="text-[#FF26B9]">
                  Innovation and Creativity
                </span>
                : Evaluate the uniqueness and creativity of the solution.
                Consider whether it addresses a real-world problem in a novel
                way or introduces innovative features.
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                <span className="text-[#FF26B9]">Functionality</span>: Assess
                how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                <span className="text-[#FF26B9]">Impact and Relevance</span>:
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                <span className="text-[#FF26B9]">Technical Complexity</span>:
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                <span className="text-[#FF26B9]">
                  Adherence to Hackathon Rules
                </span>
                : Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="mt-8 text-center md:text-start md:hidden block"
              >
                <ButtonSmall type="normal" title="Read More" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="mt-8 text-center md:text-start hidden md:block"
              >
                <Button type="normal" title="Read More" />
              </div>
            </div>
          </div>

          <img
            className="w-5 h-5 md:w-6 md:h-6 absolute top-[20px] md:top-[50px] left-[40%] md:left-[270px] blink1"
            alt=""
            src="/images/star2.png"
          />
          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute top-[15%] md:top-[50%] left-[55%] md:left-[30%] blink2"
            alt=""
            src="/images/star4.png"
          />
          <img
            className="w-5 h-5 md:w-6 md:h-6 absolute bottom-[80px] md:bottom-[150px] left-[85%] md:left-[45%] blink4"
            alt=""
            src="/images/star3.png"
          />

          <img
            className="w-[400px] h-auto absolute bottom-[-150px] right-0 hidden md:block opacity-50"
            alt=""
            src="/images/flare-s4-2.png"
          />
          <img
            className="md:w-[400px] lg:w-[700px] h-auto absolute bottom-[-100px] left-[0px] opacity-50 hidden md:block"
            alt=""
            src="/images/flare-s4-1.png"
          />
          <img
            className="w-[200px] h-auto absolute bottom-[50px] right-0 block md:hidden opacity-50"
            alt=""
            src="/images/flare-s3-mob-1.png"
          />
          <img
            className="w-[300px] h-auto absolute top-[90px] left-0 block md:hidden opacity-50"
            alt=""
            src="/images/flare-s3-mob-2.png"
          />
        </section>

        {/* section 5 */}
        <section className="min-h-[300px] px-10 lg:px-[150px] pb-16 lg:py-[8%] pt-10 md:pt-5 bg-transparent border-white/10 border-b font-medium bg-red-500 relative">
          <div className="w-full flex md:flex-row-reverse flex-col-reverse justify-center items-center gap-[10%]">
            <div className="w-full h-fit relative mt-16 md:mt-0">
              <img
                className="w-[7%] h-auto absolute left-[12%] top-[6%] md:top-[-7%]"
                alt=""
                src="/images/question.png"
              />
              <img
                className="w-[8.5%] h-auto absolute left-[33%] top-[-1%] md:top-[-15%]"
                alt=""
                src="/images/question2.png"
              />
              <img
                className="w-[7%] h-auto absolute left-[55%] top-[6%] md:top-[-7%]"
                alt=""
                src="/images/question.png"
              />
              <img
                className="w-3 h-3 md:w-6 md:h-6 absolute left-[43%] top-[8%] md:top-[0%] blink1"
                alt=""
                src="/images/star1.png"
              />
              <img
                className="w-3 h-3 md:w-6 md:h-6 absolute left-[20%] top-[35%] md:top-[20%] blink4"
                alt=""
                src="/images/star1.png"
              />
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-[90%] sm:w-[70%] mx-auto md:mx-0 md:w-full h-auto mt-7 md:mt-0"
                alt=""
                src="/images/hero5.png"
              />
            </div>

            <div className="w-full flex flex-col gap-5">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center md:text-start"
              >
                <p>Frequently Asked</p>
                <p className="text-[#D434FE]">Questions</p>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                We got answers to the questions that you might want to ask about{" "}
                <span className="font-bold">getlinked Hackathon 1.0</span>
              </p>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full h-fit"
              >
                <AccordionFaq />
              </div>
            </div>
          </div>

          <img
            className="w-5 h-5 md:w-6 md:h-6 absolute top-[20px] md:top-[50px] left-[40%] md:left-[120px] blink1"
            alt=""
            src="/images/star2.png"
          />
          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute top-[15%] md:top-[50%] left-[55%] md:left-[50%] blink2"
            alt=""
            src="/images/star4.png"
          />
          <img
            className="w-5 h-5 md:w-6 md:h-6 absolute bottom-[80px] md:bottom-[100px] left-[85%] md:left-[80%] blink4"
            alt=""
            src="/images/star3.png"
          />
        </section>

        {/* section 6 */}
        <section className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-10 md:py-[100px] bg-transparent border-white/10 border-b font-medium bg-red-500 relative">
          <div className="w-full">
            <div className="w-full flex flex-col gap-5">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center"
              >
                <p>Timeline</p>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full md:w-[500px] text-center text-[.85rem] lg:text-[1rem] mx-auto"
              >
                Here is the breakdown of the time we anticipate using for the
                upcoming event.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full min-h-[150px] md:min-h-[500px] mt-10 border border-[#D434FE] rounded-lg flex justify-center items-center"
            >
              {/* <div className="w-[70%] min-h-[100px] md:min-h-[200px] grid grid-cols-3">
                <div className="flex justify-center items-center p-5 relative">
                  <img
                    className="w-[80%] md:w-[50%] h-auto"
                    alt=""
                    src="/images/p1.png"
                  />
                  <div className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] bg-[#150E28] rounded-full absolute bottom-[-12.5px] right-[-12.5px] md:bottom-[-25px] md:right-[-25px]"></div>
                </div>
                <div className="flex justify-center items-center border-x-2 border-[#D434FE] p-5">
                  <img
                    className="w-[90%] md:w-[70%] h-auto"
                    alt=""
                    src="/images/p2.png"
                  />
                </div>
                <div className="flex justify-center items-center border-[#D434FE] p-5 relative">
                  <div className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] bg-[#150E28] rounded-full absolute bottom-[-12.5px] left-[-12.5px] md:bottom-[-25px] md:left-[-25px]"></div>
                  <img
                    className="w-[80%] md:w-[50%] h-auto"
                    alt=""
                    src="/images/p3.png"
                  />
                </div>
                <div className="flex justify-center items-center border-t-2 border-[#D434FE] p-5">
                  <img
                    className="w-[80%] md:w-[50%] h-auto"
                    alt=""
                    src="/images/p4.png"
                  />
                </div>
                <div className="flex justify-center items-center border-x-2 border-t-2 border-[#D434FE] p-5">
                  <img
                    className="w-[90%] md:w-[70%] h-auto"
                    alt=""
                    src="/images/p5.png"
                  />
                </div>
                <div className="flex justify-center items-center border-t-2 border-[#D434FE] p-5">
                  <img
                    className="w-[90%] md:w-[70%] h-auto"
                    alt=""
                    src="/images/p6.png"
                  />
                </div>
              </div> */}
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

          {/* <img
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
            className="w-[200px] h-auto absolute bottom-[-30px] right-0 block md:hidden opacity-50"
            alt=""
            src="/images/flare-s3-mob-1.png"
          />
          <img
            className="w-[300px] h-auto absolute top-[-80px] left-0 block md:hidden opacity-50"
            alt=""
            src="/images/flare-s3-mob-2.png"
          /> */}
        </section>

        {/* section 7 */}
        <section className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-10 md:py-16 bg-transparent border-white/10 border-b font-medium bg-red-500 relative">
          <div className="w-full flex md:flex-row flex-col justify-center items-center gap-[10%]">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-[90%] sm:w-[70%] mx-auto md:mx-0 md:w-[45%] h-auto"
              alt=""
              src="/images/cup.png"
            />

            <div className="w-full flex flex-col gap-5 mt-14 md:mt-0">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center md:text-start"
              >
                <p>Prizes and</p>
                <p className="text-[#D434FE]">Rewards</p>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
              >
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
              <img
                className="w-full h-auto mt-8"
                alt=""
                src="/images/Rewards.png"
              />
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
          {/* <img
            className="w-7 h-7 md:w-14 md:h-14 absolute bottom-[54%] md:bottom-[60px] left-[50%] md:left-[45%] rotate"
            alt=""
            src="/images/spiral.png"
          /> */}

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
            className="w-[200px] h-auto absolute bottom-[-30px] right-0 block md:hidden opacity-50"
            alt=""
            src="/images/flare-s3-mob-1.png"
          />
          <img
            className="w-[300px] h-auto absolute top-[-80px] left-0 block md:hidden opacity-50"
            alt=""
            src="/images/flare-s3-mob-2.png"
          />
        </section>
        {/* section 8 */}
        <Section8 />

        {/* section 9 */}
        <Section9 />
      </main>

      <Footer />
    </>
  );
};

export default Homepage;

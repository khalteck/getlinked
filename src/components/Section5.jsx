import AccordionFaq from "./Accordion";

const Section5 = () => {
  return (
    <section
      id="faqs"
      className="min-h-[300px] px-10 lg:px-[150px] pb-16 lg:py-[8%] pt-10 md:pt-5 bg-transparent border-white/10 border-b font-medium bg-red-500 relative"
    >
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
  );
};

export default Section5;

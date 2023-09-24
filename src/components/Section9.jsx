import ButtonSmall from "./ButtonSmall";

const Section9 = () => {
  return (
    <section
      id="privacy"
      className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-12 md:py-[10%] bg-transparent font-medium relative"
    >
      <div className="w-full flex md:flex-row-reverse flex-col-reverse justify-center items-center gap-[10%]">
        <div className="w-[90%] sm:w-[80%] md:w-[90%] lg:w-[70%] h-fit relative mt-16 md:mt-0">
          <img
            className="w-[80%] h-auto absolute left-[12%] top-[-12%] md:top-[-20%]"
            alt=""
            src="/images/shield.png"
          />
          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute right-[23%] top-[8%] md:top-[-2%] blink1"
            alt=""
            src="/images/star3.png"
          />
          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute left-[20%] bottom-[35%] md:bottom-[25%] blink4"
            alt=""
            src="/images/star3.png"
          />
          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute right-[-5%] bottom-[8%] md:bottom-[18%] blink1"
            alt=""
            src="/images/star4.png"
          />
          <img
            className="w-3 h-3 md:w-6 md:h-6 absolute left-[30%] bottom-[35%] md:bottom-[38%] blink4"
            alt=""
            src="/images/star1.png"
          />

          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-[90%] sm:w-[70%] mx-auto md:mx-0 md:w-full h-auto mt-7 md:mt-0"
            alt=""
            src="/images/hero9.png"
          />
        </div>

        <div className="w-full flex flex-col gap-5">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center md:text-start"
          >
            <p>Privacy Policy and</p>
            <p className="text-[#D434FE]">Terms</p>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="tracking-wide leading-relaxed text-center md:text-start text-[.75rem]"
          >
            Last updated on September 12, 2023
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem] mt-4"
          >
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full md:max-w-[700px] mb-7 md:mb-0 p-7 md:p-16 bg-[#1c1530]/80 rounded-lg mt-10 border border-[#D434FE] text-[.9rem]"
          >
            <p className="mb-4 leading-relaxed">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h3 className="text-[#D434FE] font-bold text-[1.15rem] mt-4">
              Licensing Policy
            </h3>
            <p className="font-bold mt-3">
              Here are terms of our Standard License:
            </p>
            <div className="w-full flex flex-col gap-4 mt-4">
              <div className="w-full flex gap-3">
                <img
                  className="w-4 h-4 md:w-5 md:h-5"
                  alt=""
                  src="/images/check.png"
                />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="w-full flex gap-3">
                <img
                  className="w-4 h-4 md:w-5 md:h-5"
                  alt=""
                  src="/images/check.png"
                />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>

            <div className="mt-8 text-center block">
              <ButtonSmall type="normal" title="Read More" />
            </div>
            {/* <div className="mt-8 text-center hidden md:block">
            <Button type="normal" title="Read More" />
          </div> */}
          </div>
        </div>
      </div>

      <img
        className="w-3 h-3 md:w-6 md:h-6 absolute top-[30px] md:top-[170px] md:right-[50%] right-[75%] blink3"
        alt=""
        src="/images/star2.png"
      />
      <img
        className="w-5 h-5 md:w-6 md:h-6 absolute top-[50%] md:top-[100px] left-[90%] md:left-[30%] blink1"
        alt=""
        src="/images/star4.png"
      />
      <img
        className="w-3 h-3 md:w-6 md:h-6 absolute bottom-[250px] left-[40px] blink4"
        alt=""
        src="/images/star2.png"
      />

      <img
        className="md:w-[400px] lg:w-[800px] h-auto absolute bottom-[-180px] left-[0px] opacity-50 hidden md:block"
        alt=""
        src="/images/flare-s9.png"
      />
      <img
        className="w-[300px] h-auto absolute top-[40%] left-0 block md:hidden opacity-50"
        alt=""
        src="/images/flare-s3-mob-2.png"
      />
    </section>
  );
};

export default Section9;

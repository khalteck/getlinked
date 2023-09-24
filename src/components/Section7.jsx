const Section7 = () => {
  return (
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
            Highlight of the prizes or rewards for winners and for participants.
          </p>
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
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
  );
};

export default Section7;

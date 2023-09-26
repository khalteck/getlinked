const Section8 = () => {
  return (
    <section className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-10 md:py-[100px] bg-transparent border-white/10 border-b font-medium relative">
      <div className="w-full">
        <div className="w-full flex flex-col gap-5">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-center"
          >
            <p>Partners and Sponsors</p>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full md:w-[500px] text-center text-[.85rem] lg:text-[1rem] mx-auto"
          >
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="w-full min-h-[150px] md:min-h-[200px] lg:min-h-[500px] mt-10 border border-[#D434FE] rounded-lg flex justify-center items-center p-[5%] md:p-10"
        >
          <div className="w-[70%] min-h-[100px] md:min-h-[200px] grid grid-cols-3">
            <div className="flex justify-center items-center p-5 relative">
              <img
                className="w-[90%] md:w-[50%] h-auto"
                alt=""
                src="/images/p1.png"
              />
              <div className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] bg-[#150E28] rounded-full absolute bottom-[-12.5px] right-[-12.5px] md:bottom-[-25px] md:right-[-25px]"></div>
            </div>
            <div className="flex justify-center items-center border-x-2 border-[#D434FE] p-5">
              <img
                className="w-[95%] md:w-[70%] h-auto"
                alt=""
                src="/images/p2.png"
              />
            </div>
            <div className="flex justify-center items-center border-[#D434FE] p-5 relative">
              <div className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] bg-[#150E28] rounded-full absolute bottom-[-12.5px] left-[-12.5px] md:bottom-[-25px] md:left-[-25px]"></div>
              <img
                className="w-[90%] md:w-[50%] h-auto"
                alt=""
                src="/images/p3.png"
              />
            </div>
            <div className="flex justify-center items-center border-t-2 border-[#D434FE] p-5">
              <img
                className="w-[90%] md:w-[50%] h-auto"
                alt=""
                src="/images/p4.png"
              />
            </div>
            <div className="flex justify-center items-center border-x-2 border-t-2 border-[#D434FE] p-5">
              <img
                className="w-[95%] md:w-[70%] h-auto"
                alt=""
                src="/images/p5.png"
              />
            </div>
            <div className="flex justify-center items-center border-t-2 border-[#D434FE] p-5">
              <img
                className="w-[95%] md:w-[70%] h-auto"
                alt=""
                src="/images/p6.png"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        className="w-3 h-3 md:w-6 md:h-6 absolute top-[50%] md:top-[200px] md:left-[10%] left-[10%] blink4"
        alt=""
        src="/images/star2.png"
      />
      <img
        className="w-5 h-5 md:w-6 md:h-6 absolute top-[60%] md:top-[40%] left-[50%] md:left-[55%] blink1"
        alt=""
        src="/images/star1.png"
      />
      <img
        className="w-3 h-3 md:w-6 md:h-6 absolute left-[80%] bottom-[80px] md:bottom-[150px] md:left-[48%] blink4"
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

export default Section8;

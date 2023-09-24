/* eslint-disable react/no-unescaped-entities */
const Section3 = () => {
  return (
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
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
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
  );
};

export default Section3;

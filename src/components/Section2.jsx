/* eslint-disable react/no-unescaped-entities */
const Section2 = () => {
  return (
    <section
      id="overview"
      className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-10 md:py-16 bg-transparent border-white/10 border-b font-medium bg-red-500 relative"
    >
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
  );
};

export default Section2;

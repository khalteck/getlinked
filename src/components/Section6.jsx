import Timeline from "./Timeline";
import TimelineMob from "./TimelineMob";

const Section6 = () => {
  return (
    <section
      id="timeline"
      className="min-h-[300px] px-10 lg:px-[150px] pb-16 pt-10 md:py-[100px] bg-transparent border-white/10 border-b font-medium bg-red-500 relative"
    >
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
            className="w-full md:w-[500px] text-center mx-auto"
          >
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="md:hidden block">
          <TimelineMob />
        </div>

        <div className="hidden md:block mt-12">
          <Timeline />
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
    </section>
  );
};

export default Section6;

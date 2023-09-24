import Button from "./Button";
import ButtonSmall from "./ButtonSmall";

const Section4 = () => {
  return (
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
            <span className="text-[#FF26B9]">Innovation and Creativity</span>:
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
          >
            <span className="text-[#FF26B9]">Functionality</span>: Assess how
            well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
          >
            <span className="text-[#FF26B9]">Impact and Relevance</span>:
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
          >
            <span className="text-[#FF26B9]">Technical Complexity</span>:
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="tracking-wide leading-relaxed text-center md:text-start text-[.85rem] lg:text-[1rem]"
          >
            <span className="text-[#FF26B9]">Adherence to Hackathon Rules</span>
            : Judges will Ensure that the team adhered to the rules and
            guidelines of the hackathon, including deadlines, use of specific
            technologies or APIs, and any other competition-specific
            requirements.
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
  );
};

export default Section4;

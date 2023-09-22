import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useAppContext } from "../contexts/AppContext";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const navigate = useNavigate();

  const {
    contactData,
    handleContactChange,
    setValidationErr,
    validationErr,
    submitErr,
    buttonLoader,
    submitContact,
    contactResponse,
  } = useAppContext();

  function handleSubmit() {
    if (
      contactData?.first_name &&
      contactData?.email &&
      contactData?.phone_number &&
      contactData?.message
    ) {
      submitContact();
    } else {
      setValidationErr("All fields are required!");
    }
  }
  return (
    <>
      <Header />
      <main className="w-full h-screen bg-[#150E28] text-white font-mont overflow-auto">
        <section className="w-full h-screen flex gap-5 md:flex-row md:justify-between lg:justify-center flex-col absolute top-18 px-10 lg:px-[150px] pt-[40px] md:py-[180px] z-30 overflow-x-hidden">
          <div className="w-full md:w-[40%] flex-col gap-4 font-medium hidden md:flex md:pt-[100px] relative">
            <h1 className="font-bold text-[2rem] text-[#D434FE]">
              Get in touch
            </h1>

            <p>
              Contact
              <br /> Information
            </p>

            <p>
              27, Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>

            <p>
              Call us:{" "}
              <a
                href="tel:07067981819"
                className="hover:gradient-text transition-all duration-300"
              >
                07067981819
              </a>
            </p>

            <p>
              We are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </p>

            <div>
              <h2 className="mb-3 font-bold text-[#D434FE] text-[1.25rem]">
                Share on
              </h2>
              <div className="flex gap-4 items-center">
                <img
                  className="w-6 h-6 hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/instagram.png"
                />
                <img
                  className="w-5 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/twitter.png"
                />
                <img
                  className="w-3 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/facebook.png"
                />
                <img
                  className="w-6 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/linkedin.png"
                />
              </div>
            </div>

            {/* star decor */}
            <img
              className="w-4 h-4 absolute md:block hidden top-[0px] left-3 blink1"
              alt=""
              src="/images/star1.png"
            />
          </div>

          <div className="w-full md:w-1/2 h-fit">
            <div
              onClick={() => {
                navigate(-1);
              }}
              className="w-7 h-7 cursor-pointer relative flex md:hidden justify-center items-center mb-10"
            >
              <img className="w-full h-full" alt="" src="/images/back.png" />
            </div>

            <ContactForm
              handleSubmit={handleSubmit}
              validationErr={validationErr}
              contactData={contactData}
              handleContactChange={handleContactChange}
              submitErr={submitErr}
              contactResponse={contactResponse}
              buttonLoader={buttonLoader}
            />

            <div className="md:hidden flex flex-col items-center my-12">
              <h2 className="mb-3 font-bold text-[#D434FE] text-[.9remrem]">
                Share on
              </h2>
              <div className="flex gap-4 items-center">
                <img
                  className="w-4 h-4 hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/instagram.png"
                />
                <img
                  className="w-4 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/twitter.png"
                />
                <img
                  className="w-2 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/facebook.png"
                />
                <img
                  className="w-4 h-auto hover:scale-[1.4] cursor-pointer transition-all duration-300"
                  alt=""
                  src="/images/linkedin.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* flare decor */}
      <section className="w-full h-screen absolute top-0 left-0 z-0 overflow-hidden">
        <img
          className="w-6 h-6 hidden md:block absolute top-[130px] right-[250px] blink4"
          alt=""
          src="/images/star4.png"
        />
        <img
          className="w-[400px] md:w-[650px] h-auto absolute top-5 md:top-[80px] left-[-20px] opacity-60"
          alt=""
          src="/images/flare.png"
        />
        <img
          className="w-[400px] lg:w-[650px] h-auto absolute bottom-[0px] right-[0px] opacity-50 hidden md:block"
          alt=""
          src="/images/flare2.png"
        />
      </section>
    </>
  );
};

export default Contact;

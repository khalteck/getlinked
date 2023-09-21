import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useAppContext } from "../contexts/AppContext";
import { ClipLoader } from "react-spinners";

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
      <main className="w-full min-h-screen pt-12 md:pt-[100px] bg-[#150E28] text-white font-mont px-8 lg:px-[150px] pb-10">
        <section className="w-full h-full flex gap-5 md:flex-row md:justify-between lg:justify-center flex-col md:mt-[100px]">
          <div className="w-full md:w-[40%] flex-col gap-4 font-medium hidden md:flex">
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
          </div>

          <div className="w-full md:w-1/2">
            <div
              onClick={() => {
                navigate(-1);
              }}
              className="w-7 h-7 cursor-pointer relative flex md:hidden justify-center items-center mb-10"
            >
              <img className="w-full h-full" alt="" src="/images/back.png" />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="w-full md:w-full md:min-w-[400px] bg-transparent md:bg-[#1c1530] md:p-14 lg:p-20 rounded-lg flex flex-col gap-7"
            >
              <h2 className="font-bold text-[1.3rem] text-[#D434FE]">
                Questions or need assistance?
                <br /> Let us know about it!
              </h2>

              <p className="md:hidden text-[.9rem] font-medium">
                Email us below to any question related to our event
              </p>

              <input
                type="text"
                id="first_name"
                className={`w-full py-3 px-6 border outline-none rounded-md bg-transparent placeholder:text-white placeholder:font-medium transition-all duration-300 ${
                  validationErr && !contactData?.first_name
                    ? "border-red-500/60"
                    : "border-white"
                }`}
                placeholder="First Name"
                value={contactData?.first_name}
                onChange={handleContactChange}
              />

              <input
                type="email"
                id="email"
                className={`w-full py-3 px-6 border outline-none rounded-md bg-transparent placeholder:text-white placeholder:font-medium transition-all duration-300 ${
                  validationErr && !contactData?.email
                    ? "border-red-500/60"
                    : "border-white"
                }`}
                placeholder="Mail"
                value={contactData?.email}
                onChange={handleContactChange}
              />

              <input
                type="number"
                id="phone_number"
                className={`w-full py-3 px-6 border outline-none rounded-md bg-transparent placeholder:text-white placeholder:font-medium transition-all duration-300 number-input ${
                  validationErr && !contactData?.phone_number
                    ? "border-red-500/60"
                    : "border-white"
                }`}
                placeholder="Phone Number"
                value={contactData?.phone_number}
                onChange={handleContactChange}
              />

              <textarea
                id="message"
                className={`w-full h-[120px] py-3 px-6 border outline-none rounded-md bg-transparent placeholder:text-white placeholder:font-medium transition-all duration-300 ${
                  validationErr && !contactData?.message
                    ? "border-red-500/60"
                    : "border-white"
                }`}
                placeholder="Message"
                value={contactData?.message}
                onChange={handleContactChange}
              />

              {validationErr && (
                <div className="text-red-500 text-[.85rem] w-full py-1 px-2 rounded-md bg-red-500/10 border border-red-500/20">
                  {validationErr}
                </div>
              )}

              {submitErr && (
                <div className="text-red-500 text-[.85rem] w-full py-1 px-2 rounded-md bg-red-500/10 border border-red-500/20">
                  {submitErr}
                </div>
              )}

              {contactResponse && (
                <div className="text-green-500 text-[.85rem] w-full py-1 px-2 rounded-md bg-green-500/10 border border-green-500/20">
                  {contactResponse}
                </div>
              )}

              <div className="w-full text-center">
                <button
                  type="submit"
                  disabled={buttonLoader}
                  className="w-fit h-fit px-14 py-3 text-white bg-gradient-to-r from-[#903AFF] to-[#FE34B9] text-[.9rem] rounded-sm hover:opacity-70 transition-all duration-300"
                >
                  {buttonLoader ? (
                    <ClipLoader color={"#ffffff"} size={20} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>

            <div className="md:hidden flex flex-col items-center mt-12">
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
    </>
  );
};

export default Contact;

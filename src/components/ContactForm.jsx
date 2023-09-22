import Button from "./Button";

/* eslint-disable react/prop-types */
const ContactForm = ({
  handleSubmit,
  validationErr,
  contactData,
  handleContactChange,
  submitErr,
  contactResponse,
  buttonLoader,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full md:w-full md:min-w-[400px] bg-transparent md:bg-gradient-to-br from-[#1c1530] to-transparent md:translate-x-[-15px] lg:translate-x-0 md:p-14 lg:p-20 rounded-lg flex flex-col gap-7 shadow-lg relative"
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
          <Button type="contact" title="Submit" buttonLoader={buttonLoader} />
        </div>

        {/* star decor */}
        <img
          className="w-6 h-6 hidden md:block absolute bottom-[120px] left-[-10px] blink2"
          alt=""
          src="/images/star2.png"
        />
        <img
          className="w-6 h-6 hidden lg:block absolute bottom-[10px] right-[-80px] blink3"
          alt=""
          src="/images/star3.png"
        />

        <img
          className="w-4 h-4 block md:hidden absolute top-[-40px] left-[40%] blink1"
          alt=""
          src="/images/star1.png"
        />
        <img
          className="w-5 h-5 block md:hidden absolute top-[30px] right-[18px] blink4"
          alt=""
          src="/images/star4.png"
        />
        <img
          className="w-4 h-4 block md:hidden absolute bottom-[90px] right-[-18px] blink3"
          alt=""
          src="/images/star3.png"
        />
        <img
          className="w-4 h-4 block md:hidden absolute bottom-[15px] left-[18px] blink2"
          alt=""
          src="/images/star2.png"
        />
      </form>
    </>
  );
};

export default ContactForm;

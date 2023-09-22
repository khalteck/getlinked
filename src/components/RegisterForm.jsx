/* eslint-disable react/no-unescaped-entities */
import { ClipLoader } from "react-spinners";
import Button from "./Button";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

/* eslint-disable react/prop-types */
const RegisterForm = ({
  handleSubmit,
  validationErr,
  registerData,
  handleRegisterChange,
  submitErr,
  contactResponse,
  buttonLoader,
  categories,
  fetching,
}) => {
  const groupSize = [1, 5, 10, 20, 50, 100];

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full md:w-full md:min-w-[400px] bg-transparent md:bg-gradient-to-br from-[#1c1530] to-transparent md:translate-x-[-15px] lg:translate-x-0 md:p-14 lg:p-20 mb-12 rounded-lg flex flex-col gap-7 shadow-lg relative"
      >
        <h2 className="font-bold text-[1.2rem] md:text-[2rem] text-[#D434FE]">
          Register
        </h2>

        <img
          className="w-[70%] h-auto mx-auto md:hidden"
          alt=""
          src="/images/reg-img.png"
        />

        <div className="w-full md:mt-[-10px] mt-[-30px]">
          <div className="w-full flex items-end">
            <img className="w-auto h-10" alt="" src="/images/Part.png" />
          </div>

          <p className="uppercase text-[1.5rem] mt-4">create your account</p>
        </div>

        <div className="w-full flex md:flex-row flex-col gap-8">
          <div className="w-full">
            <label htmlFor="team_name">Team's Name</label>
            <input
              type="text"
              id="team_name"
              className={`w-full mt-2 py-3 px-6 border outline-none rounded-md bg-transparent placeholder:text-white/30 placeholder:font-medium placeholder:text-[.9rem] transition-all duration-300 ${
                validationErr && !registerData?.team_name
                  ? "border-red-500/60"
                  : "border-white"
              }`}
              placeholder="Enter the name of your group"
              value={registerData?.team_name}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone_number">Phone</label>
            <input
              type="number"
              id="phone_number"
              className={`w-full mt-2 py-3 px-6 border outline-none rounded-md bg-transparent placeholder:text-white/30 placeholder:font-medium placeholder:text-[.9rem] transition-all duration-300 number-input  ${
                validationErr && !registerData?.phone_number
                  ? "border-red-500/60"
                  : "border-white"
              }`}
              placeholder="Enter your phone number"
              value={registerData?.phone_number}
              onChange={handleRegisterChange}
            />
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col gap-8">
          <div className="w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className={`w-full mt-2 py-3 px-6 border outline-none rounded-md bg-transparent placeholder:text-white/30 placeholder:font-medium placeholder:text-[.9rem] transition-all duration-300 ${
                validationErr && !registerData?.email
                  ? "border-red-500/60"
                  : "border-white"
              }`}
              placeholder="Enter your email address"
              value={registerData?.email}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="project_topic">Project Topic</label>
            <input
              type="text"
              id="project_topic"
              className={`w-full mt-2 py-3 px-6 border outline-none rounded-md bg-transparent placeholder:text-white/30 placeholder:font-medium placeholder:text-[.9rem] transition-all duration-300 ${
                validationErr && !registerData?.project_topic
                  ? "border-red-500/60"
                  : "border-white"
              }`}
              placeholder="What is your group project topic"
              value={registerData?.project_topic}
              onChange={handleRegisterChange}
            />
          </div>
        </div>

        <div className="w-full flex flex-row gap-8">
          <div className="w-[60%] md:w-full relative">
            <label htmlFor="category">Category</label>
            {fetching ? (
              <div className="w-full mt-[10px] py-3 border rounded-md flex justify-center items-center">
                <ClipLoader color={"#ffffff"} size={20} />
              </div>
            ) : (
              <select
                id="category"
                className={`w-full mt-2 py-3 px-3 md:px-6 border outline-none rounded-md bg-transparent placeholder:font-medium text-[.75rem] md:text-[.9rem] transition-all duration-300 ${
                  validationErr && !registerData?.category
                    ? "border-red-500/60"
                    : "border-white"
                }`}
                value={registerData?.category}
                onChange={handleRegisterChange}
              >
                <option value="default" hidden>
                  Select your category
                </option>
                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    className="text-black font-medium"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            )}
            <img
              className="w-3 h-2 absolute top-[65%] right-5"
              alt=""
              src="/images/arrowDown.png"
            />
          </div>
          <div className="w-[40%] md:w-full relative">
            <label htmlFor="group_size">Group size</label>
            <select
              id="group_size"
              className={`w-full mt-2 py-3 px-3 md:px-6 border outline-none rounded-md bg-transparent placeholder:font-medium text-[.75rem] md:text-[.9rem] transition-all duration-300 ${
                validationErr && !registerData?.group_size
                  ? "border-red-500/60"
                  : "border-white"
              }`}
              value={registerData?.group_size}
              onChange={handleRegisterChange}
            >
              <option value="default" hidden>
                Select
              </option>
              {groupSize.map((group) => (
                <option
                  key={group}
                  value={group}
                  className="text-black font-medium"
                >
                  {group}
                </option>
              ))}
            </select>
            <img
              className="w-3 h-2 absolute top-[65%] right-5"
              alt=""
              src="/images/arrowDown.png"
            />
          </div>
        </div>

        {validationErr && (
          <div className="text-red-500 text-[.85rem] w-full py-1 px-2 rounded-md bg-red-500/10 border border-red-500/20">
            {capitalizeFirstLetter(validationErr)}
          </div>
        )}

        {submitErr && (
          <div className="text-red-500 text-[.85rem] w-full py-1 px-2 rounded-md bg-red-500/10 border border-red-500/20">
            {capitalizeFirstLetter(submitErr)}
          </div>
        )}

        {contactResponse && (
          <div className="text-green-500 text-[.85rem] w-full py-1 px-2 rounded-md bg-green-500/10 border border-green-500/20">
            {capitalizeFirstLetter(contactResponse)}
          </div>
        )}

        <div>
          <i className="text-[#FF26B9] text-[.7rem] md:text-[.9rem]">
            Please review your registration details before submitting
          </i>

          <div className="flex items-center gap-3 mt-4">
            <div className="w-[10px] mr-3">
              <input
                type="checkbox"
                id="privacy_poclicy_accepted"
                checked={registerData?.privacy_poclicy_accepted}
                onChange={handleRegisterChange}
                className="custom-checkbox"
              />
            </div>
            <label
              htmlFor="privacy_poclicy_accepted"
              className="text-[.75rem] md:text-[.9rem] cursor-pointer"
            >
              I agreed with the event terms and conditions and privacy policy
            </label>
          </div>
        </div>

        <div className="w-full text-center hidden md:block">
          <Button type="reg" title="Submit" buttonLoader={buttonLoader} />
        </div>
        <div className="w-full text-center md:hidden">
          <Button type="contact" title="Submit" buttonLoader={buttonLoader} />
        </div>

        {/* star decor */}
        <img
          className="w-6 h-6 hidden lg:block absolute bottom-[-20px] right-[10%] blink3"
          alt=""
          src="/images/star3.png"
        />
        <img
          className="w-6 h-6 hidden md:block absolute top-[20px] right-[20%] blink4"
          alt=""
          src="/images/star4.png"
        />

        <img
          className="w-4 h-4 block md:hidden absolute top-[150px] right-[15px] blink1"
          alt=""
          src="/images/star1.png"
        />
        <img
          className="w-5 h-5 block md:hidden absolute top-[37%] left-[-30px] blink4"
          alt=""
          src="/images/star4.png"
        />
        <img
          className="w-4 h-4 block md:hidden absolute bottom-[23%] right-[-20px] blink2"
          alt=""
          src="/images/star2.png"
        />
      </form>
      <div className="h-[50px] w-full bg-transparent md:block hidden"></div>
    </>
  );
};

export default RegisterForm;

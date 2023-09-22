/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Congratulations = ({ setRegSuccess }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#150E28]/90 fixed top-0 left-0 flex justify-center py-20 px-7 z-[999] font-medium text-white overflow-y-auto">
      <div className="w-full md:w-[40%] md:min-w-[550px] h-fit border border-[#D434FE] rounded-md p-7 md:p-10 flex flex-col mt-[80px] scale relative">
        <img
          className="w-full sm:w-[60%] md:w-[60%] h-auto mx-auto"
          alt=""
          src="/images/congratulation.png"
        />
        <p className="text-[1.35rem] md:text-[2rem] text-center">
          Congratulations
          <br />
          you have successfully Registered!
        </p>

        <div className="w-full flex flex-col gap-2 items-center mt-3">
          <p>Yes, it was easy and you did it!</p>
          <p className="flex gap-1 items-center">
            Check your mail box for next step{" "}
            <img className="w-5 h-5" alt="" src="/images/smile.png" />
          </p>
        </div>

        <div
          onClick={() => {
            setRegSuccess(false);
            navigate("/");
          }}
          className="mt-7"
        >
          <Button type="back" title="Back" />
        </div>

        {/* star decor */}
        <img
          className="w-4 h-4 absolute bottom-[-35px] md:bottom-[10px] right-10 blink1"
          alt=""
          src="/images/star1.png"
        />
        <img
          className="w-5 h-5 absolute top-[40%] left-[12%] md:left-[20%] blink4"
          alt=""
          src="/images/star4.png"
        />
        <img
          className="w-4 h-4 absolute top-[-20px] right-[-20px] blink2"
          alt=""
          src="/images/star2.png"
        />
      </div>
    </div>
  );
};

export default Congratulations;

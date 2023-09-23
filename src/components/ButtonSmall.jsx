import { useState } from "react";
import { ClipLoader } from "react-spinners";

/* eslint-disable react/prop-types */
const ButtonSmall = ({ type, title, buttonLoader }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type={title === "Submit" ? "submit" : undefined}
      disabled={title === "Submit" && buttonLoader}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={`"h-fit px-8 py-2 text-white text-[.9rem] rounded-sm transition-all duration-300 ${
        hover
          ? "btn-hover"
          : "bg-gradient-to-r from-[#903AFF] to-[#FE34B9] border-2 border-[#1c1530]"
      } ${type === "reg" || type === "back" ? "w-full" : "w-fit"}`}
    >
      {title === "Submit" && (
        <span>
          {buttonLoader ? <ClipLoader color={"#ffffff"} size={20} /> : title}
        </span>
      )}

      {title !== "Submit" && title}
    </button>
  );
};

export default ButtonSmall;

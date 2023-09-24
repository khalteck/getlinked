import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import Button from "./Button";

const Header = () => {
  const { currentPage, scrollToTimeline } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  const [opening, setopening] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;

      setScrollBackground(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-[60px]  ${
        scrollBackground
          ? "bg-[#150E28]"
          : !scrollBackground && currentPage === "/"
          ? "bg-gradient-to-b from-[#150E28] to-transparent"
          : "bg-gradient-to-b from-[#150E28] to-transparent"
      } text-white md:h-[100px] md:gap-20 lg:gap-[150px] justify-between px-8 lg:px-[150px] items-center transition-all duration-700 fixed top-0 left-0 z-[999] font-mont font-medium ${
        currentPage === "/"
          ? "border-gray-100/10 border-b flex"
          : "border-transparent hidden md:flex"
      }`}
    >
      <Link to="/">
        <div className="md:flex gap-2 items-center">
          <img
            alt=""
            src="/images/logo.png"
            className="w-[90px] h-auto md:w-[120px] lg:w-[180px] md:min-w-[100px] rounded-sm md:rounded-b-lg"
          />
        </div>
      </Link>

      <div
        onClick={() => {
          handleClick();
          setopening(true);
        }}
        className="md:hidden cursor-pointer"
      >
        <img alt="" src="/images/menu.png" className="w-5 h-auto" />
      </div>

      <ul className="md:gap-7 lg:gap-14 text-[.9rem] items-center hidden md:flex">
        <li
          onClick={() => scrollToTimeline("timeline")}
          className={`cursor-pointer hover:gradient-text transition-all duration-300`}
        >
          Timeline
        </li>
        <li
          onClick={() => scrollToTimeline("overview")}
          className={`cursor-pointer hover:gradient-text transition-all duration-300 }`}
        >
          Overview
        </li>
        <li
          onClick={() => scrollToTimeline("faqs")}
          className={`cursor-pointer hover:gradient-text transition-all duration-300`}
        >
          FAQs
        </li>
        <li
          onClick={() => navigate("/contact")}
          className={`cursor-pointer hover:gradient-text transition-all duration-300 ${
            currentPage === "/contact" && "gradient-text"
          }`}
        >
          Contact
        </li>
        <li
          onClick={() => navigate("/register")}
          className={`lg:ml-[120px] md:ml-[50px]`}
        >
          <Button type="normal" title="Register" />
        </li>
      </ul>

      {/* mobile dropdown */}
      {openMenu && (
        <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
          <div
            onClick={() => {
              setopening(false);
              setTimeout(() => {
                handleClick();
              }, 750);
            }}
            className="w-7 h-7 cursor-pointer absolute top-7 right-7 flex justify-center items-center"
          >
            <img
              className="w-full h-full absolute top-0 left-0"
              alt=""
              src="/images/close-circle.png"
            />
            <img className="w-3 h-3" alt="" src="/images/close.png" />
          </div>
          <ul
            className={`px-7 py-[100px] w-full bg-[#150E28] text-white space-y-3 md:hidden overflow-y-auto ${
              opening ? "slideDown" : "slideUp"
            }`}
          >
            <li
              onClick={() => {
                handleClick();
                scrollToTimeline("timeline");
              }}
              className="py-2"
            >
              Timeline
            </li>

            <li
              onClick={() => {
                handleClick();
                scrollToTimeline("overview");
              }}
              className="py-2"
            >
              Overview
            </li>

            <li
              onClick={() => {
                handleClick();
                scrollToTimeline("faqs");
              }}
              className="py-2"
            >
              FAQs
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/contact");
              }}
              className="py-2"
            >
              Contact
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/register");
              }}
              className="py-2"
            >
              <Button type="normal" title="Register" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

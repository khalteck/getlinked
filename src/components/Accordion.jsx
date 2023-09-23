/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function AccordionFaq() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div className="text-[.85rem] md:text-[1rem]">
      <div id="accordionExample">
        <div className="border-b border-[#D434FE]">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              } group relative flex w-full items-center gap-3 rounded-t-[15px] border-0 bg-transparent px-1 py-4 text-left transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Can I work on a project I started before the hackathon?
              <img
                className="w-3 md:w-4 h-auto ml-auto"
                alt=""
                src={
                  activeElement === "element1"
                    ? "/images/icons8-minus-30.png"
                    : "/images/plus.png"
                }
              />
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-1 py-4">
              <strong>This is the first item's accordion body.</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </TECollapse>
        </div>
      </div>
      <div className="border-b border-[#D434FE]">
        <h2 className="mb-0" id="headingTwo">
          <button
            className={`${
              activeElement === "element2"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center gap-3 rounded-t-[15px] border-0 bg-transparent px-1 py-4 text-left transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
            type="button"
            onClick={() => handleClick("element2")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What happens if I need help during the hackathon?
            <img
              className="w-3 md:w-4 h-auto ml-auto"
              alt=""
              src={
                activeElement === "element2"
                  ? "/images/icons8-minus-30.png"
                  : "/images/plus.png"
              }
            />
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element2"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-1 py-4">
            <strong>This is the second item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </TECollapse>
      </div>

      <div className="border-b border-[#D434FE]">
        <h2 className="mb-0" id="headingThree">
          <button
            className={`${
              activeElement === "element3"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center gap-3 rounded-t-[15px] border-0 bg-transparent px-1 py-4 text-left transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
            type="button"
            onClick={() => handleClick("element3")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What happens if I don't have an idea for a project?
            <img
              className="w-3 md:w-4 h-auto ml-auto"
              alt=""
              src={
                activeElement === "element3"
                  ? "/images/icons8-minus-30.png"
                  : "/images/plus.png"
              }
            />
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element3"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-1 py-4">
            <strong>This is the third item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </TECollapse>
      </div>

      <div className="border-b border-[#D434FE]">
        <h2 className="mb-0" id="headingFour">
          <button
            className={`${
              activeElement === "element4"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center gap-3 rounded-t-[15px] border-0 bg-transparent px-1 py-4 text-left transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
            type="button"
            onClick={() => handleClick("element4")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Can I join a team or do I have to come with one?
            <img
              className="w-3 md:w-4 h-auto ml-auto"
              alt=""
              src={
                activeElement === "element4"
                  ? "/images/icons8-minus-30.png"
                  : "/images/plus.png"
              }
            />
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element4"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-1 py-4">
            <strong>This is the fourth item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </TECollapse>
      </div>

      <div className="border-b border-[#D434FE]">
        <h2 className="mb-0" id="headingFive">
          <button
            className={`${
              activeElement === "element5"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center gap-3 rounded-t-[15px] border-0 bg-transparent px-1 py-4 text-left transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
            type="button"
            onClick={() => handleClick("element5")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What happens after the hackathon ends
            <img
              className="w-3 md:w-4 h-auto ml-auto"
              alt=""
              src={
                activeElement === "element5"
                  ? "/images/icons8-minus-30.png"
                  : "/images/plus.png"
              }
            />
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element5"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-1 py-4">
            <strong>This is the fifth item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </TECollapse>
      </div>
      <div className="border-b border-[#D434FE]">
        <h2 className="accordion-header mb-0" id="headingSix">
          <button
            className={`${
              activeElement === "element6"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center gap-3 rounded-t-[15px] border-0 bg-transparent px-1 py-4 text-left transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
            type="button"
            onClick={() => handleClick("element6")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Can I work on a project I started before the hackathon?
            <img
              className="w-3 md:w-4 h-auto ml-auto"
              alt=""
              src={
                activeElement === "element6"
                  ? "/images/icons8-minus-30.png"
                  : "/images/plus.png"
              }
            />
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element6"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-1 py-4">
            <strong>This is the sisth item's accordion body.</strong>Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </div>
        </TECollapse>
      </div>
    </div>
  );
}

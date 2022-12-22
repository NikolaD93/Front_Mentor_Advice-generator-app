import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import patternDesktop from "../assets/pattern-divider-desktop.svg";
import patternMobile from "../assets/pattern-divider-mobile.svg";

const Card = () => {
  return (
    <div
      id="card"
      className="bg-neutral-darkGrayishBlue w-[90%] h-[350px] md:w-[500px] md:h-[300px] px-[20px] py-[40px] text-center rounded-xl shadow-xl"
    >
      <p className="mb-4 uppercase tracking-[4px] text-primary-neonGreen text-[14px]">
        Advice #117
      </p>
      <FontAwesomeIcon
        className="text-primary-lightCyan -translate-y-2"
        icon={faQuoteLeft}
      />
      <span className="text-[28px] font-[800] text-primary-lightCyan">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, modi.
      </span>
      <FontAwesomeIcon
        className="text-primary-lightCyan -translate-y-2"
        icon={faQuoteRight}
      />
      <img className="mt-6 hidden md:block" src={patternDesktop} alt="pattern-image" />
      <img className="mt-6 md:hidden mx-auto" src={patternMobile} alt="pattern-image" />
    </div>
  );
};

export default Card;

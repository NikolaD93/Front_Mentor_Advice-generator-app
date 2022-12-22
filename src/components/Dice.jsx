import React from "react";
import dice from "../assets/icon-dice.svg";

const Dice = () => {
  return (
    <div className="absolute left-[50%] -translate-x-[50%] -bottom-[28px] md:-bottom-[25px] bg-primary-neonGreen w-[65px] h-[65px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-[0_0_20px_1px_rgba(82,255,168,1)]">
      <img className="w-[25px] md:w-[20px]" src={dice} alt="dice" />
    </div>
  );
};

export default Dice;

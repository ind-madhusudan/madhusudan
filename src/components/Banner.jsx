import React from "react";
import TorchEffectText from "./TorchEffectText";

const Banner = () => {
  return (
    <>
      <div className="w-full px-4 ">
        {/* Horizontal line */}
        <hr className="w-full sm:w-[20rem] md:w-[30rem] lg:w-[40rem] border-t-2 border-[#6528F7] mx-auto" />

        {/* Centered heading */}
        <div className="flex items-center justify-center mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold leading-snug">
            Let's <span className="text-[#6F1AB6]">Create</span> an Amazing
            <br />
            Project <span className="text-[#6F1AB6]">Together</span>!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;

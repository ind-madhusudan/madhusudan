import React from "react";
import sql from "../assets/sql.png";
import python from "../assets/python.png";
import excel from "../assets/excel.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import react from "../assets/science.png";
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.png";

const About = () => {
  return (
    <>
      <section id="about" className="scroll-mt-8">
      <div className="w-full min-h-screen relative px-4 py-10 z-0 overflow-hidden">
        <p className="mb-4 font-semibold text-black text-xl sm:text-2xl">
          # ABOUT ME
        </p>

        {/* Background heading */}
        <h1 className="about-text absolute text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold text-black right-5 sm:right-20 top-10 sm:top-16 select-none z-0">
          About Me
        </h1>

        {/* Main block */}
        <div className="flex flex-col lg:flex-row relative">
          {/* Left Card */}
          <div className="w-[20rem] sm:w-[20rem] lg:w-[20rem] h-[20rem] lg:h-[20rem] bg-[#6F1AB6] mt-20 sm:mt-28 lg:ml-20 rounded-xl mx-auto relative z-30 ">


            <p className="font-bold text-[25rem]  absolute top-[-7rem] right-30 text-emerald-500 z-0 lg:top-[-8rem] lg:text-[28rem] ">
              7
            </p>

            <p className="font-bold text-9xl md:text-9xl text-emerald-500 left-38 top-40 sm:top-42 sm:text-[9rem] z-0 absolute  sm:left-[8rem] lg:text-[10rem] lg:top-[10rem] lg:left-[9rem]">
              2%
            </p>

            <h1 className="text-white font-semibold text-[2.8rem] sm:text-4xl md:text-5xl absolute rotate-[270deg] top-28 left-[-7rem] z-40 lg:top-[8.5rem] sm:top-[8.5rem]">
              Madhusudan
            </h1>

            <div className=" relative overflow-hidden">
              <p className="font-bold text-7xl sm:text-6xl md:text-7xl text-white ml-6 pt-6 z-40 left-35 relative">
                MCA
              </p>
            </div>

            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-white w-[10rem] absolute left-42 top-24 z-20 ">
              Session
              <br />
              2022-2024
            </p>
          </div>

          {/* About content */}
          <div className="mt-16 px-2 md:px-10 z-10">
            <p className="font-semibold text-xl sm:text-2xl">- About Me</p>
            <h1 className="font-semibold text-3xl sm:text-4xl mt-2">
              Who is{" "}
              <span className="text-[#6F1AB6] caveat text-4xl sm:text-5xl">
                Madhusudan?
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base max-w-lg">
              I’m a passionate Data Analyst and Full-Stack Developer skilled at
              turning data into actionable insights and building seamless web
              experiences. I focus on solving real-world problems through
              analytics and modern development tools.
            </p>

            {/* Tech icons */}
            <p className="font-semibold text-xl sm:text-2xl my-4">
              - Technologia 😂
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {[
                sql,
                python,
                excel,
                html,
                css,
                js,
                react,
                java,
                node,
                mongodb,
                express,
              ].map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  alt="tech"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              ))}
            </div>

            {/* CV Button */}
            <div className="mt-6 font-medium w-[20rem] bg-emerald-500 rounded-full flex flex-star gap-4 py-2">
              <button className="cursor-pointer">
                <span className="px-5 py-2 rounded-full  bg-[#6F1AB6] text-white hover:scale-105 transition duration-200">
                  GitHub
                </span>
              </button>

              <button className="cursor-pointer">
                <span className="px-14 py-2 rounded-full bg-emerald-500 text-white hover:scale-105 transition duration-200 ">
                  Download CV
                </span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;

import React from "react";
import profile from "../assets/profile.png";
import art1 from "../assets/art1.png";
import art2 from "../assets/art2.png";
import ig from "../assets/instagram.png";
import x from "../assets/twitter.png";
import git from "../assets/github-sign.png";
import linkedin from "../assets/linkedin.png";
import location from "../assets/location.png";
import { GoArrowRight } from "react-icons/go";
import logo from "../assets/sign_logo.png";
import cat from "../assets/cat.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-20">
      <div className="overflow-hidden w-full relative">
        {/* Hero Section */}
        <div className="bg-[#F1EAFF] h-[35rem] lg:h-[35rem] sm:h-[35rem] flex flex-col items-center relative sm:mt-[-4rem] lg:top-14">
          {/* Headline */}
          <div className="absolute top-15 md:top-20 lg:top-10 z-20 text-center px-4">
            <h1 className="text-5xl md:text-6xl sm:text-4xl lg:text-6xl font-bold lg:font-normal caveat leading-tight lg:leading-none sm:font-normal">
              I'm{" "}
              <span className="underline underline-offset-4 decoration-4 text-[#6F1AB6]">
                Madhusudan
              </span>
              , <br />A Data Analyst
            </h1>
          </div>

          {/* Profile Image */}
          <div className="relative z-10 mt-30 sm:mt-44 lg:mt-52 flex items-center justify-center overflow-visible">
            {/* Profile Wrapper with Border */}
            <div className="relative rounded-2xl bg-[#CDC1FF] p-6 overflow-visible lg:bg-transparent">
              {/* Art Image 1 – Positioned Right & Enlarged */}
              <img
                src={art1}
                alt="art1"
                className="absolute top-[14rem] right-[-6rem] w-[24rem] sm:w-[28rem] md:w-[32rem] z-1 lg:top-20 lg:mr-48"
              />

              {/* Art Image 2 – Positioned Left & Enlarged */}
              <img
                src={art2}
                alt="art2"
                className="absolute top-[3rem] left-[2rem] w-[24rem] sm:w-[28rem] md:w-[32rem] z-0 lg:w-[80rem] lg:left-40"
              />

              {/* Profile Image in center */}
              <img
                src={profile}
                alt="Profile"
                className="relative w-74 sm:w-56 md:w-64 lg:w-70 lg:bottom-30 z-10"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="absolute bottom-10 lg:bottom-10 z-20">
            <div className="bg-white w-[28rem] sm:w-[22rem] h-14 rounded-full flex items-center justify-center gap-4 px-4 shadow-md lg:mb-15 lg:w-[35rem]">
              <a
                className="flex items-center justify-center gap-2 bg-[#6F1AB6] hover:bg-green-400 text-white px-4 py-2 rounded-2xl text-sm sm:text-base"
                href="#"
              >
                GitHub
                <span className="w-6 h-6 bg-green-400 hover:bg-[#6F1AB6] flex items-center justify-center rounded-full">
                  <GoArrowRight />
                </span>
              </a>
              <a
                className="border border-[#6F1AB6] text-[#6F1AB6] hover:bg-[#6F1AB6] hover:text-white px-8 py-2 rounded-2xl text-sm sm:text-base"
                href="/madhusudan_resume.pdf"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Lottie Cat Animation */}
        <div className="hidden absolute top-[36rem] sm:top-[13.5rem] left-18 w-32 h-16 z-10 lg:top-[13.5rem] lg:block sm:block">
          <Lottie animationData={cat} loop={true} />
        </div>

        {/* Social & Signature - Only on Large Screens */}
        <div className="hidden flex-col gap-4 absolute top-[44rem] left-20 text-xl font-semibold z-10  -- lg:mx-14 lg:block lg:flex-row lg:top-80 lg:text-xl lg:font-semibold ml-30 lg:ml-0 sm:block sm:top-[20rem] sm:mx-[-3rem]">
          <h1 className="sm:text-lg">Connect with me on</h1> 
          <ul className="flex gap-4 lg:gap-2 lg:mt-2 lg:w-40 sm:w-35 sm:gap-2">
            <li>
              <a href="#">
                <img className="" src={ig} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="" src={x} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="" src={git} alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="" src={linkedin} alt="LinkedIn" />
              </a>
            </li>
          </ul>

          {/* Signature */}
          <img className="lg:w-50 mt-2 lg:mt-0 sm:w-35 sm:mt-0" src={logo} alt="signature" />

          {/* Location */}
          <div className="flex items-center gap-2 mt-2 lg:mt-0 sm:mt-0 ">
            <img className="w-5 sm:w-3" src={location} alt="Location" />
            <p className="sm:text-sm">Bengaluru</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

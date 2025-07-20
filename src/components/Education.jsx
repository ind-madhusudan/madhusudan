import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";
import Lottie from "lottie-react";
import education from "../assets/education.json";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-18">
    <div className="w-full min-h-scree relative overflow-hidden px-4 py-8 lg:pb-24">
      {/* Background text */}
      <div className="absolute z-0 text-3xl sm:text-4xl md:text-6xl lg:text-[6rem] right-0 left-0 top-4 font-bold text-black text-center opacity-10 select-none">
        Education & Work Experience
      </div>

      {/* Animation */}
      <div className="absolute opacity-20 z-0 top-24 -left-10 w-80">
        <Lottie animationData={education} loop={true} />
      </div>

      {/* Section header */}
      <h1 className="text-xl sm:text-2xl font-semibold text-black mb-8 relative z-10"># EDUCATION</h1>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="text-center mb-8">
          <p className="text-lg sm:text-xl font-semibold text-black">- Education & Work</p>
          <h1 className="text-2xl sm:text-4xl font-bold">
            My <span className="text-[#6F1AB6]">Education</span> &{" "}
            <span className="text-[#6F1AB6]">Work Experience</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center px-2">
          {/* Education Card */}
          <div className="bg-[#E5D4FF] rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center mb-2">
              <FaGraduationCap className="w-10 h-10 p-2 rounded-full bg-[#6F1AB6] text-white mr-3" />
              <h2 className="text-2xl font-semibold text-[#6F1AB6]">Education</h2>
            </div>
            <hr className="my-2 opacity-20" />
            {[
              {
                title: "Netaji Subhas University",
                subtitle: "Master of Computer Applications",
                duration: "2022 - 2024",
              },
              {
                title: "B.B.M.K. University",
                subtitle: "Bachelor of Science",
                duration: "2017 - 2020",
              },
              {
                title: "Jharkhand Academic Council",
                subtitle: "Intermediate of Science",
                duration: "2015 - 2017",
              },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
                <div className="bg-emerald-400 h-8 rounded-xl flex items-center font-semibold text-white px-4 text-[14px] whitespace-nowrap">

                  {item.duration}
                </div>
              </div>
            ))}
          </div>

          {/* Work Experience Card */}
          <div className="bg-[#E5D4FF] rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center mb-2">
              <FaBriefcase className="w-10 h-10 p-2 rounded-full bg-[#6F1AB6] text-white mr-3" />
              <h2 className="text-2xl font-semibold text-[#6F1AB6]">Work Experience</h2>
            </div>
            <hr className="my-2 opacity-20" />
            {[
              {
                title: "Nexus Info",
                subtitle: "Data Analyst",
                duration: "Oct - Dec 2024",
              },
              {
                title: "Brightcode Software Services",
                subtitle: "Frontend Developer",
                duration: "Mar - Aug 2024",
              },
              {
                title: "Ardent Computech Pvt. Ltd.",
                subtitle: "Full Stack Developer",
                duration: "Oct - Dec 2023",
              },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
                <div className="bg-emerald-400 h-8 rounded-xl flex items-center font-semibold text-white px-3 text-sm whitespace-nowrap">
                  {item.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Education;

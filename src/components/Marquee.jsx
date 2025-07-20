import React from "react";
import Marquee from "react-fast-marquee";

const MyMarquee = () => {
  const techStack = [
    "Excel",
    "Power BI",
    "SQL",
    "Python",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Seaborn",
  ];

  return (
    <div className="bg-emerald-500 py-3 bottom-8 relative z-10">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        {techStack.map((item, index) => (
          <span
            key={index}
            className="mx-10  sm:mx-16 md:mx-20 text-base sm:text-lg md:text-xl font-semibold text-white whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MyMarquee;

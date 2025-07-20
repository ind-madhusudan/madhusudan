import React from "react";
import TorchEffectText from "./TorchEffectText";

const CapsuleText = () => {
  const capsules = [
    { text: "Dashboard Creation", color: "bg-emerald-400", rotate: "rotate-6" },
    { text: "Data Visualization", color: "bg-emerald-400" },
    { text: "Prototype", color: "bg-[#B2A5FF]", rotate: "-rotate-6" },
    { text: "Responsive Websites", color: "bg-[#B2A5FF]" },
    { text: "JavaScript", color: "bg-emerald-400" },
    { text: "HTML", color: "bg-emerald-400" },
    { text: "Authentication", color: "bg-[#B2A5FF]", rotate: "-rotate-12" },
    { text: "Website", color: "bg-[#B2A5FF]" },
    { text: "Frontend Development", color: "bg-[#B2A5FF]", rotate: "rotate-12" },
    { text: "UI / UX", color: "bg-[#B2A5FF]" },
    { text: "Landing Page", color: "bg-emerald-400" },
    { text: "Optimization", color: "bg-emerald-400", rotate: "-rotate-90" },
    { text: "GitHub", color: "bg-emerald-400", rotate: "-rotate-45" },
    { text: "MongoDB", color: "bg-[#B2A5FF]" },
    { text: "Backend", color: "bg-[#B2A5FF]" },
  ];

  return (
    <div className="relative py-10 px-4">
    <div>
      <p className="font-semibold text-emerald-400 text-[1.2rem]"># LINE THAT KEEPS ME ALIVE</p>
    </div>
      {/* Torch Text */}
      <div className=" text-center">
        <TorchEffectText />
      </div>

      {/* Capsules */}
      <div className="lg:flex lg:flex-wrap justify-center gap-4 hidden">
        {capsules.map((item, index) => (
          <p
            key={index}
            className={`text-sm sm:text-base hidden px-4 py-2 font-semibold text-white rounded-full ${item.color} ${
              item.rotate || ""
            }`}
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CapsuleText;

import React from "react";
import data from "../assets/data.png";
import web from "../assets/web.png";
import ui from "../assets/web-design.png";
import logo from "../assets/logo-design.png";

const Services = () => {
  return (
    <section id="services" className="scroll-mt-3">
    <div className="w-full bg-[#6F1AB6] text-white py-12 px-4 bottom-8 relative">
      {/* Background text */}
      <h1 className="absolute text-[4rem] sm:text-[6rem] lg:text-[12rem] font-bold opacity-10 text-white left-1/2 -translate-x-1/2 top-0 z-0 select-none">
        Services
      </h1>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="font-semibold text-emerald-400 mb-2 text-lg"># SERVICES</h2>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Best Services.</p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            { title: "Data Analysis", img: data },
            { title: "UI/UX Design", img: ui },
            { title: "Website Design", img: web },
            { title: "Logo Design", img: logo },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-[#b611e8] hover:bg-emerald-400 transition-all rounded-xl shadow-lg"
            >
              <img src={service.img} alt={service.title} className="w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi sapiente inventore iusto, odio quaerat obcaecati.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;

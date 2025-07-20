import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "PulseCure",
      description:
        "A doctor booking platform built using MERN stack with authentication and scheduling features.",
      link: "https://pulsecure-demo.vercel.app/",
    },
    {
      title: "Pink Panchayat",
      description:
        "A platform for Anganwadi women to access government updates and PDFs. Includes admin dashboard.",
      link: "https://pinkpanchayat.vercel.app/",
    },
    {
      title: "URL Shortener",
      description:
        "A modern, lightweight URL shortener using Node.js, React, and MongoDB with analytics support.",
      link: "https://your-url-shortener-link.vercel.app/",
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="scroll-mt-20">
    <div className="w-full text-black px-4 py-16 lg:py-0 lg:pb-16 " id="projects">
      <h2 className="text-xl sm:text-2xl text-emerald-500 font-semibold mb-2"># PROJECTS</h2>
      <h1 className="text-3xl sm:text-4xl font-bold mb-10">Things I've Built</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {projectList.map((project, index) => (
          <div
            key={index}
            className=" border  border-[#6F1AB6] rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 "
          >
            <h3 className="text-xl font-bold text-[#6F1AB6] mb-2">{project.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-full text-sm hover:bg-[#6F1AB6] transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;

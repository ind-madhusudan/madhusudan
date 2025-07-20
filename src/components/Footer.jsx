import React from "react";
import idea from "../assets/idea.json";
import Lottie from "lottie-react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import ContactUs from "./ContactUs";
import ig from "../assets/instagram.png";
import x from "../assets/twitter.png";
import git from "../assets/github-sign.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <section id="contacts" className="scroll-mt-5">
      <div className="bg-[#6F1AB6] text-white px-4 py-12">
        {/* Section Label */}
        <p className="font-semibold text-emerald-400 text-lg"># CONTACT ME</p>

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-6 sm:px-4 lg:px-10  ">
          {/* Left - Message + Animation + Details */}
          <div className="flex-1">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Have an <span className="text-emerald-400">Idea,</span> <br />
                Let's <span className="text-emerald-400">Implement</span> This
                Together
              </h1>
              <div className="w-40 sm:w-56 mt-4 mx-auto lg:mx-0">
                <Lottie animationData={idea} loop={true} />
              </div>
            </div>

            <div className="mt-6 flex flex-col px-4 gap-4 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <FaPhoneVolume />
                <p>+91-8709842458</p>
              </div>
              <div className="flex items-center gap-3">
                <MdMarkEmailRead />
                <p>ind.madhusudan20@gmail.com</p>
              </div>
              <div className="">
                <ul className="flex gap-3 w-50 lg:gap-3 lg:mt-2 lg:w-50 sm:w-45 sm:gap-2 ">
                  <li>
                    <a href="#">
                      <div className="bg-white rounded-full p-2">
                        <img className="" src={ig} alt="Instagram" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="bg-white rounded-full p-2">
                        <img className="" src={x} alt="Twitter" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="bg-white rounded-full p-2">
                        <img className="" src={git} alt="GitHub" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="bg-white rounded-full p-2">
                        <img className="" src={linkedin} alt="LinkedIn" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="px-4 lg:w-[40rem] lg:px-0">
            <ContactUs />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-4">
          <hr className="opacity-30" />
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Designed & Developed by Madhusudan |
          </p>
          <div className="flex gap-3 mt-1">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

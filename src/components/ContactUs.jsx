import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 👇 Use environment variables from .env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("ENV - SERVICE ID:", serviceID);
    console.log("ENV - TEMPLATE ID:", templateID);
    console.log("ENV - PUBLIC KEY:", publicKey);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        // console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset(); // Reset form
      },
      (error) => {
        // console.log(error.text);
        console.error("EMAILJS ERROR:", error);
        alert("Failed to send message. Try again later.");
      }
    );
  };

  return (
    <div className="flex-1">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white rounded-xl p-6 text-black shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-[#6F1AB6]">
          Send me a message
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6F1AB6]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6F1AB6]"
            required
          />
          <textarea
            name="message"
            placeholder="message"
            rows="4"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6F1AB6]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#6F1AB6] text-white py-2 rounded-md font-semibold hover:bg-emerald-500 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;

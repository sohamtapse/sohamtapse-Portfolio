"use client";
import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const text = "Let's Connect";
const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-6">
        {/* Left text */}
        <div className=" hidden h-1/2 lg:h-full lg:w-1/2 lg:flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center lg:text-left">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.3 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full h-full lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-base sm:text-lg md:text-xl flex flex-col gap-6 sm:gap-8 justify-center p-6 sm:p-10 md:p-16 lg:p-24"
        >
          <span>Dear Soham Tapse,</span>
          <textarea
            placeholder="your name and message"
            required
            className="bg-transparent border-b-2 border-b-black outline-none resize-none h-64 sm:h-72 md:h-80"
            name="user_message"
          />
          <span>Your mail address is:</span>
          <input
            name="user_email"
            required
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold text-sm sm:text-base">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-sm sm:text-base">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;

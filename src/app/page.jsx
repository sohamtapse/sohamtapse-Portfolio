"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/soham.png" alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex lg:gap-10 flex-col gap-6 items-center justify-center">
          <h1 className="text-3xl md:text-6xl font-bold">
            Crafting AI Solutions using{" "}
            <span className="inline-block ">
              <Typewriter
                options={{
                  strings: [
                    "NextJs.",
                    "LangChain.",
                    "ReactJs.",
                    "NodeJs.",
                    "FastApi.",
                    "RAG.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="text-base md:text-2xl">
            {`I'm Soham Tapse, a Computer Engineering student passionate about
            backend development, AI, using full-stack solutions. With hands-on
            experience as a Full Stack Intern.`}
          </p>

          <div className="flex w-full gap-4 text-sm md:text-2xl">
            <button className="p-2 lg:p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-2 lg:p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

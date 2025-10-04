"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { IoChatbubblesOutline } from "react-icons/io5";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className=" h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.div
          className=" fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-5xl md:text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className=" h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>

        {/* Floating Chat Icon */}
        <button className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
          <a href="/chat">
            <IoChatbubblesOutline size={24} />
          </a>
        </button>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

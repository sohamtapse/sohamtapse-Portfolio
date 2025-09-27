"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { motion, stagger } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      <div className=" hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-lg p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 pl-1">Soham</span>
          <span className="w-12 h-6 bg-white text-black rounded px-1 flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://github.com/sohamtapse/" target="_blank">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/soham-tapse-03993126b/"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/soham.tapse/" target="_blank">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-6 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>
        {open && (
          <>
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute  top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              <div className="flex flex-col  items-center justify-center gap-8">
                {links.map((link) => (
                  <motion.div key={link.title} variants={listItemVariants}>
                    <Link href={link.url} onClick={() => setOpen(!open)}>
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={listItemVariants}
                className="gap-4  flex items-center justify-center"
              >
                <Link
                  href="https://github.com/sohamtapse/"
                  target="_blank"
                  className="text-white bg-white rounded-full "
                >
                  <Image
                    src="/github.png"
                    alt="github"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/soham-tapse-03993126b/"
                  target="_blank"
                >
                  <Image
                    src="/linkedin.png"
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/soham.tapse/"
                  target="_blank"
                >
                  <Image
                    src="/instagram.png"
                    alt="insta"
                    width={24}
                    height={24}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

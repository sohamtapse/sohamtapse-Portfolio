"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "PrepMelon",
    desc: "Developed an AI-driven interview platform providing mock sessions, personalized feedback, and real-time performance insights using Next.js, Tailwind CSS, Gemini API, Firebase, and Vapi AI for voice assistance.",
    img: "/Projects/PrepMelon.png",
    link: "https://prepmeleon.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "GoJob",
    desc: "A web app / platform for job-/gig-management built with modern stack. Technologies: Next.js (TypeScript),PostgresSQL, Prisma ORM, Next Auth, Tailwind css",
    img: "/Projects/GoJob.png",
    link: "https://go-job-one.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "RealTime-ChatRoom",
    desc: "Created a real-time chat application allowing users to create rooms, chat live, and utilize AI for generating file structures of backend and frontend with proper codes using MERN stack. Also supports deployment on the spot. Technologies: React.js, io.sockets, Tailwind CSS, Node.js, Express, MongoDB, JWT, Web Containers, Gemini API",
    img: "/Projects/RealTime-ChatRoom.jpeg",
    link: "https://github.com/sohamtapse/Real_TimeChatRoom_AIGemini",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "StudyPal",
    desc: "Ai pawerd summary maker make student life easer using next.js talwind css and of ai Gemini ai.",
    img: "/Projects/StudyPal.png",
    link: "https://study-pal-umber.vercel.app/dashboard",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "LearnNova",
    desc: "Developed a system using a LangChain-powered RAG pipeline to evaluate student assignments by comparing their answers to teacher-provided solutions, featuring RAG Model, LangChain, FastAPI, React.js, Tailwind CSS, Firebase",
    img: "/Projects/LearnNova.png",
    link: "https://github.com/sohamtapse/LearnNova",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center relative">
          {/* Title centered */}
          <h1 className="text-5xl lg:text-8xl text-center font-bold">
            My Projects
          </h1>

          {/* Animated SVG at bottom */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            className="absolute bottom-10 stroke-black"
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              strokeWidth="1"
            />
            <path d="M12 6V14" strokeWidth="1" />
            <path d="M15 11L12 14L9 11" strokeWidth="1" />
          </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* Black background for all items */}
            <div className="h-screen w-screen flex items-center justify-center bg-black" />

            {items.map((item) => (
              <div
                key={item.id}
                className="h-screen w-screen  flex items-center justify-center bg-black py-20 min-w-[100vw]"
              >
                {/* Card container */}
                <div
                  className={`flex flex-col gap-8 h-[650px] text-black rounded-2xl shadow-2xl bg-gradient-to-r ${item.color} p-8 lg:p-12 w-full md:max-w-6xl mx-20`}
                >
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>

                  <div className="flex flex-col lg:flex-row gap-9">
                    <div className="relative w-full h-52 md:w-96 md:h-64 lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[420px] border border-black rounded-lg">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className=" rounded-lg"
                      />
                    </div>

                    {/* ✅ updated: added flex & justify-between */}
                    <div className="w-1/3 flex flex-col justify-between">
                      <p className="w-80 lg:w-full lg:text-lg">{item.desc}</p>
                      <Link href={item.link} target="_blank" className="pt-5">
                        <button className="px-2 py-1 lg:px-6 lg:py-3 text-lg bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition">
                          See Demo
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-black" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl lg:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Dev an Ai engg
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center lg:text-2xl"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages([...messages, { user: input, bot: data.answer }]);
    setInput("");
  };

  // Scroll to bottom when new message added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <motion.div className="h-full w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-6">
      {/* Chatbox */}
      <div className="w-full  bg-gray-50 rounded-xl flex flex-col p-6 sm:p-10 md:p-16 lg:p-24 h-[80vh]">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 border-b pb-4">
          {messages.map((m, i) => (
            <div key={i}>
              <p>
                <b>You:</b> {m.user}
              </p>
              <p>
                <b>AI:</b> {m.bot}
              </p>
              <hr className="my-2 border-gray-300" />
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about soham ...."
            className="flex-1 border-b-2 border-black bg-transparent outline-none px-3 py-2 w-full"
          />
          <button
            onClick={sendMessage}
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full md:w-36 mx-5"
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}

"use client";
import { useState } from "react";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

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

  return (
    <div className="p-4 max-w-lg mx-auto space-y-4">
      <div className="border p-3 rounded-md h-80 overflow-y-auto bg-gray-50">
        {messages.map((m, i) => (
          <div key={i}>
            <p>
              <b>You:</b> {m.user}
            </p>
            <p>
              <b>AI:</b> {m.bot}
            </p>
            <hr />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 border rounded-md px-3 py-2"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { useAuthStore } from "../stores/AuthStore.js"; 

// Backend Connection 
const socket = io(import.meta.env.VITE_API_URL);

export default function Message({ isOpen, onClose }) {
  const user = useAuthStore((state) => state.user);
  const [messages, setMessages] = useState([]); 
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Old & Live Message
  useEffect(() => {
    // DB- Load Old Message
    socket.on("load_old_messages", (oldMessages) => {
      setMessages(oldMessages);
    });

    // new message on add db
    socket.on("receive_message", (newMsg) => {
      setMessages((prev) => [...prev, newMsg]);
    });

    // Clean up
    return () => {
      socket.off("load_old_messages");
      socket.off("receive_message");
    };
  }, []);

  // Auto Scroll 
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 10);
  }, [messages, isOpen]);

  if (!isOpen) return null;

  // send message logic & time 
  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: Date.now(),
        user: user?.name || "Kalai",  
        text: input,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      socket.emit("send_message", newMessage); // Send To Server
      setMessages((prev) => [...prev, newMessage]); // Show Sender Screen
      setInput(""); // Clean the input Box
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex flex-col text-white animate-in slide-in-from-bottom duration-300">
      
      {/* HEADER */}
      <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-800 bg-[#111217]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-black shadow-lg shadow-cyan-500/20">
            GP
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Studio Sync Group</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Team Online</span>
            </div>
          </div>
        </div>

        <button onClick={onClose} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-900 hover:bg-red-700 hover:text-white rounded-xl transition-all text-xl border border-gray-800">
          ✕
        </button>
      </div>

      {/* MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#0a0a0a] scrollbar-hide">
        {messages.length === 0 ? (
          <div className="flex justify-center items-center h-full text-gray-500 text-sm">
            No messages yet. Start the conversation! 🚀
          </div>
        ) : (
          messages.map((msg) => {
            // Live msg & Loaded Msg Different Id
            const uniqueKey = msg._id || msg.id; 
            const isMe = msg.user === user?.name; 

            return (
              <div key={uniqueKey} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                
                {/* Name & Time */}
                <div className="flex items-center gap-2 mb-1 px-1">
                  {!isMe && <span className="text-[10px] font-bold text-cyan-400 uppercase">{msg.user}</span>}
                  <span className="text-[9px] text-gray-500 font-medium">{msg.time}</span>
                </div>

                {/* Bubble */}
                <div className={`max-w-[85%] md:max-w-[60%] p-3 sm:p-4 rounded-2xl text-sm sm:text-base leading-relaxed ${
                  isMe
                    ? "bg-cyan-500 text-black font-semibold rounded-tr-none shadow-md shadow-cyan-500/10"
                    : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700 shadow-md"
                }`}>
                  {msg.text}
                </div>
              </div>
            );
          })
        )}
        {/*Scroll & Space 👇 */}
        <div ref={scrollRef} className="h-4 w-full shrink-0" />
      </div>

      {/* INPUT AREA */}
      <div className="p-4 sm:p-6 bg-[#111217] border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-gray-900 border border-gray-800 rounded-full px-5 py-3 outline-none focus:border-cyan-500/50 transition-all text-sm sm:text-base text-white"
          />
          <button
            onClick={handleSend}
            className="bg-cyan-500 hover:bg-cyan-400 text-black w-12 h-12 sm:w-14 sm:h-14 rounded-full flex shrink-0 items-center justify-center transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
          >
            <span className="text-lg sm:text-xl">🚀</span>
          </button>
        </div>
      </div>

    </div>
  );
}
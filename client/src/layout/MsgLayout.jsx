import {TbMessageCircleHeart } from "react-icons/tb"
import Message from "./Message";
import React, { useState } from "react";

export default function MsgLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TbMessageCircleHeart
        className="bg-transparent border-none outline-none text-[#19e083]  hover:scale-110   transition-all  duration-300  right-8 bottom-10
absolute md:right-10 drop-shadow-[0_0_12px_rgba(94,234,212,0.5)]  hover:drop-shadow-[0_0_25px_rgba(94,234,212,0.9)]"
        size={110}
        onClick={() => setIsOpen(true)}
      />
      <Message isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

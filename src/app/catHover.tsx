"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CatHover() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="fixed top-5 right-5 group cursor-pointer">
      <motion.img
        src={hovered ? "/cat-lol-svgrepo-com.svg" : "/cat-satisfied-svgrepo-com.svg"}
        alt="Cat"
        className="w-20 h-20 text-pink-800"
        style={{ filter: 'invert(43%) sepia(44%) saturate(497%) hue-rotate(244deg) brightness(95%) contrast(88%)' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          const el = document.getElementById("hero"); // or first section id
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <span className="absolute right-5 w-max px-3 py-1 rounded-lg bg-pink-100 text-sm text-purple-950/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Pet me to go back up! Meow~
      </span>
    </div>
  );
}
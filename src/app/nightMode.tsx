"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, light] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <div className="fixed top-6 left-5 group cursor-pointer">
      <motion.img
        src={hovered? "/moon.svg" : "/sun.svg"}
        alt="Mode Toggle"
        className="w-11 h-11 text-pink-800"
        style={{ filter: 'invert(43%) sepia(44%) saturate(497%) hue-rotate(244deg) brightness(95%) contrast(88%)' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      {/* Tooltip */}
      {hovered && (
        <span className="absolute top-16 -translate-y-1/2 px-3 py-1 rounded-lg bg-pink-100 text-sm text-purple-950/70 whitespace-nowrap shadow transition-opacity duration-200">
          Feature coming soon! ✨
        </span>
      )}
    </div>
  );
}
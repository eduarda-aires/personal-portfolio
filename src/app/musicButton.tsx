"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function MusicButton() {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1;
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <button
    onClick={togglePlay}
    className="fixed top-5 left-20 p-2"
    >
    <motion.img
        src={hovered ? "/music-on.svg" : "/music-off.svg"}
        alt="Music Note"
        className="w-10 h-10 cursor-pointer"
        style={{
        filter:
            "invert(43%) sepia(44%) saturate(497%) hue-rotate(244deg) brightness(95%) contrast(88%)",
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </button>
  );
}

"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "Tailwind", logo: "/logos/tailwind.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "Dart", logo: "/logos/dart.svg" },
  { name: "Flutter", logo: "/logos/flutter.svg" },
  { name: "Git", logo: "/logos/github.svg" },
];

export default function LogoLoop() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-10 bg-purple-50 text-center relative">
      <h2 className="text-3xl font-semibold text-purple-900/70 mb-6">Skills</h2>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, // 
          ease: "linear",
        }}
        className="flex gap-20"
      >
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="group h-20 w-20 flex flex-col items-center justify-center rounded-full bg-purple-100/80 shadow-md shadow-purple-200 flex-shrink-0 mx-auto relative"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-12 w-12 object-contain"
            />
            {/* Hover label */}
            <span className="absolute -bottom-8 text-sm text-purple-700/50 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

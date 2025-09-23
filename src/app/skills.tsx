"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Git", logo: "/logos/github.svg" },
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
];

export default function LogoLoop() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen whitespace-nowrap py-10 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 text-center">
      <h2 className="text-3xl font-semibold text-center text-purple-950/50 mb-6">
        Skills & Technologies
      </h2>

      {/* Logo loop */}
      <div className="relative w-full overflow-hidden py-10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 40, // Slower duration for smoother loop
            ease: "linear",
          }}
          className="flex gap-20 justify-center items-center"
        >
          {[...skills, ...skills].map((skill, i) => ( // Only duplicate once instead of three times
            <motion.div
              key={i}
              className="group h-30 w-30 flex flex-col items-center justify-center rounded-full bg-white shadow-md shadow-purple-200 flex-shrink-0 mx-auto relative"
              animate={{ y: [0, -5, 0], rotate: [0, -1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3 + (i % skills.length) * 0.3,
                ease: "easeInOut",
              }}
            >
              <img src={skill.logo} alt={skill.name} className="h-12 w-12 object-contain scale-130 filter brightness-90 contrast-100 opacity-90" />
              <span className="absolute -bottom-8 text-sm text-purple-900/50 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Fade edges*/}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-purple-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-purple-50 to-transparent z-20 pointer-events-none" />
      </div>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        //animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto bg-white/80 rounded-2xl p-10 shadow-md shadow-purple-200 text-center"
      >
        <h2 className="text-3xl font-semibold text-purple-950/50">About Me</h2>
        <p className="mt-4 text-gray-700/80">
          I'm an aspiring Software Developer with a passion for front-end development,
          particularly in creating interactive user experiences. 
          When I'm not coding, you can find me exploring new boba cafes, petting my cats, or indulging in my favorite games. 🎮
        </p>
        <p className="mt-4 text-gray-700/80">
          If you'd like to know more about me, feel free to click the button below!
        </p>
        <button className="mt-6 rounded-full bg-purple-200 px-4 py-2 text-purple-900/60 shadow-md hover:bg-purple-300 transition">
          Tell me more! 
        </button>
      </motion.div>
    </section>
  );
}


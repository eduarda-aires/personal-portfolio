"input client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="hero" className="snap-start flex flex-col items-center justify-center h-screen text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
        className="max-w-md mx-auto bg-white/80 rounded-2xl p-8 shadow-lg text-center"
      >
        <h1 className="text-4xl font-bold text-purple-950/50">Hi, I'm Aires</h1>
        <p className="mt-2 text-gray-600">Frontend developer & cat enthusiast 🐈</p>
      </motion.div>
            <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 max-w-xl text-violet-950/80 text-lg"
      >
        A cozy developer who loves crafting cute & creative web experiences 🌸
      </motion.p>
    </section>
    );
}
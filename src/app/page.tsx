"use client";

import { motion } from "framer-motion";
import CatHover from "./catHover";
import MusicButton from "./musicButton";


export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-800 relative">
  {/* Floating Cat */}

  <div className="fixed top-5 right-5 group cursor-pointer">
    <CatHover />
  </div>

  {/* Music Control Button */}
  <div className="fixed top-5 left-5">
    {/* @ts-ignore */}
    <MusicButton />
  </div>
  

    {/* Hero Section */}
    <section className="flex flex-col items-center justify-center h-screen text-center px-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="max-w-md mx-auto bg-white/80 rounded-2xl p-8 shadow-lg text-center"
      >
        <h1 className="text-4xl font-bold text-purple-950/50">Hi, I'm Aires</h1>
        <p className="mt-2 text-gray-600">Frontend developer & cat enthusiast 🐈</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 max-w-xl text-violet-950/80 text-lg"
      >
        A cozy developer who loves crafting cute & creative web experiences 🌸
      </motion.p>
    </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-pink-700">About Me</h2>
          <p className="mt-4 text-gray-700">
            I'm an aspiring Software Developer with a passion for front-end development,
            particularly in creating interactive user experiences. 
            I'm currently expanding my skillset in React through personal projects that align with my interests!
          </p>
          <p className="mt-4 text-gray-700">
            When I'm not coding, you can find me exploring new boba cafes, petting my cats, or indulging in my favorite games. 🎮
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-purple-700">Skills</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {['React', 'HTML', 'CSS', 'Tailwind'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-purple-50/70 p-6 shadow-md shadow-purple-200 text-center"
              >
                <h3 className="text-xl font-semibold text-purple-800">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-purple-700">Projects</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-pink-50 p-6 shadow-md shadow-pink-200 text-left"
              >
                <h3 className="text-xl font-semibold text-pink-800">
                  🌸 Project {project}
                </h3>
                <p className="mt-2 text-pink-700">
                  A cozy little project description goes here.
                </p>
                <button className="mt-4 rounded-xl bg-pink-300 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-400 transition">
                  View Project
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white/70 text-center">
        <h2 className="text-3xl font-semibold text-purple-700">Let’s Connect!</h2>
        <p className="mt-4 text-gray-700">
          I’d love to chat over a virtual coffee ☕. Reach out to me via email
          or socials!
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:your@email.com"
            className="rounded-xl bg-purple-300 px-4 py-2 font-medium text-purple-900 hover:bg-purple-400 transition"
          >
            Email Me
          </a>
          <a
            href="#"
            className="rounded-xl bg-pink-300 px-4 py-2 font-medium text-pink-900 hover:bg-pink-400 transition"
          >
            Twitter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} aires. Made with 💜
      </footer>
    </main>
  );
}

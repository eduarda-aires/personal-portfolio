"use client";

import { motion } from "framer-motion";
import CatHover from "./catHover";
import MusicButton from "./musicButton";
import DarkModeToggle from "./nightMode";
import SkillsSection from "./skills";
import AboutSection from "./aboutme";
import ScrollSpy from "./scrollspy";


export default function PortfolioPage() {
  const sections = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    //{ id: "education", label: "Education & Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-800 relative">
      
    {/* Scroll Spy */}
    <ScrollSpy sections={sections} />

    {/* Floating Cat */}

    <div className="fixed top-5 right-5 group cursor-pointer">
      <CatHover />
    </div>

    {/* Music Control Button */}
    <div className="fixed top-5 left-5">
      {/* @ts-ignore */}
      <MusicButton />
    </div>

    {/* Dark Mode Toggle */}
    <div className="fixed top-5 left-20">
      <DarkModeToggle />
    </div>

    {/* Hero Section */}
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center px-6">
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

    {/* About Section */}
    <section id="about">
    <AboutSection />
    </section>

    {/* Skills Section */}
    <section id="skills">
    <SkillsSection />
    </section>

    {/* Projects Section */}
    <section id="projects" className="py-20 px-6">
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

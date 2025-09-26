"use client";

import { motion } from "framer-motion";
import CatHover from "./catHover";
import MusicButton from "./musicButton";
import DarkModeToggle from "./nightMode";
import SkillsSection from "./skills";
import AboutSection from "./aboutme";
import ScrollSpy from "./scrollspy";
import ProjectsSection from "./projects";
import ContactSection from "./contact";
import HeroSection from "./hero";


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
    <main className="overflow-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-y snap-mandatory h-screen overflow-y-scroll bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-800 relative">
      
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
    <HeroSection/>

    {/* About Section */}
    <section id="about" className="snap-start h-screen flex items-center justify-center">
      <AboutSection />
    </section>

    {/* Skills Section */}
    <section id="skills" className="snap-start h-screen">
      <SkillsSection />
    </section>

    {/* Projects Section */}
    <section id="projects" className="snap-start h-screen flex items-center justify-center">
      <ProjectsSection/>
    </section>

    {/* Contact Section */}
    <section id="contact" className="snap-start h-screen flex flex-col items-center justify-center">
      <ContactSection/>
    <footer className="py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} aires. Made with 💜
    </footer>
    </section>

    </main>
  );
}

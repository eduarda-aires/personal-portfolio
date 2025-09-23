"input client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
    const projects = [
        {
            title: "🌸 Personal Portfolio",
            description: "My cozy little corner - a portfolio website I built for myself. A fun project to showcase my skills and love for this field!",
            link: "https://github.com/eduarda-aires/personal-portfolio",
        },
        {
            title: "🌿 Ruralia",
            description: "A mobile app designed to gamify rural tourism. Built as a final project for my Software Engineering course, as a team. My role was mostly on the front-end, and it showed me the power of teamwork!",
            link: "https://github.com/Betolas9/RURALIA-Final-Project",
        },
        {
            title: "🧙‍♀️ Cosplay Planner",
            description: "A web app I created to help me organize my cosplay projects a little better. It was my first time using React, and it helped me understand components and state management.",
            link: "https://github.com/eduarda-aires/cosplanner",
        },
    ];
  return (
    <section id="projects" className="snap-start h-screen flex items-center justify-center">
    <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-purple-950/50">Projects</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((projects,i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-white p-6 shadow-md shadow-pink-200 text-left"
            >
                <h3 className="text-xl font-semibold text-pink-950/80">
                {projects.title}
                </h3>
                <p className="mt-2 text-pink-900/80">
                {projects.description}
                </p>
                <div className="relative inline-block group">
                <button
                    className="mt-4 rounded-xl bg-pink-700/20 px-4 py-2 text-sm font-medium text-pink-900/80 hover:bg-pink-700/40 transition"
                    onClick={() => window.open(projects.link, "_blank")}
                >
                    View Project
                </button>
                {/* Tooltip */}
                <span className="absolute top-full mb-2 left-1/2 -translate-x-1/2 
                                bg-pink-950/50 text-white text-xs rounded py-1 px-2 
                                opacity-0 group-hover:opacity-100 transition-opacity 
                                pointer-events-none whitespace-nowrap">
                    You'll be redirected to GitHub!
                </span>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    </section>
    );
}
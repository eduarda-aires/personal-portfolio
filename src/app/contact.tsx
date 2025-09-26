"input client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-white/70 text-center">
            <h2 className="text-3xl font-semibold text-purple-900/70">Let’s Connect!</h2>
            <p className="mt-4 text-gray-700">
            I’d love to chat over a virtual iced coffee ☕. 
            Reach out to me via email, LinkedIn or Github! 
            </p>
            
            <div className="mt-6 flex justify-center gap-4">
            <a
                href="mailto:"
                className="rounded-xl bg-purple-300/50 px-4 py-2 font-medium text-purple-950/60 hover:bg-purple-300 transition"
            >
                Email Me
            </a>
            <a
                href="https://www.linkedin.com/in/eduarda-aires/"
                className="rounded-xl bg-pink-300/50 px-4 py-2 font-medium text-pink-900/60 hover:bg-pink-300 transition"
            >
                Linkedin
            </a>
            <a
                href="https://github.com/eduarda-aires"
                className="rounded-xl bg-violet-300/50 px-4 py-2 font-medium text-violet-900/60 hover:bg-violet-300 transition"
            >
                GitHub
            </a>
            </div>
        </section>
  );
}
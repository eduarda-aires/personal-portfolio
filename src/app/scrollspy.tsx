"input client";

import { useEffect, useState } from "react";

interface ScrollSpyProps {
    sections: { id: string; label: string }[];
}

export default function ScrollSpy({ sections }: ScrollSpyProps) {
    const [activeSection, setActiveSection] = useState<string>("");
    
    // detect which section is in view:
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible = active
    );

    sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);
    
  // Smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`h-3 w-3 rounded-full transition-all ${
            activeSection === section.id
              ? "bg-pink-950/50 scale-125"
              : "bg-purple-800/30 hover:bg-pink-800/50 hover:scale-110"
          }`}
        >
          <span className="sr-only">{section.label}</span>
        </button>
      ))}
    </div>
  );
}

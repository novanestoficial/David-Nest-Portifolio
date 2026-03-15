import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Github } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-sm text-foreground">
          <Code2 className="w-5 h-5 text-primary" />
          <span>david.portfolio</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Projetos
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Sobre
          </a>
          <a href="#socials" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Social
          </a>
          <a
            href="https://github.com/novanestoficial?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center px-4 pt-16">
    <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-sm text-accent mb-4">// backend developer</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
          Construindo{" "}
          <span className="text-gradient">sistemas robustos</span>{" "}
          com Java
        </h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-md">
          Desenvolvedor backend focado em criar APIs escaláveis, microserviços e soluções enterprise com o ecossistema Java.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Ver Projetos
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#socials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-display text-sm hover:bg-card transition-colors duration-200"
          >
            Redes Sociais
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <TerminalWindow />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

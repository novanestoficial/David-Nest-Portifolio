import { motion } from "framer-motion";
import { Code2, Database, Server, Container } from "lucide-react";

const skills = [
  { name: "Java 17+", icon: <Code2 className="w-5 h-5" /> },
  { name: "Spring Boot", icon: <Server className="w-5 h-5" /> },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
  { name: "Docker", icon: <Container className="w-5 h-5" /> },
  { name: "REST APIs", icon: <Server className="w-5 h-5" /> },
  { name: "Microservices", icon: <Code2 className="w-5 h-5" /> },
];

const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-display mb-2">
          <span className="text-primary">&gt;</span> sobre
        </h2>
        <p className="text-muted-foreground text-sm">Stack e habilidades</p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -2 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
          >
            {skill.icon}
            <span className="text-xs font-display">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

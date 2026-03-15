import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Database, Server, Container } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  repoUrl: string;
  status: "live" | "dev" | "archived";
}

const sampleProjects: Project[] = [
  {
    name: "api-gateway-service",
    description: "API Gateway com Spring Cloud para gerenciamento de microserviços com rate limiting e autenticação JWT.",
    tech: ["Java", "Spring Boot", "Docker"],
    repoUrl: "https://github.com",
    status: "live",
  },
  {
    name: "inventory-management",
    description: "Sistema de gerenciamento de inventário com REST API completa e integração com PostgreSQL.",
    tech: ["Java", "Spring Data", "PostgreSQL"],
    repoUrl: "https://github.com",
    status: "live",
  },
  {
    name: "auth-microservice",
    description: "Microserviço de autenticação e autorização com OAuth2 e JWT tokens.",
    tech: ["Java", "Spring Security", "Redis"],
    repoUrl: "https://github.com",
    status: "dev",
  },
  {
    name: "notification-service",
    description: "Serviço de notificações assíncronas com RabbitMQ para envio de emails e push notifications.",
    tech: ["Java", "RabbitMQ", "Docker"],
    repoUrl: "https://github.com",
    status: "dev",
  },
];

const techIcons: Record<string, React.ReactNode> = {
  "Java": <Code2 className="w-3.5 h-3.5" />,
  "Spring Boot": <Server className="w-3.5 h-3.5" />,
  "Spring Data": <Database className="w-3.5 h-3.5" />,
  "Spring Security": <Server className="w-3.5 h-3.5" />,
  "Spring Cloud": <Server className="w-3.5 h-3.5" />,
  "PostgreSQL": <Database className="w-3.5 h-3.5" />,
  "Docker": <Container className="w-3.5 h-3.5" />,
  "Redis": <Database className="w-3.5 h-3.5" />,
  "RabbitMQ": <Server className="w-3.5 h-3.5" />,
};

const statusColors: Record<string, string> = {
  live: "bg-accent/20 text-accent",
  dev: "bg-primary/20 text-primary",
  archived: "bg-muted text-muted-foreground",
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.a
    href={project.repoUrl}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    whileHover={{ y: -4 }}
    className="block rounded-lg border border-border bg-card p-5 transition-shadow duration-200 hover:glow-blue group"
  >
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-2">
        <Github className="w-4 h-4 text-muted-foreground" />
        <span className="font-display text-sm text-primary">{project.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-[10px] font-display px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>
          {project.status}
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span key={t} className="inline-flex items-center gap-1 text-[11px] font-display px-2 py-1 rounded-md bg-secondary text-muted-foreground">
          {techIcons[t] || <Code2 className="w-3 h-3" />}
          {t}
        </span>
      ))}
    </div>
  </motion.a>
);

const ProjectsGrid = () => (
  <section id="projects" className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-display mb-2">
          <span className="text-primary">&gt;</span> projetos
        </h2>
        <p className="text-muted-foreground text-sm">Repositórios e projetos recentes</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sampleProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsGrid;

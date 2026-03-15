import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import AboutSection from "@/components/AboutSection";
import SocialsSection from "@/components/SocialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsGrid />
      <AboutSection />
      <SocialsSection />
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-muted-foreground font-display">
            © 2026 · Built with Java & ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

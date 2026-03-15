import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  '> java -version',
  'openjdk 21.0.2 2024-01-16',
  '',
  '> cat Developer.java',
  '',
  'public class Developer {',
  '  String name = "David";',
  '  String role = "Backend Developer";',
  '  String[] stack = {',
  '    "Java", "Spring Boot",',
  '    "PostgreSQL", "Docker",',
  '    "REST APIs", "Microservices"',
  '  };',
  '',
  '  public String getStatus() {',
  '    return "Building cool stuff 🚀";',
  '  }',
  '}',
];

const TerminalWindow = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsTyping(false);
      return;
    }

    const line = lines[currentLine];
    
    if (currentChar <= line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = line.slice(0, currentChar);
          return newLines;
        });
        setCurrentChar(c => c + 1);
      }, line.startsWith('>') ? 40 : 20);
      return () => clearTimeout(timeout);
    } else {
      setCurrentLine(l => l + 1);
      setCurrentChar(0);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="rounded-lg border border-border overflow-hidden glass">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
        <div className="w-3 h-3 rounded-full bg-destructive/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-accent/70" />
        <span className="ml-2 text-xs text-muted-foreground font-display">terminal</span>
      </div>
      <div className="p-4 font-display text-sm leading-relaxed min-h-[320px]">
        {displayedLines.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-accent' : line.includes('class') || line.includes('public') || line.includes('String') || line.includes('return') ? 'text-primary' : 'text-foreground/80'}>
            {line || '\u00A0'}
          </div>
        ))}
        {isTyping && (
          <span className="text-primary animate-blink">▋</span>
        )}
      </div>
    </div>
  );
};

export default TerminalWindow;

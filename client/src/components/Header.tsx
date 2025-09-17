import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-xl items-center justify-between">
        <div className="mr-4 flex">
          <button 
            onClick={() => scrollToSection('profile')} 
            className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
            data-testid="link-home"
          >
            PORTFOLIO
          </button>
        </div>
        
        <nav className="flex items-center space-x-3 md:space-x-6 text-sm font-medium">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-foreground/60 hover:text-foreground transition-colors hidden sm:block"
            data-testid="link-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="text-foreground/60 hover:text-foreground transition-colors"
            data-testid="link-experience"
          >
            <span className="hidden sm:inline">Experience</span>
            <span className="sm:hidden">Work</span>
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className="text-foreground/60 hover:text-foreground transition-colors hidden sm:block"
            data-testid="link-education"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-foreground/60 hover:text-foreground transition-colors"
            data-testid="link-projects"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('tools')} 
            className="text-foreground/60 hover:text-foreground transition-colors"
            data-testid="link-tools"
          >
            Tools
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>
      </div>
    </header>
  );
}
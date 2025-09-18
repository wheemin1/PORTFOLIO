import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'about', 'education', 'experience', 'projects', 'tools'];
      const scrollPosition = window.scrollY + 100; // 100px 오프셋

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 섹션 설정

    return () => window.removeEventListener('scroll', handleScroll);
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

  const getNavLinkClass = (sectionId: string) => {
    const baseClass = "transition-colors";
    const activeClass = "text-foreground font-semibold";
    const inactiveClass = "text-foreground/60 hover:text-foreground";
    
    return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-xl items-center justify-between mx-auto px-4">
        <div className="mr-4 flex">
          <button 
            onClick={() => scrollToSection('profile')} 
            className={`text-lg font-bold text-primary hover:text-primary/80 transition-colors ${activeSection === 'profile' ? 'text-primary' : ''}`}
            data-testid="link-home"
          >
            PORTFOLIO
          </button>
        </div>
        
        <nav className="flex items-center space-x-3 md:space-x-6 text-sm font-medium">
          <button 
            onClick={() => scrollToSection('about')} 
            className={`${getNavLinkClass('about')} hidden sm:block`}
            data-testid="link-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className={`${getNavLinkClass('education')} hidden sm:block`}
            data-testid="link-education"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={getNavLinkClass('experience')}
            data-testid="link-experience"
          >
            <span className="hidden sm:inline">Experience</span>
            <span className="sm:hidden">Work</span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={getNavLinkClass('projects')}
            data-testid="link-projects"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('tools')} 
            className={getNavLinkClass('tools')}
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
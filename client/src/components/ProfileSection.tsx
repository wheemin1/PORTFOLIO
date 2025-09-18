import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { defaultPortfolioData } from "@shared/portfolio-data";
import type { PersonalInfo } from "@shared/portfolio-data";

export default function ProfileSection() {
  const personalInfo = defaultPortfolioData.personalInfo;

  if (!personalInfo) {
    return (
      <section id="profile" className="py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 mx-auto bg-muted rounded-full animate-pulse" />
            <div className="space-y-4">
              <div className="h-12 bg-muted rounded mx-auto max-w-sm animate-pulse" />
              <div className="h-6 bg-muted rounded mx-auto max-w-xs animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="profile" className="py-16 lg:py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src={personalInfo.profileImage} alt={personalInfo.name} />
            <AvatarFallback className="text-2xl font-semibold">
              {personalInfo.name.split('').slice(0, 2).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight" data-testid="text-name">
              {personalInfo.name}
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span data-testid="text-location">{personalInfo.location}</span>
              <span>•</span>
              <span data-testid="text-email">{personalInfo.email}</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => {
                const newWindow = window.open(personalInfo.linkedinUrl, '_blank', 'noopener,noreferrer');
                if (newWindow) {
                  newWindow.opener = null;
                }
              }}
              data-testid="button-linkedin"
              aria-label="LinkedIn 프로필 방문"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => {
                const newWindow = window.open(personalInfo.githubUrl, '_blank', 'noopener,noreferrer');
                if (newWindow) {
                  newWindow.opener = null;
                }
              }}
              data-testid="button-github"
              aria-label="GitHub 프로필 방문"
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => {
                try {
                  window.location.href = `mailto:${personalInfo.email}`;
                } catch (error) {
                  // Fallback for environments without email client
                  navigator.clipboard?.writeText(personalInfo.email);
                  console.log('Email copied to clipboard:', personalInfo.email);
                }
              }}
              data-testid="button-email"
              aria-label="이메일 보내기"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_7e844a45.png";

interface ProfileSectionProps {
  name?: string;
  location?: string;
  email?: string;
  bio?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export default function ProfileSection({ 
  name = "홍길동",
  location = "Seoul, KR",
  email = "contact@example.com",
  bio = "안녕하세요! 저는 개발자입니다.\n\n새로운 기술을 탐구하고 시스템을 최적화하며 팀을 구축하는 것을 좋아합니다. 처음부터 새로운 도전을 다루는 느낌을 정말 좋아합니다.\n\n혁신적인 솔루션을 통해 사용자 경험을 개선하고 비즈니스 성장에 기여하는 개발자가 되기 위해 노력하고 있습니다.",
  linkedinUrl = "https://linkedin.com",
  githubUrl = "https://github.com"
}: ProfileSectionProps) {
  return (
    <section id="profile" className="py-16 lg:py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src={profileImage} alt={name} />
            <AvatarFallback className="text-2xl font-semibold">
              {name.split('').slice(0, 2).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight" data-testid="text-name">
              {name}
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span data-testid="text-location">{location}</span>
              <span>•</span>
              <span data-testid="text-email">{email}</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.open(linkedinUrl, '_blank')}
              data-testid="button-linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.open(githubUrl, '_blank')}
              data-testid="button-github"
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.location.href = `mailto:${email}`}
              data-testid="button-email"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
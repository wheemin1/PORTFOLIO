import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  type: string;
  period: string;
  details: string[];
  link?: string;
}

export default function ProjectCard({ title, description, type, period, details, link }: ProjectCardProps) {
  const handleClick = () => {
    if (link) {
      // Enhanced security with noopener noreferrer
      const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
      if (newWindow) {
        newWindow.opener = null;
      }
    }
  };

  return (
    <Card 
      className={`transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 ${link ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      data-testid={`card-project-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">{period}</div>
            <div className="text-sm text-muted-foreground">{type}</div>
          </div>
          {link && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
        </div>
        <div>
          <CardTitle className="flex items-center gap-2" data-testid={`text-project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>
            {title}
          </CardTitle>
          <CardDescription className="mt-1" data-testid={`text-project-description-${title.replace(/\s+/g, '-').toLowerCase()}`}>
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li 
              key={index} 
              className="text-sm text-muted-foreground flex items-start"
              data-testid={`text-project-detail-${title.replace(/\s+/g, '-').toLowerCase()}-${index}`}
            >
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolCardProps {
  title: string;
  description: string;
  previewImage?: string;
  link?: string;
}

export default function ToolCard({ title, description, previewImage, link }: ToolCardProps) {
  const handleClick = () => {
    if (link) {
      const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
      if (newWindow) {
        newWindow.opener = null;
      }
    }
  };

  return (
    <Card 
      className={`transition-all duration-200 ${link ? 'hover-elevate cursor-pointer' : ''}`}
      onClick={handleClick}
      data-testid={`card-tool-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <CardHeader className="text-center space-y-4">
        {previewImage && (
          <div className="w-full h-32 bg-muted rounded-md flex items-center justify-center">
            <img 
              src={previewImage} 
              alt={title}
              className="max-w-full max-h-full object-contain rounded-md"
            />
          </div>
        )}
        <div>
          <CardTitle className="text-lg" data-testid={`text-tool-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>
            {title}
          </CardTitle>
          <CardDescription className="mt-2" data-testid={`text-tool-description-${title.replace(/\s+/g, '-').toLowerCase()}`}>
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
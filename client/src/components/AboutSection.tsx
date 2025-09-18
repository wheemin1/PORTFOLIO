import { defaultPortfolioData } from "@shared/portfolio-data";
import type { PersonalInfo } from "@shared/portfolio-data";

export default function AboutSection() {
  const personalInfo = defaultPortfolioData.personalInfo;

  if (!personalInfo) {
    return (
      <section id="about" className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="space-y-4">
              <div className="h-6 bg-muted rounded mx-auto max-w-2xl animate-pulse" />
              <div className="h-6 bg-muted rounded mx-auto max-w-xl animate-pulse" />
              <div className="h-6 bg-muted rounded mx-auto max-w-lg animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="about" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-6">
            {personalInfo.bio.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg leading-relaxed text-muted-foreground"
                data-testid={`text-bio-paragraph-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
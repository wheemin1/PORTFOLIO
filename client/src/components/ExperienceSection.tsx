import SectionHeader from "./SectionHeader";
import { ExternalLink } from "lucide-react";
import { defaultPortfolioData } from "@shared/portfolio-data";
import type { Experience } from "@shared/portfolio-data";

export default function ExperienceSection() {
  const experience = defaultPortfolioData.experience;

  if (!experience) {
    return (
      <section id="experience" className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <SectionHeader title="Experience" />
          <div className="space-y-12 max-w-4xl mx-auto">
            {[1, 2, 3].map((index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3 md:text-right space-y-1">
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-8 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse" />
                </div>
                <div className="md:col-span-8 md:col-start-4 space-y-4">
                  <div className="h-6 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded animate-pulse" />
                    <div className="h-4 bg-muted rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionHeader title="Experience" />
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3 md:text-right space-y-1">
                <div className="text-sm text-muted-foreground">
                  {exp.period.split(' - ')[0]}
                </div>
                <div className="text-2xl font-bold">
                  {exp.period.split(' - ')[1]}
                </div>
                <div className="text-sm text-muted-foreground">
                  {exp.location}
                </div>
              </div>
              
              <div className="md:col-span-8 md:col-start-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold" data-testid={`text-company-${index}`}>
                        {exp.company}
                      </h3>
                      {exp.link && (
                        <button
                          onClick={() => {
                            const newWindow = window.open(exp.link, '_blank', 'noopener,noreferrer');
                            if (newWindow) {
                              newWindow.opener = null;
                            }
                          }}
                          className="text-primary hover:text-primary/80 transition-colors"
                          data-testid={`button-company-link-${index}`}
                          aria-label={`Visit ${exp.company} website`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <p className="text-foreground font-medium" data-testid={`text-position-${index}`}>
                      {exp.position}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-type-${index}`}>
                      {exp.type}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li 
                      key={respIndex} 
                      className="text-muted-foreground flex items-start"
                      data-testid={`text-responsibility-${index}-${respIndex}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import SectionHeader from "./SectionHeader";
import { useQuery } from "@tanstack/react-query";
import type { Education } from "@shared/portfolio-data";

export default function EducationSection() {
  const { data: education, isLoading } = useQuery<Education[]>({
    queryKey: ['/api/portfolio/education']
  });

  if (isLoading || !education) {
    return (
      <section id="education" className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <SectionHeader title="Education" />
          <div className="space-y-8">
            {[1, 2].map((index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:text-right space-y-1">
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-8 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse" />
                </div>
                <div className="md:col-span-3 space-y-4">
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
    <section id="education" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionHeader title="Education" />
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right space-y-1">
                <div className="text-sm text-muted-foreground">
                  {edu.period.split(' - ')[0]}
                </div>
                <div className="text-2xl font-bold">
                  {edu.period.split(' - ')[1]}
                </div>
                <div className="text-sm text-muted-foreground">
                  {edu.location}
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold" data-testid={`text-institution-${index}`}>
                    {edu.institution}
                  </h3>
                  <p className="text-foreground font-medium" data-testid={`text-degree-${index}`}>
                    {edu.degree}
                  </p>
                </div>
                
                {edu.achievements && (
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex} 
                        className="text-muted-foreground flex items-start"
                        data-testid={`text-achievement-${index}-${achIndex}`}
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
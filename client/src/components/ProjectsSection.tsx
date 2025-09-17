import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/portfolio-data";

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/portfolio/projects']
  });

  if (isLoading || !projects) {
    return (
      <section id="projects" className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <SectionHeader title="Projects" />
          <div className="grid gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded animate-pulse w-20" />
                    <div className="h-4 bg-muted rounded animate-pulse w-16" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionHeader title="Projects" />
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
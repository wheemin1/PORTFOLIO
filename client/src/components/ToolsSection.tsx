import SectionHeader from "./SectionHeader";
import ToolCard from "./ToolCard";
import { useQuery } from "@tanstack/react-query";
import type { Tool } from "@shared/portfolio-data";

export default function ToolsSection() {
  const { data: tools, isLoading } = useQuery<Tool[]>({
    queryKey: ['/api/portfolio/tools']
  });

  if (isLoading || !tools) {
    return (
      <section id="tools" className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <SectionHeader title="Software Tools" />
          <div className="text-center mb-8">
            <div className="h-4 bg-muted rounded mx-auto max-w-sm animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4 text-center">
                <div className="w-full h-32 bg-muted rounded-md animate-pulse" />
                <div className="space-y-2">
                  <div className="h-5 bg-muted rounded animate-pulse" />
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
    <section id="tools" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionHeader title="Software Tools" />
        
        <div className="text-center mb-8">
          <p className="text-muted-foreground">개인적으로 사용하기 위해 만든 간단한 도구들</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
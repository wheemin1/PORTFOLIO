import SectionHeader from "./SectionHeader";
import ToolCard from "./ToolCard";

interface Tool {
  title: string;
  description: string;
  previewImage?: string;
  link?: string;
}

interface ToolsSectionProps {
  tools?: Tool[];
}

export default function ToolsSection({ tools }: ToolsSectionProps) {
  // todo: remove mock functionality
  const defaultTools: Tool[] = [
    {
      title: "이미지 편집기",
      description: "빠르게 이미지를 자르고 크기를 조정할 수 있는 도구",
      link: "https://example.com/crop-resize"
    },
    {
      title: "인터벌 타이머", 
      description: "작업 중 눈의 피로를 줄이기 위한 타이머",
      link: "https://example.com/interval-timer"
    },
    {
      title: "시간 변환기",
      description: "Unix 타임스탬프를 쉽게 변환",
      link: "https://example.com/epoch-converter"
    },
    {
      title: "랜덤 선택기",
      description: "무작위로 선택할 수 있는 휠 도구",
      link: "https://example.com/spin-wheel"
    },
    {
      title: "메트로놈",
      description: "음악 연습을 위한 메트로놈",
      link: "https://example.com/metronome"
    }
  ];

  const toolData = tools || defaultTools;

  return (
    <section id="tools" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionHeader title="Software Tools" />
        
        <div className="text-center mb-8">
          <p className="text-muted-foreground">개인적으로 사용하기 위해 만든 간단한 도구들</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolData.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
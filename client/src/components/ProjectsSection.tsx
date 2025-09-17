import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  type: string;
  period: string;
  details: string[];
  link?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  // todo: remove mock functionality
  const defaultProjects: Project[] = [
    {
      title: "ThunderKittens",
      description: "오픈 소스 연구 프로젝트",
      type: "연구 프로젝트",
      period: "2024 - Present",
      details: [
        "AI를 위한 고속 GPU 커널 작성 도구 개발",
        "다중 GPU 커널 지원을 위한 기존 구현 확장",
        "새로운 GPU 가상 머신 프로젝트 진행 중"
      ],
      link: "https://github.com/HazyResearch/ThunderKittens"
    },
    {
      title: "ELF32 Dynamic Linker for Raspberry Pi",
      description: "개인 프로젝트",
      type: "개인 프로젝트", 
      period: "2025 - 2025",
      details: [
        "베어메탈 환경에서 동적 링커 실행 실험",
        "공유 라이브러리 포팅 연구",
        "스탠포드 대학교 강의/실습 자료로 활용 (CS 240LX: ELF and Dynamic Linker)"
      ],
      link: "https://web.stanford.edu/class/cs240lx/"
    },
    {
      title: "Co-Chuck",
      description: "개인 프로젝트",
      type: "개인 프로젝트",
      period: "2024 - 2024", 
      details: [
        "온라인 협업 음악 코딩 플랫폼"
      ],
      link: "https://github.com/example/co-chuck"
    },
    {
      title: "SampvoNet",
      description: "대학교 팀 프로젝트",
      type: "대학 프로젝트",
      period: "2020 - 2020",
      details: [
        "TensorFlow 기반 딥러닝 모델 개발",
        "React.js 기반 모바일 애플리케이션 구현",
        "콘크리트 제조 공정의 자동화된 품질 평가 시스템"
      ],
      link: "https://github.com/example/sampvonet"
    },
    {
      title: "MERCI",
      description: "오픈 소스 연구 프로젝트",
      type: "연구 프로젝트",
      period: "2020 - 2020",
      details: [
        "딥러닝 추천 모델을 위한 고속 임베딩 축소 알고리즘",
        "대규모 임베딩 테이블을 가진 시스템 최적화"
      ],
      link: "https://github.com/example/merci"
    },
    {
      title: "LLVM 컴파일러 최적화",
      description: "대학교 팀 프로젝트",
      type: "대학 프로젝트",
      period: "2020 - 2020",
      details: [
        "서울대학교 LLVM 최적화 경쟁에서 13팀 중 2위 달성"
      ]
    },
    {
      title: "Homemade Neural Network",
      description: "개인 프로젝트",
      type: "개인 프로젝트",
      period: "2020 - 2020",
      details: [
        "순수 Python으로 작성된 딥러닝 프레임워크 (NumPy 미사용)"
      ],
      link: "https://github.com/example/homemade-nn"
    },
    {
      title: "Five-in-a-row with AI",
      description: "개인 프로젝트",
      type: "개인 프로젝트",
      period: "2019 - 2019",
      details: [
        "GUI와 AI 상대가 포함된 오목 게임",
        "Python으로 구현된 GUI 및 AI 시스템",
        "미니맥스 알고리즘 기반 AI 구현"
      ],
      link: "https://github.com/example/five-in-a-row"
    }
  ];

  const projectData = projects || defaultProjects;

  return (
    <section id="projects" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionHeader title="Projects" />
        
        <div className="grid gap-6">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
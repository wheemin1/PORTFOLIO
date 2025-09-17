import SectionHeader from "./SectionHeader";
import { ExternalLink } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  link?: string;
}

interface ExperienceSectionProps {
  experiences?: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  // todo: remove mock functionality
  const defaultExperiences: Experience[] = [
    {
      company: "네이버",
      position: "선임 개발자",
      location: "Bundang, KR",
      period: "2025 - Present",
      type: "정규직",
      responsibilities: [
        "대규모 서비스 아키텍처 설계 및 개발",
        "AI 기반 추천 시스템 최적화로 사용자 만족도 25% 향상",
      ],
      link: "https://www.navercorp.com"
    },
    {
      company: "카카오",
      position: "백엔드 개발자",
      location: "Jeju, KR",
      period: "2024 - Present", 
      type: "정규직",
      responsibilities: [
        "실시간 메시징 시스템 성능 최적화",
        "마이크로서비스 아키텍처 전환 프로젝트 리드",
      ],
      link: "https://www.kakaocorp.com"
    },
    {
      company: "스타트업 A",
      position: "공동창업자 & CTO",
      location: "Seoul, KR",
      period: "2021 - 2023",
      type: "창업",
      responsibilities: [
        "이커머스 플랫폼의 실시간 추천 시스템 구축",
        "월 100만+ 사용자 대상 개인화 서비스 제공",
        "15명 규모의 개발팀 구축 및 관리",
        "MLOps 아키텍처 설계 및 다양한 마이크로서비스 구현",
      ]
    },
    {
      company: "삼성전자",
      position: "연구원",
      location: "Suwon, KR",
      period: "2020 - 2020",
      type: "인턴십",
      responsibilities: [
        "C++로 임베딩 클러스터링 알고리즘 설계 및 구현",
        "상용 딥러닝 추천 모델의 메모리 사용량 44% 최적화",
        "ASPLOS 2021 학회 논문 게재",
      ]
    },
    {
      company: "서울대학교 음향 연구실",
      position: "연구 조교",
      location: "Seoul, KR",
      period: "2019 - 2020",
      type: "연구",
      responsibilities: [
        "CNN, cGAN을 활용한 오디오 처리 아키텍처 구현",
        "Logic Pro와 Python을 이용한 오디오/MIDI 데이터 라벨링",
        "30곡 이상의 모델 훈련용 데이터 전처리",
      ]
    },
    {
      company: "대한민국 육군",
      position: "의무병",
      location: "Dongducheon, KR",
      period: "2017 - 2019",
      type: "병역",
      responsibilities: [
        "기계화보병사단 의무대에서 21개월간 복무",
        "KATUSA 프로그램을 통해 한미연합군과 협력",
      ]
    }
  ];

  const experienceData = experiences || defaultExperiences;

  return (
    <section id="experience" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionHeader title="Experience" />
        
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right space-y-1">
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
              
              <div className="md:col-span-3 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold" data-testid={`text-company-${index}`}>
                        {exp.company}
                      </h3>
                      {exp.link && (
                        <button
                          onClick={() => window.open(exp.link, '_blank')}
                          className="text-primary hover:text-primary/80 transition-colors"
                          data-testid={`button-company-link-${index}`}
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
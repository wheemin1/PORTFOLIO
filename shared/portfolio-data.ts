// Portfolio data types and default configuration
export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  bio: string;
  linkedinUrl: string;
  githubUrl: string;
  profileImage?: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements?: string[];
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  type: string;
  period: string;
  details: string[];
  link?: string;
}

export interface Tool {
  title: string;
  description: string;
  previewImage?: string;
  link?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  tools: Tool[];
}

// Default portfolio data - customize this to match your information
export const defaultPortfolioData: PortfolioData = {
  personalInfo: {
    name: "홍길동",
    location: "Seoul, KR",
    email: "contact@example.com",
    bio: "안녕하세요! 저는 개발자입니다.\n\n새로운 기술을 탐구하고 시스템을 최적화하며 팀을 구축하는 것을 좋아합니다. 처음부터 새로운 도전을 다루는 느낌을 정말 좋아합니다.\n\n혁신적인 솔루션을 통해 사용자 경험을 개선하고 비즈니스 성장에 기여하는 개발자가 되기 위해 노력하고 있습니다.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com"
  },
  education: [
    {
      institution: "서울대학교",
      location: "Seoul, KR",
      degree: "컴퓨터공학 석사",
      period: "2024 - Present",
      achievements: [
        "우수 학업 성취 장학금 수혜 (₩6,000,000)",
      ]
    },
    {
      institution: "연세대학교",
      location: "Seoul, KR", 
      degree: "컴퓨터공학 학사",
      period: "2016 - 2022",
      achievements: [
        "GPA: 4.2/4.3 (상위 1%)",
        "국가우수장학금(이공계) 수혜",
        "공과대학 학회 회장"
      ]
    }
  ],
  experience: [
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
  ],
  projects: [
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
  ],
  tools: [
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
  ]
};
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
    name: "조휘민",
    location: "Seoul, KR",
    email: "jowheemin@gmail.com",
    bio: "안녕하세요! 아이디어를 현실로 만드는 메이커형 AI 서비스 기획자, 조휘민입니다.\n\n새로운 기술을 탐구하고 시스템을 최적화하며 팀을 구축하는 것을 좋아합니다. 처음부터 새로운 도전을 다루는 느낌을 정말 좋아합니다.\n\n혁신적인 솔루션을 통해 사용자 경험을 개선하고 비즈니스 성장에 기여하는 개발자가 되기 위해 노력하고 있습니다.",
    linkedinUrl: "",
    githubUrl: "https://github.com/wheemin1"
  },
  education: [
    {
      institution: "세종대학교",
      location: "Seoul, KR",
      degree: "건설환경공학 학사 과정 (2026년 2월 졸업 예정)",
      period: "2020 - Present",
      achievements: [
        "디지털 물산업 인재 장학금 수혜 & [세종대학교] 교량 경진 대회 대상 수상",
      ]
    }
  ],
  experience: [
    {
      company: "앤드트레이딩 (ANDTRADING)",
      position: "설립자 (Founder) / 대표",
      location: "Gangdong, KR",
      period: "2025 - Present",
      type: "개인 창업 (Sole Proprietorship)",
      responsibilities: [
        "식품 무역업으로 개인 창업을 통해 아이디어를 실제 비즈니스로 구현",
        "해외(호주) 파트너십 구축 및 시장 조사를 통해 사업 계획 수립",
        "시장 조사, 사업 계획 수립부터 정식 사업자 등록까지 직접 완료",
      ],
    },
    {
      company: "롬롬 (ROMROM)",
      position: "서비스 기획 총괄 / Product Manager",
      location: "Seoul, KR",
      period: "2024.09 - Present", 
      type: "사이드 프로젝트",
      responsibilities: [
        "'물물교환'의 본질적 문제를 AI로 해결하고자 하는 목표로 45개 스크린 규모의 MVP 서비스 기획",
        "Figma를 활용하여 전체 UI/UX 와이어프레임 및 프로토타입 설계 주도",
        "API 명세 정의 및 실시간 채팅 아키텍처(RabbitMQ) 도입 제안 등 개발 협업",
        "프로젝트 로드맵을 수립하고 매주 정기 회의를 주관하며 팀 리딩",
      ],
    },
    {
      company: "데일리스냅 (DailySnap)",
      position: "서비스 기획 / Product Manager",
      location: "Seoul, KR",
      period: "2025.01 - 2025.09",
      type: "사이드 프로젝트",
      responsibilities: [
        "매일 새로운 키워드에 맞는 사진을 공유하는 소셜 챌린지 앱 서비스 기획",
        "사용자 참여 유도를 위한 게이미피케이션(Gamification) 요소 및 보상 시스템 설계",
        "핵심 팀원(디자이너)의 이탈로 MVP 출시 전 프로젝트가 중단되었으며, 이를 통해 팀 구성의 중요성과 리소스 변동성에 대처하는 위기관리 능력의 필요성을 학습",
      ]
    },
    {
      company: "대한민국 해병대 (Republic of Korea Marine Corps) ",
      position: "폭발물처리팀(EHCT) 부팀장 (Vice Team Leader)",
      location: "Yeonpyeong, KR",
      period: "2021 - 2023",
      type: "병역",
      responsibilities: [
        "서북도서 최전방 연평부대에서 1년간 폭발물처리팀(EHCT) 부팀장 임무 수행",
        "중사급 팀장을 보좌하여 지뢰 탐지 및 제거 작전 계획을 수립하고, 작전 브리핑 및 병력 통제, 임무 할당 등 팀 운영을 실질적으로 리딩",
        "예측 불가능한 작전 환경 속에서 발생하는 다양한 변수에 대응하고, 팀원들의 안전을 확보하며 주어진 임무를 100% 완수하는 위기관리 능력 체득",
      ]
    }
  ],
  projects: [
    {
      title: "롬롬 (RomRom)",
      description: "AI 기반 차세대 가치 교환 플랫폼",
      type: "AI 서비스 기획/개발 총괄 프로젝트",
      period: "2024.09 - Present",
      details: [
        "45개 스크린 규모의 MVP 서비스 기획 및 전체 프로덕트 로드맵 설계",
        "물건, 재능, 시간'의 가치를 연결하는 차별화된 비즈니스 모델 수립",
        "AI 가격 추천, 실시간 채팅 등 핵심 기능의 UX/정책 상세 기획"
      ],
      link: "https://github.com/HazyResearch/ThunderKittens"
    },
    {
      title: "MoCheck - 모바일 친화도 체커",
      description: "PM과 비개발자를 위한 웹 성능 분석 도구",
      type: "개인 프로젝트",
      period: "2024.06 - 2024.08", 
      details: [
        "Google PageSpeed Insights API와 Lighthouse 엔진을 활용하여 정확한 데이터 제공",
        "복잡한 성능 지표를 비개발자도 쉽게 이해할 수 있도록 시각적으로 재구성",
        "기획자/마케터의 관점에서 필요한 핵심 정보 위주로 대시보드 설계",
      ],
      link: "https://mocheck.netlify.app/"
    },
    {
      title: "SecureNote - GPS 메타데이터 제거 도구",
      description: "개인정보 보호를 위한 이미지 일괄 처리 웹앱",
      type: "개인 프로젝트", 
      period: "2025.07 - 2025.09",
      details: [
        "이미지 속 GPS 메타데이터를 감지하고 제거하여 사용자 개인정보 보호 기능 구현",
        "웹 워커(Web Worker) 기술을 활용하여 대용량 파일의 빠른 백그라운드 처리 시스템 설계",
        "다수의 이미지를 동시에 처리하고 ZIP으로 다운로드하는 일괄 처리 기능 개발"
      ],
      link: "https://securegps.netlify.app/"
    },
    {
      title: "TimeSync - 글로벌 팀을 위한 시차 변환 미팅 조율기",
      description: "다국적 팀원들의 시간대를 자동으로 변환하여 최적의 회의 시간을 찾아주는 웹앱",
      type: "개인 프로젝트",
      period: "2024.05 - 2024.08", 
      details: [
        "글로벌 분산 팀(Distributed Team)의 고질적인 문제인 '시차 계산'의 비효율을 해결",
        "사용자가 자신의 '현지 시간' 기준으로 가능 시간을 입력하면, 다른 모든 팀원에게는 자동으로 변환되어 보이는 UI/UX 설계",
        "모든 팀원의 응답을 종합하여, 모두에게 가장 합리적인 '골든 타임'을 찾아 시각적으로 추천하는 기능 구현",
      ],
      link: "https://globalmeetingtime.netlify.app/"
    },
    {
      title: "개인 프로젝트 (20개 이상)",
      description: "아이디어의 신속한 프로토타이핑 및 기술 검증",
      type: "개인 프로젝트",
      period: "2023 - Present",
      details: [
        "AI 개발 툴(Replit, V0 등)을 활용하여 아이디어를 빠르게 실제 작동하는 웹앱으로 구현",
        "주요 성과: 한달 내 1000회 이상 노출",
        "단어 유사도 게임, GPS 데이터 제거 툴 등 다양한 기술 스택을 실험하며 '만드는 기획자'로서의 역량 강화",
      ]
    },
    {
      title: "데일리스냅 (DailySnap)",
      description: "소셜 사진 챌린지 앱 서비스 기획",
      type: "사이드 프로젝트",
      period: "2025.01 - 2025.09",
      details: [
        "매일 새로운 키워드에 맞는 사진을 공유하는 소셜 챌린지 앱 서비스 기획",
        "사용자 리텐션을 높이기 위한 게이미피케이션(Gamification) 전략 및 보상 시스템 설계",
        "프로젝트 관리 및 주간 기획 회의를 직접 주도하며 초기 기획,개발 리딩",
        "주요 팀원 이탈로 프로젝트는 중단되었으나, 초기 서비스 기획 및 스토리보드 제작 경험 습득"
      ],
      link: "https://github.com/example/sampvonet"
    },
    {
      title: "교내 교량 경진 대회",
      description: "[세종대학교] 주관 교량 경진대회 대상 수상",
      type: "교내 프로젝트",
      period: "2025",
      details: [
        "실시간 하중 예측을 통해 교량의 안정성을 높이는 모델을 제안하여 대상 수상",
        "전공(건설환경공학) 지식과 AI 기술을 융합하여 문제를 해결하는 능력 증명"
      ]
    }
  ],
  tools: [
    {
      title: "개발 툴 모음 (DevTools Collection)",
      description: "개발 및 기획 과정에서 자주 사용하는 인코더/디코더, 포맷터 등을 모아놓은 온라인 유틸리티",
      link: "https://developertoolss.netlify.app/"
    },
    {
      title: "로또 번호 분석 및 시뮬레이터 (Lotto Simulator)", 
      description: "데이터를 기반으로 통계를 분석하고, 특정 로직에 따른 번호 생성을 시뮬레이션하는 도구",
      link: "https://lotto33.netlify.app/"
    },
    {
      title: "단축키 모음집 (Shortcut Cheatsheet)",
      description: "Figma, Notion 등 생산성 툴의 단축키를 검색하고 빠르게 확인할 수 있는 인터랙티브 웹페이지",
      link: "https://shortscut.netlify.app/"
    },
    {
      title: "룬 문자 변환기 (Rune Converter)",
      description: "입력한 알파벳을 고대 룬 문자로 변환해 주는 엔터테인먼트 도구",
      link: "https://viking-rune-converter.netlify.app/"
    },
    {
      title: "오늘의 예언 (Daily Oracle)",
      description: "하루에 한 번, 랜덤으로 생성된 짧은 예언이나 격언을 보여주는 웹 서비스",
      link: "https://prophecy123.netlify.app/"
    },
    {
      title: "SEO 프리뷰 툴 (SEO Preview Tool)",
      description: "웹페이지의 제목과 설명을 입력하면, 구글 검색 결과에 어떻게 보일지 미리 시뮬레이션해주는 도구",
      link: "https://seopreview.netlify.app/"
    }
  ]
};
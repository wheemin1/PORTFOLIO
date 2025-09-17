import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="grid gap-6 max-w-2xl">
      <ProjectCard
        title="AI 추천 시스템"
        description="오픈 소스 연구 프로젝트"
        type="개인 프로젝트"
        period="2024 - Present"
        details={[
          "AI를 위한 고속 GPU 커널 작성 도구 개발",
          "다중 GPU 커널 지원을 위한 기존 구현 확장",
          "새로운 GPU 가상 머신 프로젝트 진행 중"
        ]}
        link="https://example.com"
      />
      <ProjectCard
        title="React 대시보드"
        description="팀 프로젝트"
        type="회사 프로젝트"
        period="2023 - 2024"
        details={[
          "모바일 반응형 대시보드 구현",
          "실시간 데이터 시각화",
          "사용자 경험 개선"
        ]}
      />
    </div>
  );
}
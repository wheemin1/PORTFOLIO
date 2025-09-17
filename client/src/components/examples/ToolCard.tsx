import ToolCard from '../ToolCard';

export default function ToolCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
      <ToolCard
        title="이미지 편집기"
        description="빠르게 이미지를 자르고 크기를 조정할 수 있는 도구"
        link="https://example.com/crop-resize"
      />
      <ToolCard
        title="인터벌 타이머"
        description="작업 중 눈의 피로를 줄이기 위한 타이머"
        link="https://example.com/interval-timer"
      />
      <ToolCard
        title="시간 변환기"
        description="Unix 타임스탬프를 쉽게 변환"
        link="https://example.com/epoch-converter"
      />
      <ToolCard
        title="랜덤 선택기"
        description="무작위로 선택할 수 있는 휠 도구"
        link="https://example.com/spin-wheel"
      />
      <ToolCard
        title="메트로놈"
        description="음악 연습을 위한 메트로놈"
        link="https://example.com/metronome"
      />
    </div>
  );
}
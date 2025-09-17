interface AboutSectionProps {
  bio?: string;
}

export default function AboutSection({ 
  bio = "안녕하세요! 저는 개발자입니다.\n\n새로운 기술을 탐구하고 시스템을 최적화하며 팀을 구축하는 것을 좋아합니다. 처음부터 새로운 도전을 다루는 느낌을 정말 좋아합니다.\n\n혁신적인 솔루션을 통해 사용자 경험을 개선하고 비즈니스 성장에 기여하는 개발자가 되기 위해 노력하고 있습니다."
}: AboutSectionProps) {
  return (
    <section id="about" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-6">
            {bio.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg leading-relaxed text-muted-foreground"
                data-testid={`text-bio-paragraph-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
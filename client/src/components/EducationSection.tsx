import SectionHeader from "./SectionHeader";

interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements?: string[];
}

interface EducationSectionProps {
  education?: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  // todo: remove mock functionality
  const defaultEducation: Education[] = [
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
  ];

  const educationData = education || defaultEducation;

  return (
    <section id="education" className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <SectionHeader title="Education" />
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right space-y-1">
                <div className="text-sm text-muted-foreground">
                  {edu.period.split(' - ')[0]}
                </div>
                <div className="text-2xl font-bold">
                  {edu.period.split(' - ')[1]}
                </div>
                <div className="text-sm text-muted-foreground">
                  {edu.location}
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold" data-testid={`text-institution-${index}`}>
                    {edu.institution}
                  </h3>
                  <p className="text-foreground font-medium" data-testid={`text-degree-${index}`}>
                    {edu.degree}
                  </p>
                </div>
                
                {edu.achievements && (
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex} 
                        className="text-muted-foreground flex items-start"
                        data-testid={`text-achievement-${index}-${achIndex}`}
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
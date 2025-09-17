import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <ProfileSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ToolsSection />
      </main>
      
      <Footer />
    </div>
  );
}
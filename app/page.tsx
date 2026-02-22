import { Sidebar, MobileNav } from "@/components/sidebar";
import {
  AboutSection,
  ExperienceSection,
  EngagementsSection,
  SkillsSection,
  EducationSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <MobileNav />
      <div className="page-wrapper">
        <div className="page-grid">
          <Sidebar />
          <main className="main-content">
            <AboutSection />
            <ExperienceSection />
            <EngagementsSection />
            <SkillsSection />
            <EducationSection />
          </main>
        </div>
      </div>
    </>
  );
}

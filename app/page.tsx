import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/projects";
import SkillSection from "@/components/skills";
import { IconButton } from "@/components/ui/icon-button";
import { TimeLineSection } from "@/components/timeline";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-between md:p-24 p-6 max-w-6xl mx-auto">
      <HeroSection />
      <Link href="/projects/14">intercepted</Link>
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      {/* <TimeLineSection /> */}
      <ContactSection />
      <div className="fixed md:bottom-16 md:right-16 bottom-6 right-6 bg-green-400 rounded-full">
        <a
          href="/sathish_s_resume.pdf"
          download
          className="relative p-3 block bg-teal-400 rounded-full after:absolute after:inset-0 after:rounded-full w-full h-full after:z-[-2] after:bg-teal-400/40 after:animate-ping
						 text-white shadow-md"
        >
          <Download size={20} />
        </a>
      </div>
    </main>
  );
}

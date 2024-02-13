import AboutSection from '@/components/about';
import ContactSection from '@/components/contact';
import HeroSection from '@/components/hero-section';
import ProjectSection from '@/components/projects';
import SkillSection from '@/components/skills';
import { TimeLineSection } from '@/components/timeline';

export default function Home() {
	return (
		<main className=' flex-1 flex flex-col items-center justify-between md:p-24 p-6 max-w-6xl mx-auto'>
			<HeroSection />
			<AboutSection />
			<SkillSection />
			<ProjectSection />
			{/* <TimeLineSection /> */}
			<ContactSection />
		</main>
	);
}

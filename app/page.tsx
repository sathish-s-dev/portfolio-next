import { ContactSection } from '@/components/contact-section';
import { ProjectSection } from '@/components/projects-section';
import SkillSection from '@/components/skills-section';

export default function Home() {
	return (
		<main className=' flex-1 flex flex-col items-center justify-between md:p-24 p-6 max-w-6xl mx-auto'>
			<SkillSection />
			<ProjectSection />
			<ContactSection />
		</main>
	);
}

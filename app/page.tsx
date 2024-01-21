import { ContactSection } from '@/components/contact-section';
import { ProjectSection } from '@/components/projects-section';

export default function Home() {
	return (
		<main className=' flex-1 flex flex-col items-center justify-between md:p-24 p-6 max-w-6xl mx-auto'>
			<ProjectSection />
			<ContactSection />
		</main>
	);
}
